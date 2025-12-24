import React from 'react'
import Faq from '../components/Faq.jsx'

const Eight = () => {
  return (
    <div className='bg-black px-8 py-14'>
      <div className="mx-28 mb-8 max-w-4xl ">
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          FAQ
        </h1>

        <p className=" max-w-2xl text-sm text-gray-400 sm:text-base">
          Frequently Asked Questions and Answers
        </p>
      </div>
      <Faq />
    </div>
  )
}

export default Eight