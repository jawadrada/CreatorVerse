import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from "../client"
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"

function EditCreator() {
  const { id } = useParams()
  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [description, setDescription] = useState("")
  const [yt_url, setYt_url] = useState("")
  const [insta_url, setInsta_url] = useState("")
  const [twitter_url, setTwitter_url] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select()
        .eq('id', id)
        .single()

      if (error) {
        console.error("Error fetching data: ", error)
      } 
      
      else {
        setName(data.name)
        setImageURL(data.imageURL)
        setDescription(data.description)
        setYt_url(data.yt_url)
        setInsta_url(data.insta_url)
        setTwitter_url(data.twitter_url)
      }
    };

    fetchCreator()
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('creators')
      .update({
        name,
        imageURL,
        description,
        yt_url,
        insta_url,
        twitter_url
      })
      .eq('id', id)

    if (error) {
      console.error("Error updating data: ", error)
    } 
    
    else {
      console.log("Data updated: ", data)
      navigate("/creators")
    }
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
        <div className="bg-black text-white">
          <form onSubmit={handleSubmit} className="flex flex-col container mx-auto w-1/2 p-16">
            <label htmlFor='name' className="text-2xl font-semibold py-2">Name</label>
            <input
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-black p-3 mb-4 rounded"
            />

            <label htmlFor='image' className="text-2xl font-semibold py-2">Image</label>
            <p className="italic text-sm py-2">Provide a link to an image of your creator. Be sure to include the http://</p>
            <input
            name="image"
            type="text"
            required
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="text-black p-3 mb-4 rounded"
            />

            <label htmlFor='des' className="text-2xl font-semibold py-2">Description</label>
            <p className="italic text-sm py-2">Provide a description of the creator. Who are they? What makes them interesting?</p>
            <input
            name="des"
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-black p-3 mb-6 rounded"
            />

            <h1 className="text-2xl font-bold text-indigo-500 mb-4">SOCIAL MEDIA LINKS</h1>
            <p className="italic text-sm mb-4">Provide at least one of the creator's social media links.</p>

            <div className="flex items-center p-2 rounded">
              <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full mr-2">
                <FaYoutube className="text-black" />
              </div>
              <label htmlFor='yt' className="text-2xl font-semibold py-2">YouTube</label>
            </div>
            <p className="italic text-sm mb-4">The creator's YouTube handle (without the @)</p>
            <input
            name="yt"
            type="text"
            value={yt_url}
            onChange={(e) => setYt_url(e.target.value)}
            className="text-black p-3 mb-4 rounded"
            />

            <div className="flex items-center p-2 rounded">
              <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full mr-2">
                <FaInstagram className="text-black" />
              </div>
              <label htmlFor='insta' className="text-2xl font-semibold py-2">Instgram</label>
            </div>
            <p className="italic text-sm mb-4">The creator's Instagram handle (without the @)</p>
            <input
            name="insta"
            type="text"
            value={insta_url}
            onChange={(e) => setInsta_url(e.target.value)}
            className="text-black p-3 mb-4 rounded"
            />

            <div className="flex items-center p-2 rounded">
              <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full mr-2">
                <FaTwitter className="text-black" />
              </div>
              <label htmlFor='twitt' className="text-2xl font-semibold py-2">Twitter</label>
            </div>
            <p className="italic text-sm mb-4">The creator's Twitter handle (without the @)</p>
            <input
            name="twitt"
            type="text"
            value={twitter_url}
            onChange={(e) => setTwitter_url(e.target.value)}
            className="text-black p-3 mb-12 rounded"
            />


            <div className="flex justify-center items-center space-x-12">
            <button type="submit" className="w-60 h-14 bg-indigo-500 text-center text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition hover:bg-indigo-600 hover:border hover:border-white">
              Submit
            </button>

            <button onClick={handleDelete} className="w-60 h-14 bg-red-500 text-center text-white text-lg md:text-xl font-semibold cursor-pointer px-8 py-4 rounded transition hover:bg-red-600 hover:border hover:border-white">
              DELETE
            </button>
            </div>

          </form>
        </div>
    </>
  )
}

export default EditCreator
