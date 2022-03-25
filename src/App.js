import React, {useState} from "react";
import { getWeather } from "./api/getWeather";
import './App.css'
const App = () =>{
    const [query, setQuery] = useState('')
 
    const search = async (e) =>{
        if(e.key === 'Enter'){
            const data = await getWeather(query)
 
            console.log(data);        }
    }
 
    return(
        <div className="main-container">
            <input
                type='text'
                className="search"
                placeholder="Search..."
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
    );
}
 
export default App;