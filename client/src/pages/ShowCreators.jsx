import React from 'react';
import Creator from '../components/Creator';

const name="Mr Beast"
const description = "MrBeast, whose real name is James Stephen Donaldson, is an American YouTuber, online personality, entrepreneur, and philanthropist. He is known for his fast-paced and high-production videos, which feature elaborate challenges and large giveaways";
const yt_url = "https://www.youtube.com/@MrBeast";
const image_url = "https://eltiempomx.com/i/2022/11/6376a1b3c92d5.jpg";

function ShowCreators() {
  return (
    <>
      <div className="bg-black h-screen">
        <Creator name={name} yt_url={yt_url} description={description} image={image_url} />
      </div>
    </>
  );
}

export default ShowCreators;

