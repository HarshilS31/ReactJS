import { use } from "react"
//use() hook lets  read and load resources asynchronously such as promises or context .Unlike other hooks,it can be utilized in loops and conditions
//In certain conditions ,it can serve as a replacemnt for useEffect() when fetching data,and it streamlines context usage by allowing you to use use(Context) instead of useContext(context)
async function fetchData() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const fetched_data = await resp.json();
    return fetched_data;
}
const USE_Hook = () => {
    const data =use(fetchData());
    return  <h1>
        {data.title}
    </h1>

}

export default USE_Hook