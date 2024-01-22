import NavBar from '../components/NavBar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <NavBar />
      <section id='about' className='w-full text-white h-screen'>
        <div>
          <div className='mt-[100px] md:mt-[150px] mx-auto max-w-6xl flex justify-between items-center border-2 border-red-600 border-solid'>
            <h1 className='font-inter text-2xl text-purple-600 font-bold  '>
              The Afrotopia Edit
            </h1>
            <h1 className='font-inter text-2xl text-purple-600 font-bold  '>
              See More
            </h1>
          </div>
          <div className='mt-5 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center border-2 border-red-600 border-solid'>
            <Image
              src='/images/idealimg1.PNG'
              width={400}
              height={400}
              alt='baddie pose'
            />
            <div className='flex flex-col max-w-md mx-auto bg-white overflow-hidden border-2 border-blue-400 border-solid'>
              <div className='py-6'>
                <h2 className='text-xl font-bold mb-2 text-black'>
                  Find your style
                </h2>
                <p className='text-gray-700'>
                  One of the most prominent names among African fashion
                  designers, the label counts Beyoncé, Naomi Campbell, Iman and
                  Alicia Keys as fans, who no doubt favour it not just for the
                  billowing silhouettes, bold patterns and graphic prints that
                  ripple through the collections (SS22 sees voluminous shapes
                  and black-and-white geometric motifs blazoned across flowing
                  jumpsuits, maxi dresses and playsuits) – but also for the fact
                  that the brand is based around empowering women.
                </p>
                <div className='mt-4'>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                    Check Slides
                  </button>
                  <button className='ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400'>
                    More slides
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='blog' className=' text-white h-screen bg-purple-900 flex'>
        <h1 className='m-auto font-waterfall text-7xl text-white font-bold'>
          Blog
        </h1>
      </section>
      <section id='contact' className='text-white h-screen  text-center flex'>
        <h1 className='m-auto font-waterfall text-7xl text-purple-600 font-bold'>
          Contact{' '}
        </h1>
      </section>
      <section
        id='projects'
        className=' text-white h-screen bg-purple-900 flex'>
        <h1 className='m-auto font-waterfall text-7xl text-white font-bold'>
          Projects
        </h1>
      </section>
    </div>
  )
}
