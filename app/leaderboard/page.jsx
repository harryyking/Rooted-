"use client"
import React from 'react'
import Board from '@components/board'


const LeaderBoard = () => {



  return (
    <section>
      <div className='text-center p-2 my-4 '>
        <h3 className='text-2xl text-primary'>Leaderboard</h3>
        <p className='text-sm'>Highest Streaking Participants</p>
      </div>
      <Board/>
    </section>
    
  )
}

export default LeaderBoard