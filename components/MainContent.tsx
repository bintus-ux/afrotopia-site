import React from 'react'
import Image from 'next/image'

const MainContent = () => {
    interface MainContentItem {
        _id: number;
        img_src: string;
        headerText: string;
        text: string;
        buttonText: string;
      }

      const mainContentItems: MainContentItem[] = [
        {
          _id: 1,
          img_src: '/site-images/idealimg1.PNG',
          headerText: 'Find your style',
          text: 'One of the most prominent names among African fashion designers, the label counts Beyoncé, Naomi Campbell, Iman and Alicia Keys as fans, who no doubt favour it not just for the billowing silhouettes, bold patterns and graphic prints that ripple through the collections (SS22 sees voluminous shapes and black-and-white geometric motifs blazoned across flowing jumpsuits, maxi dresses and playsuits) – but also for the fact that the brand is based around empowering women.',
          buttonText: 'Check slides',
        },
        {
          _id: 2,
          img_src: '/site-images/idealimg4.JPG',
          headerText: 'Sell your way',
          text: 'Returning home for the hols also means that it is time to bring out our A-game in our fashion fam! And what better place to get our designer fix this Christmas and New Year than on the home continent? There is an abundance of talented designers making waves not just all over Africa but also on the international fashion scene',
          buttonText: 'Sell on Afrotopia',
        },
        {
          _id: 3,
          img_src: '/site-images/idealimg5.WEBP',
          headerText: 'Sell your way',
          text: 'Founded in 2016 by Paris-born, Ivory Coast-raised creative director Sarah Diouf, Tongoro is a ready-to-wear label with a strong emphasis on African fashion and craftsmanship. All materials are sustainably sourced on the continent and each and every piece is made in Dakar, Senegal by local tailors (Senegalese tailoring is renowned for its exceptional quality). The long-term goal is to “create a new dynamic for Africa-based manufacturing, and foster the economic and social development of artisanal workers in Western Africa.”',
          buttonText: 'Sell on Afrotopia',
        },
      ];
      
  return (
    <div className='mt-5 mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center border-2 border-red-600 border-solid'>
    <Image
      src='/images/idealimg1.PNG'
      width={400}
      height={400}
      alt='baddie pose'
    />
    <div className='flex flex-col max-w-md mx-auto bg-white overflow-hidden border-2 border-blue-400 border-solid'>
      <div className='py-6'>
        <h2 className='text-xl font-Playfair font-bold mb-2 text-black'>
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
  )
}

export default MainContent
