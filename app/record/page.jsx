"use client"
import Streak from '@components/streak'
import Card from '@components/quiet-time-card'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const record = () => {
  const {data: session} = useSession();

  return (

    
   
    <div className='flex flex-col items-center gap-x-10'>
      {session ? (
        <>
        
        <h3 className='p-4 mb-4'><span className='text-primary'>{`Hi ${session.user.name}, `}</span>what is Jesus teaching you today?</h3>
     
        <Streak/>
      </>
      ): (
        <Streak/>
      )}
      

      <Card/>

     
      
    </div>

   
  
  )
}

export default record