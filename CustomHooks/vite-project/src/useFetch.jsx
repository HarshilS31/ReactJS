import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setData(data));
  }, [url]); // depend on url, not data

  return [data]; // return the state
};

export default useFetch;
 //WE EXPORTED OUR CUSTOM HOO,NOW WE CAN USE IT IN ANY OTHER COMPONENT