'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import FancyDesignIcon from '../svgs/FancyDesignIcon'

const MainContent = () => {
  interface MainContentItem {
    _id: number
    img_src: string
    headerText: string
    text: string
    buttonText: string
  }

  const mainContentItems: MainContentItem[] = [
    {
      _id: 1,
      img_src: '/images/idealimg1.PNG',
      headerText: 'Find your style',
      text: 'One of the most prominent names among African fashion designers, the label counts Beyoncé, Naomi Campbell, Iman and Alicia Keys as fans, who no doubt favour it not just for the billowing silhouettes, bold patterns and graphic prints that ripple through the collections (SS22 sees voluminous shapes and black-and-white geometric motifs blazoned across flowing jumpsuits, maxi dresses and playsuits) – but also for the fact that the brand is based around empowering women.',
      buttonText: 'Check slides',
    },
    {
      _id: 2,
      img_src: '/images/idealimg2.JPG',
      headerText: 'Find your style!',
      text: 'Returning home for the hols also means that it is time to bring out our A-game in our fashion fam! And what better place to get our designer fix this Christmas and New Year than on the home continent? There is an abundance of talented designers making waves not just all over Africa but also on the international fashion scene',
      buttonText: 'Sell on Afrotopia',
    },
    {
      _id: 3,
      img_src: '/images/idealimg3.JPG',
      headerText: 'Fix Up Your Rizz',
      text: 'Founded in 2016 by Paris-born, Ivory Coast-raised creative director Sarah Diouf, Tongoro is a ready-to-wear label with a strong emphasis on African fashion and craftsmanship. All materials are sustainably sourced on the continent and each and every piece is made in Dakar, Senegal by local tailors (Senegalese tailoring is renowned for its exceptional quality). The long-term goal is to “create a new dynamic for Africa-based manufacturing, and foster the economic and social development of artisanal workers in Western Africa.”',
      buttonText: 'Sell on Afrotopia',
    },
  ]

  function handleScroll() {
    if (typeof document !== 'undefined') {
      const pageLeft = 0
      const pageRight = pageLeft + window.innerWidth
      const fadeLefts = document.querySelectorAll('.fade_left')

      fadeLefts.forEach((fade_left) => {
        const rect = fade_left.getBoundingClientRect()
        const isVisible = rect.left < pageRight && rect.right > pageLeft

        if (isVisible) {
          fade_left.classList.add('visible')
        } else {
          fade_left.classList.remove('visible')
        }
      })
    }
  }

  function handleRightScroll() {
    if (typeof document !== 'undefined') {
      const pageRight = 0 // Corrected the variable name here
      const pageWidth = window.innerWidth
      const faderights = document.querySelectorAll('.fade_right')

      faderights.forEach((fade_right) => {
        const rect = fade_right.getBoundingClientRect()
        const isVisible =
          rect.right > pageRight && rect.left < pageRight + pageWidth

        if (isVisible) {
          fade_right.classList.add('visible')
        } else {
          fade_right.classList.remove('visible')
        }
      })
    }
  }

  useEffect(() => {
    handleScroll()
    handleRightScroll()

    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', handleScroll)

      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }
  }, []) // Empty dependency array ensures the effect runs only on mount and unmount

  // BUTTON FADE UP TRANSITION

  function handleUpButtonScroll() {
    const pageTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const pageBottom = pageTop + window.innerHeight
    const fadeups = document.querySelectorAll('.fade_up')

    fadeups.forEach((fade_up) => {
      if (fade_up.getBoundingClientRect().top < pageBottom) {
        fade_up.classList.add('visible')
      } else {
        fade_up.classList.remove('visible')
      }
    })
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('scroll', handleUpButtonScroll)
  }

  // BUTTON FADE UP TRANSITION 1

  function handleUpButtonScroll1() {
    const pageTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const pageBottom = pageTop + window.innerHeight
    const fadeups = document.querySelectorAll('.fade_up1')

    fadeups.forEach((fade_up1) => {
      if (fade_up1.getBoundingClientRect().top < pageBottom) {
        fade_up1.classList.add('visible')
      } else {
        fade_up1.classList.remove('visible')
      }
    })
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('scroll', handleUpButtonScroll1)
  }
  return (
    <>
      {mainContentItems.map((item) => (
        <>
          <div
            key={item._id}
            className={`mt-5 mx-auto max-w-6xl flex flex-col justify-between items-center  ${
              item._id % 2 === 0 ? 'md:md:flex-row-reverse' : 'md:flex-row'
            }`}>
            <Image
              className={`${item._id % 2 === 0 ? 'fade_right' : 'fade_left'}`}
              src={item.img_src}
              width={400}
              height={400}
              alt={`Image for ${item.headerText}`}
            />
            <div className=' xl:w-[700px] py-6 md:px-3'>
              <h2 className='text-[30px] font-bold mb-2 text-black py-5'>
                {item.headerText}
              </h2>
              <p className='text-gray-700'>{item.text}</p>
              <div className='mt-5 md:mt-[100px]'>
                <button className='px-4 py-2 bg-cyan-600 hover:shadow-2xl transition-all duration-300 relative overflow-hidden transform hover:scale-105 fade_up'>
                  <span className='relative z-10'>Check slides</span>
                  <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-transparent to-transparent mix-blend-multiply'></span>
                </button>

                <button className='ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 fade_up1'>
                  More slides
                </button>
              </div>
            </div>
          </div>
          <div>
            <FancyDesignIcon />
          </div>
        </>
      ))}
    </>
  )
}

export default MainContent
