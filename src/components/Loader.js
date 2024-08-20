import React from 'react'
import train from './train.gif'

const Loader = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={train} alt="loading" />
            </div>
        )
}

export default Loader;