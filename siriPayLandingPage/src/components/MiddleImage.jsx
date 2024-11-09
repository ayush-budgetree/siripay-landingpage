import React from 'react'
import appImageMiddle from '../assets/appImageMiddle.png'


const MiddleImage = () => {
    return (
        <div className="w-full md:w-1/2 flex float-end  justify-center">
            <img src={appImageMiddle} alt="ImageMiddle" className="w-auto h-auto"/>
        </div>
    )
}

export default MiddleImage
