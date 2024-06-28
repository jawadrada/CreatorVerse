import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from "../client"
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";


function ViewCreator() {
  const [creator, setCreator] = useState(null)
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect (() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()

        if (error) {
          console.log("Error fetching data: ", error)
        }

        else {
          const filteredCreator = data.filter((creator) => creator.id == id)
          setCreator(filteredCreator[0])
          console.log(creator)
        }
    }

    fetchCreator()
  }, [id])

  if (creator === null){
    return <p>Creator Not found.</p>
  }

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id)

      if (error) {
        console.log("Error fetching data: ", error)
      }

      else {
        console.log("Data deleted: ", data)
        navigate("/")
      }
  }

  return (
    <>
        <div className="bg-black py-20">
          <div className="flex justify-center container mx-52 pb-20">
            <div className="flex flex-col rounded shadow-lg border-2 border-white">
              <img className="w-full h-96 object-cover" src={creator.imageURL} alt={creator.name} />
            </div>

            <div className="flex flex-col text-white px-4">
              <h1 className="text-5xl font-bold mx-4 mb-6">{creator.name}</h1>
              <p className="text-lg ml-4 mr-80 mb-4">{creator.description}</p>

              { creator.yt_url && (
                <a href={creator.yt_url} target="_blank"  className="flex items-center justify-start w-7/12 h-10 lg:h-16 ml-4 text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:border hover:border-white mb-4 hover:scale-105">
                  <FaYoutube size={30} className="mr-4 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                  {creator.yt_url}
                </a>
              )}

              { creator.insta_url && (
                <a href={creator.insta_url} target="_blank" className="flex items-center justify-start w-7/12 h-10 lg:h-16 ml-4 text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:border hover:border-white mb-4 hover:scale-105">
                  <FaInstagram size={30} className="mr-4 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                  {creator.insta_url}
                </a>
              )}
              
              { creator.twitter_url && (
                <a href={creator.twitter_url} target="_blank" className="flex items-center justify-start w-7/12 h-10 lg:h-16 ml-4 text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:border hover:border-white mb-4 hover:scale-105">
                  <FaTwitter size={30} className="mr-4 transition-transform duration-300 ease-in-out transform hover:scale-125" />
                  {creator.twitter_url}
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-center items-center space-x-20">
            <Link to={`/edit/${id}`}>
                <button className="w-60 h-14 bg-green-500 text-center text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition hover:bg-green-600 hover:border hover:border-white">
                  EDIT
                </button>
            </Link>

            <button onClick={handleDelete} className="w-60 h-14 bg-red-500 text-center text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition hover:bg-red-600 hover:border hover:border-white">
              DELETE
            </button>
          </div>
        </div>
    </>
  )
}

export default ViewCreator
