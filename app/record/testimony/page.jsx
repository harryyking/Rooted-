import TestimonyCard from "@components/testimony-card"

const Testify = () => {
  return (
    <section className="flex flex-col items-center">
      <div className='text-center p-2 my-4 '>
        <h3 className='text-2xl text-secondary'>Share Your Testimony</h3>
        <p className='text-sm'>Let all men see what the Lord has done for you 🤗</p>
      </div>
       <TestimonyCard/>
    </section>
   
  )
}

export default Testify