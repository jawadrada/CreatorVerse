import { useEffect, useState } from 'react';
import { supabase } from "../client"
import Creator from '../components/Creator';


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


