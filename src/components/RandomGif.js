import React, {Fragment} from 'react'

export default function RandomGif({randGif}) {
    if (randGif.images === undefined){
        return(
            <div className="text-center">
                Random Gif:
            </div>
        )
    }
    console.log(randGif)
    return (
        <Fragment>
            <div className="container text-center p-2 trend-gifs">
            <h1>Random gif:</h1>
             <img src={randGif.images.original.url}></img>
            </div>
        </Fragment>
    )
}
