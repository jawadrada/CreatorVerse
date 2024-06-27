import React from 'react'
import { Link } from "react-router-dom"
import Globe_image from "../assets/Globe_image.webp"

function Home() {
  return (
    <>
        <div className="relative h-[75vh] border-b-2 border-white">
            <img className="w-full h-full object-cover" src={Globe_image} alt="Background Image of a globe" />

            <div className="absolute inset-0 flex flex-col items-center justify-center md:-top-20 lg:-top-28 z-10">
                <h1 className="font-mono gradient-text text-6xl md:text-7xl lg:text-9xl font-extrabold mb-16">Creator Verse</h1>

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-12">
                    <Link to="/creators">
                        <button className="w-72 h-12 lg:h-16 bg-indigo-500 text-center text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition hover:bg-indigo-600 hover:border hover:border-white">
                            VIEW ALL CREATORS
                        </button>
                    </Link>

                    <Link to="/add"> 
                        <button className="w-72 h-12 lg:h-16 bg-indigo-500 text-center text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition hover:bg-indigo-600 hover:border hover:border-white">
                            ADD A CREATOR
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home