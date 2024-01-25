import NavBar from '../components/NavBar'
import MainContent from '../components/MainContent'
import SubHeader from '../components/SubHeader'

export default function Home() {
  return (
    <div>
      <NavBar />
      <SubHeader />
      <div className='w-full px-3 md:px-0 border-2 border-blue-600 border-solid'>
        <div id='about' className='w-full text-white h-auto'>
          <div>
            <div className='mt-[100px] md:mt-[150px] mx-auto max-w-6xl flex justify-between items-center border-2 border-red-600 border-solid'>
              <h1 className='font-inter text-xl text-purple-600 font-bold'>
                The Afrotopia Edit
              </h1>
              <h1 className='font-inter text-xl text-purple-600 font-bold  '>
                See More
              </h1>
            </div>
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  )
}
