import React from 'react';
import { Link } from "react-router-dom"
import { MdEdit } from "react-icons/md";
import { FaYoutube, FaTwitter, FaInstagram, FaInfoCircle } from "react-icons/fa";


function Creator({ id, image, name, description, yt_url, insta_url, twitter_url }) {
  return (
    <>
      <div className="relative max-w-xl max-h-80 overflow-hidden rounded shadow-lg border-2 border-white">
        { image ? (
          <img className="w-full h-auto object-cover" src={image} />
        ): (
          <div className="w-full h-80"></div>
        )}

        <div className={"absolute inset-0 flex flex-col items-start justify-end text-white p-6 bg-black bg-opacity-50"}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="text-3xl font-bold">{name}</h1>

            <div className="flex space-x-4">
              <Link to={`/creator/${id}`}>
                <FaInfoCircle size={24} />
              </Link>

              <Link to={`/edit/${id}`}>
                <MdEdit size={24} />
              </Link>
            </div>
          </div>

          <div className="flex space-x-6 py-2 mt-2">
            { yt_url && (
              <a href={yt_url} target="blank">
                <FaYoutube size={30} />
              </a>
            )}

            { insta_url && (
              <a href={insta_url} target="blank">
                <FaInstagram size={30} />
              </a>
            )}
            
            { twitter_url && (
              <a href={twitter_url} target="blank">
              <FaTwitter size={30} />
              </a>
            )}
          </div>

          <p className="mt-2 overflow-hidden">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Creator
