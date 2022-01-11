import React, {Fragment} from 'react'

export default function GifCard(gif) {
    return (
        <Fragment>
            <div className="container text-center p-2">
                <img src={gif.gif.images.original.url}></img>
            </div>
        </Fragment>
    )
}
