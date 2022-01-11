import React, {Fragment} from 'react'

export default function GifCard(gif) {
    return (
        <Fragment>
            <img src={gif.gif.images.original.url}></img>
        </Fragment>
    )
}
