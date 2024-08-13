import React from 'react'

const collection = ({stamp}) => {
  return (
    <section className='w-1/3 flex flex-col justify-center p-4'>
        <div className="card bg-primary text-primary-content w-80 h-60 ">
        <div className="card-body space-y-3">
          <h2 className="card-title">{stamp.verse}</h2> 
          <div>
            <h5 className='text-lg font-medium'>Lessons</h5>
            <p className='text-sm'>{stamp.lesson}</p> 
          </div>
          <div>
          <h5 className='text-lg'>Prayer</h5>
          <p className='text-sm'>{stamp.prayer}</p>
          </div>
          
        </div>
      </div>
  </section>
  )
}

export default collection