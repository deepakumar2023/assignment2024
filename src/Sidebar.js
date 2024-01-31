import React, { useState } from 'react'

import { Link } from 'react-router-dom';


const Sidebar = ({ isCardView, setlsCardView, setToggleView }) => {

    return (

        <div className='flex '>
            <div className=' bg-blue-200 text-white p-6'>
                <div className='bg-white text-black font-bold text-[20px] py-2 px-4 rounded-lg mt-3 w-[300px] h-[77px]'>

                    Hiii Reader
                    <br />
                    <span className='font-normal text-base text-[17px]'>Here's Your News!</span>
                </div>


                <div className='bg-white text-black font-bold text-[28px] py-2 px-4 rounded-lg mt-3 w-[300px] h-[161px]'>
                    View Toggle
                    <br />
                    <button className='bg-gray-400 hover:bg-blue-500 text-black font-semibold py-2 px-4 rounded w-[45%]'
                        onClick={() => {
                            setlsCardView(true)
                            setToggleView(false);
                        }}
                    >
                        Toggle
                    </button>

                    <button className='  bg-green-400 hover:bg-blue-500 text-black font-semibold py-2 px-4 rounded ml-8 w-[40%]'
                        onClick={() => {
                            setlsCardView(false)
                            setToggleView(true);
                        }}
                    >
                        Card
                    </button>

                </div>




                <div className='bg-white text-black font-bold text-[28px] py-2 px-4 rounded-lg mt-3 w-[300px] h-[170px]'>
                    Have a Feedback?


                    <Link to={'/Form'} className='bg-[#A3FFD3] w-[350px] h-15 rounded-lg mt-2'>
                        We're Listening

                    </Link>


                </div>

            </div>
        </div>
    )
}

export default Sidebar;