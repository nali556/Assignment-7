import React, {Fragment} from 'react'

export default function Trending(trendGif) {
    console.log(trendGif)
    return (
        <Fragment>
            <div className="container text-center p-2 trend-gifs">
                <img src={trendGif.trendGif.images.original.url}></img>
            </div>
        </Fragment>
    )
}
