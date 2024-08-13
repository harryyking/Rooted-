import Shally from '@public/shally.jpg'
import Image from 'next/image'

const Donate = () => {
  return (
    <section className='p-4 md:w-[800px] flex flex-col justify-center mx-auto space-y-4' >
         <Image 
    src={Shally}
    alt=""
    width={600}
    height={500}
    
    />
    <div>
        <h2 className='text-5xl font-bold mb-4'>Support A Greater Purpose </h2>
        <p>As you cultivate a deeper connection with God through Quiet Time, 
            consider extending your spiritual practice to make a tangible impact
            on the world. Your donation to reputable charities, NGOs, and Christian 
        foundations can bring hope, relief, and transformation to 
        those in need. Every contribution, big or small, counts!
        </p>
    </div>
    <div>
    <h3 className='text-lg font-semibold mb-2'>Make a Difference with Your Streak</h3>
    <ol>
        <li>Help feed the hungry</li>
        <li>Support education and empowerment</li>
        <li>Bring medical care to remote communitities</li>
        <li>Spread the Gospel and disciple others</li>
    </ol>
    </div>
    <div>
        <h3 className="text-lg font-semibold mb-2">Donate with Confidence</h3>
        <p>
            We've partnered with trusted organizations to ensure
            your donation is used effectively and efficiently.
        </p>
    </div>
    <div>
        <h3 className="text-lg font-semibold mb-2">Give Generously, Grow Spiritually</h3>
        <p>
            As you give, remember that your generosity is 
            a reflection of God's love and grace in your life. 
            May your Quiet Time streak inspire a spirit of generosity and compassion!
        </p>
    </div>
   <div role='alert' className='alert alert-info mt-5'>
    <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    className='h-6 w-6 shrink-0 stroke-current'
    >
    <path
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth="2"
    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    >
    </path>

    </svg>
    <span>A payment option will be provided soon. Thank you!</span>
   </div>
    </section>
  )
}

export default Donate