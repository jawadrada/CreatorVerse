import { useEffect, useState } from 'react';
import { supabase } from "../client"
import Creator from '../components/Creator';

// const creators = [
//   {
//     name: "Lewis Hamilton",
//     description: "Sir Lewis Hamilton is a British Formula One racing driver currently racing for the Mercedes Formula One team. He has won the Formula One World Championship 7 times, equalling the record set by Michael Schumacher.",
//     insta_url: "https://www.instagram.com/lewishamilton/",
//     image: "https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2023/06/05122007/lewis-hamilton-smiling-cap-planetf1.jpg"
//   },

//   {
//     name: "Kid Cudi",
//     description: "Scott Mescudi (born January 30, 1984), also known by his stage name Kid Cudi, is an American rapper, singer, songwriter, record producer, actor, and fashion designer.",
//     insta_url: "https://www.instagram.com/kidcudi/",
//     image: "https://popnable.com/images/singers/temp/kid_cudi_united_states_top_50_233.jpeg"
//   },

//   {
//     name: "Yes Theory",
//     description: "Yes Theory is a Canadian digital media brand built around a YouTube channel founded by Thomas Brag, Ammar Kandil, Matt Dahlia, and Derin Emre.",
//     yt_url: "https://www.youtube.com/channel/UCvK4bOhULCpmLabd2pDMtnA",
//     image: "https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/07/16215221/Best-of-Yes-theory.png"
//   },

//   {
//     name: "David Goggins",
//     description: "David Goggins is an American retired United States Navy SEAL. He is also an ultramarathon runner, ultra-distance cyclist, triathlete, public speaker, author of two memoirs, and was inducted into the International Sports Hall of Fame for his achievements in sport.",
//     insta_url: "https://www.instagram.com/davidgoggins/",
//     image: "https://fitnessvolt.com/wp-content/uploads/2021/08/David-Goggins-1024x683.jpg"
//   },

//   {
//     name: "Bella Hadid",
//     description: "Isabella Hadid  is an American fashion model. Throughout her career, she has made 26 appearances on international Vogue covers. In 2022, she was named Model of the Year by the British Fashion Council.",
//     insta_url: "https://www.instagram.com/bellahadid/",
//     image: "https://jang.com.pk/assets/uploads/updates/2024-06-20/14359_7124712_bella_updates.jpg"
//   },
// ];

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect (() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select()

        if (error) {
          console.log("Error fetching data: ", error)
        }

        else {
          setCreators(data)
        }
    }

    fetchCreators()
  }, [])

  if (creators.length === 0){
    return <p>No creators found.</p>
  }

  return (
    <div className="bg-black p-8 flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {creators.map((creator) => (
          <Creator 
          key={creator.id}
          id={creator.id}
          name={creator.name}
          description={creator.description}
          yt_url={creator.yt_url}
          insta_url={creator.insta_url}
          twitter_url={creator.twitter_url}
          image={creator.imageURL}
        />
        ))}
      </div>
    </div>
    
  );
}

export default ShowCreators


