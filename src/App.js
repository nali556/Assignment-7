import React, {Fragment, useState, useEffect} from "react"
import axios from 'axios'
import './App.css'
import GifCard from "./components/GifCard"
import Trending from "./components/Trending"

function App() {
  const [data, setData] = useState([])
  const [trendingData, setTrending] = useState([])
  
  let url = "https://api.giphy.com/v1/gifs/search?q="
  let apiKey = "&api_key=9GgSjkzGd4vLTPMLyJR1XWM2pZkyVJ9E"
  let trendingUrl = "http://api.giphy.com/v1/gifs/trending?api_key=" + apiKey
  let randomUrl = "http://api.giphy.com/v1/gifs/random?api_key=" + apiKey
  //Function for regular gif search, take in search and concanenate string 
  const getData = async (e) =>{
    e.preventDefault()
    url += e.target[0].value + apiKey
    console.log(url)
    const res = await axios.get(url)
    .then( res=>{
      setData(res.data.data)
    })
  }
  //Trending gif search
  const getTrending = async () =>{
    console.log("getTrending working")
    const trendRes = await axios.get(trendingUrl)
    .then( trendRes =>{
      setTrending(trendRes.data.data)
    })
  }

  /*Random gif search
  const getRandom = async () => {
    const res = await axios.get(randomUrl)
    .then( res=>{
      setData(res.data.data)
    })
  }*/

  return (
    <Fragment>
      <div className="container gap-3">
        <form onSubmit={getData}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">GIF Search</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter keywords here"></input>
            <button type="submit" className="btn btn-primary mr-1 search">Search</button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-around">
        <button type="submit" className="btn btn-primary trending" onClick={getTrending}>Get Trending GIFs</button>
        <button type="submit" className="btn btn-primary random">Random GIF</button>
      </div>
      <div className="container">
        {
          data.map(element =>(
            <div key ={element.id}>
              <GifCard gif={element} />
            </div>
          )
          )
        }
      </div>
    </Fragment>
  );
}

export default App;
