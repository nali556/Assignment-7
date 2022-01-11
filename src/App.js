import React, {Fragment, useState, useEffect} from "react"
import axios from 'axios'
import './App.css'
import GifCard from "./components/GifCard"

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
    console.log(e)
    console.log(e.target[0].value)
    url += e.target[0].value + apiKey
    console.log(url)
    const res = await axios.get(url)
    .then( res=>{
      setData(res.data.data)
    })
  }
  //Trending gif search
  const getTrending = async () =>{
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
    <div className="container">
      <form onSubmit={getData}>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">GIF Search</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter keywords here"></input>
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </form>
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
    </div>
    </Fragment>
  );
}

export default App;
