import React from 'react'

const TestCollections = ({test}) => {
  return (
       
    <section className='w-full md:w-1/3 flex flex-col justify-center p-4'>
    <div className="card bg-secondary text-secondary-content w-full min-h-60 ">
    <div className="card-body space-y-3">
      <h2 className="card-title">{test.title}</h2> 
        <p className='text-sm'>{test.body}</p> 
    </div>
  </div>
</section>
  )
}

export default TestCollections




