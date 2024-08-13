"use client";
import { useState, useEffect } from 'react'
import Collection from "@components/collection"
import { fetchStamp } from "@utils/fetchStamp";
import { useQuery } from '@tanstack/react-query';

const Lists = () => {
  // const {data: stamps, isLoading, error} = useQuery(['stamps'], fetchStamp)

  // if(isLoading)  <div className="skeleton h-32 w-52"></div>

  // if(error) <div>No Quiet Time Posted</div>

    const [stamps, setStamp] =  useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch quiet time posts and map it to the Card 
  useEffect(() => {
    const getStamps = async () => {
      try {
        const data = await fetchStamp();
        setStamp(data);
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }
   
    }
    getStamps();

  }, []);

  if(loading) <div className="skeleton h-32 w-52"></div>
  return (
    
    <section className='flex justify-center mx-auto'>
   
    <div className='flex flex-col md:flex-row  md:justify-normal w-[1000px] md:flex-wrap '>
          {stamps.map((stamp) =>(
        <Collection
        key={stamp._id}
        stamp ={stamp}
        />
      ))}
    </div>
    </section>
 
  )
}

export default Lists