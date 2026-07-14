import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../APIs/mediaAPI"
import { setActiveTabs, setQuery, setLoading, setResults, setError } from "../features/searchSlice"
import { useDispatch, useSelector } from "react-redux"
import Card from "./Card";

const Grid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error, cache } = useSelector(store => store.search)

  useEffect(() => {
    if (!activeTab) return

    const cacheKey = `${activeTab}:${query}`
    const cached = cache[cacheKey]

    if (cached) {
      dispatch(setResults(cached))
      return
    }

    const getData = async () => {
      dispatch(setLoading())
      let data = [];
      try {
        if (activeTab === "Photos") {
          const resp = await fetchPhotos(query)
          data = resp.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html
          }))
        }
        else if (activeTab === "Videos") {
          const resp = await fetchVideos(query)
          data = resp.videos.map((item) => ({
            id: item.id,
            type: 'video',
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }))
        }

        dispatch(setResults(data))
      } catch (err) {
        dispatch(setError(err.message))
      }
    }

    getData()
  }, [query, activeTab])

  return (
    <div className="rounded-2xl px-5 py-10 overflow-auto">
      {loading && <p className="text-center text-gray-400">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {results.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Grid