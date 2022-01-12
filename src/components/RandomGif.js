import React, {Fragment} from 'react'

export default function RandomGif(randGif) {
    console.log(Object.keys(randGif.randGif))
    return (
        <Fragment>
            <div className="container text-center p-2 trend-gifs">
            <img src={randGif.randGif.url}></img>
            </div>
        </Fragment>
    )
}
