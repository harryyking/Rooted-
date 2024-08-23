"use client";
import { useState, useEffect } from 'react'
import TestCollections from '@components/testCollections';
import { fetchTest } from '@utils/fetchTest';


const TestLists = () => {

  // const {data: stamps, isLoading, error} = useQuery(['stamps'], fetchStamp)

  // if(isLoading)  <div className="skeleton h-32 w-52"></div>

  // if(error) <div>No Quiet Time Posted</div>

    const [tests, setTest] =  useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch quiet time posts and map it to the Card 
  useEffect(() => {
    const getTests = async () => {
      try {
        const data = await fetchTest();
        setTest(data);
      }catch(error){
        console.log(error);
      }finally{
        setLoading(false);
      }
   
    }
    getTests();

  }, []);

  if(loading) <div className="skeleton h-32 w-52"></div>
  return (
    <section>
      <div className='text-center p-2 my-4 '>
        <h3 className='text-2xl text-secondary'>Wonderful Testimonies</h3>
        <p className='text-sm'> The evidence of God's greatness in our lives. So amazing 🤩🤩
        </p>
      </div>
    <div className='flex justify-center mx-auto'>
      
   
    <div className='flex flex-col md:flex-row  md:justify-normal w-[1000px] md:flex-wrap '>
          {tests.map((test) =>(
        <TestCollections
        key={test._id}
        test ={test}
        
        />
      ))}
    
    </div>
    </div>
    </section>
  )
}

export default TestLists