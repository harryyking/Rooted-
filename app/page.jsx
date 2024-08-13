"use client"
import Bible from '@public/photo2.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Peep from '@public/photo4.jpg'
import Study from '@public/photo3.jpg'
import { signIn } from 'next-auth/react'

const Home = () => {
  return (
    <>
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse md:gap-x-10">
   
      <Image
        src={Bible}
        alt=''
        width={500}
        height={500}
        className="max-w-sm rounded-lg shadow-2xl" />
         <div>
        <h1 className="text-5xl font-bold">Streak Quiet Time <br />  while having fun</h1>
        <p className="py-6">
          Keep record of all your quiet times while connecting and sharing your streaks
          with friends. <br /> Highest streaks for the month wins amazing prizes
        </p>
      
        <button className="btn btn-primary" onClick={() => signIn()}>
        Get Started</button>
        
      </div>
     
    </div>
  </div>

  <div>
  <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row md:gap-x-10">
    <Image
      alt=""
      width={380}
      height={400}
      src={Peep}
      className="max-w-lg rounded-lg shadow-2xl h-auto w-auto" />
    <div>
      <h1 className="text-5xl font-bold">Everyone has been through this phase</h1>
        <p className='py-4 leading-5 items-center gap-x-4'><span className='rounded-full w-3 h-3 bg-primary'></span>We lack discipline and understanding</p>
        <p className='py-4 leading-5 items-center gap-x-4'><span className='rounded-full w-3 h-3 bg-primary'></span>Distractions & Busyness</p>
        <p className='py-4 leading-5 items-center gap-x-4'><span className='rounded-full w-3 h-3 bg-primary'></span>Lack of accountability and support</p>
        <p className='py-4 leading-5 items-center gap-x-4'><span className='rounded-full w-3 h-3 bg-primary'></span>Struggle with consistency and guilt</p>
      
    </div>
  </div>
</div>

<section className='hero min-h-screen bg-base-200 '>

      <div className='hero-content flex-col lg:flex-row-reverse md:gap-x-10'>
        <Image
        src={Study}
        alt=''
        width={500}
        height={500}
        className="max-w-sm rounded-lg shadow-2xl" />
            
        
        <div>
    
            <h1 className='text-5xl font-bold'>Let Get Consistent, Shall we? </h1>
            <p className='py-6'>Sign up now and start streaking your quiet time </p>
            <button className="btn btn-primary" onClick={()=> signIn()}>Sign Up Now</button>
        </div>
      </div>
    </section>

  </div>
  {/* FAQs */}
  <section className="flex flex-col justify-center items-center min-h-screen md:px-8">
    <div className="text-center space-y-2 p-8">
        <h3 className="text-4xl  font-semibold ">Frequently Asked Questions</h3>
        <p className="text-sm font-light">Some common questions you may ask on the platform
            </p>
    </div>
    <div className='space-y-4'>
          <div className="collapse collapse-arrow bg-base-200 ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">What's the purpose of this platform?</div>
        <div className="collapse-content">
          <p>To keep a quiet time streak and also connect with others while competing for monthly prizes</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">How can I support the platform? </div>
        <div className="collapse-content">
          <p>Tap on the donate button to support the platform.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">What prizes do I get to win?</div>
        <div className="collapse-content">
          <p>Food packages, Cash prizes, stationaries, notebooks, Bibles, chance to meet your favorite Pastor one-on-one</p>
        </div>
      </div>
      </div>
    
  </section>




{/* CTA */}
  <section className='text-center flex flex-col justify-center items-center min-h-screen '>
    <div className="space-y-8 ">
      <div className="space-y-2">
      <h1 className='text-5xl font-semibold  '>Start Your Quiet Time Streak Now </h1>
      
      <p>Win amazing monthly prizes while connecting with others</p>
      </div>
    
      <div className="flex flex-row mx-auto space-x-4 justify-center">
      <button className="btn btn-primary w-96" onClick={()=>signIn()}>Get Started Now</button>
      
      </div>
      

    </div>
      
  </section>

{/* Footer */}
<footer className="footer bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

  </>
  )
}

export default Home