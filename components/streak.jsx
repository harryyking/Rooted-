import Link from 'next/link'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import { Layers3 } from 'lucide-react'
import { NotebookPen } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

const streak = () => {
  const {data: session} = useSession();
  const [streak, setStreak] = useState();
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      const fetchStreak = async () => {
        try {
          const response = await fetch(`/api/streak/getStreak?email=${session.user.email}`);
          const data = await response.json();
          setStreak(data);
        } catch (error) {
          console.error("Failed to fetch streak:", error)
        } finally{
          setLoading(false);
        }
      }
      fetchStreak();
    }
    
  }, [session])

  if (loading) return <span className='skeleton h-14 w-full md:w-[500px] rounded-md'></span>
  
  return (
  <div className='shadow-xl flex flex-row justify-between items-center w-full md:w-[500px] rounded-md p-2 space-x-2 mx-auto mb-8'>
    <div className='btn btn-ghost flex flex-row'>
    <NotebookPen width={20} height={20}/>
      <p className='text-primary text-lg'>{streak.streak}</p>
    </div>
    <div className='flex flex-col'>

      <h3 className='text-lg text-center '>Bible Streak</h3>
    </div>
    
      <ul className='flex flex-row space-x-4'>
        <li><Link href="/leaderboard" className='btn btn-ghost'><ChartNoAxesColumnIncreasing/></Link></li>
        <li><Link href="/lists" className='btn btn-ghost'><Layers3/></Link></li>
      </ul>
  </div>

  )
}

export default streak