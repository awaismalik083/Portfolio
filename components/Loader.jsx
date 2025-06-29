import React from 'react'

import './Loader.css'
const Loader = () => {
    return (
        <div className='fixed  insert-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center'>
            <div className="loader">
                <div className="box">
                    <div className="logo">
                        <p className='font-bold text-sm text-center mt-2 flex justify-center items-center text-white'>Logo</p>
                    </div>
                </div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>

        </div>
    )
}

export default Loader