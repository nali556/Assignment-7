import React, {Fragment} from 'react'

export default function RandomGif(randGif) {
    return (
        <Fragment>
            <div className="container text-center p-2 trend-gifs">
            <img src={randGif.images}></img>
            </div>
        </Fragment>
    )
}
