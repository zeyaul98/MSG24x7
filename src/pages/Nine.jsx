import React from 'react'

const Nine = () => {
  return (
    <div className='bg-black py-12 px-7'>
        <div className="bg-black px-6 py-4 text-center text-white">
  <h2 className="mb-2 text-3xl font-bold sm:text-4xl">
    Still got queries? Request Callback!
  </h2>

  <p className="text-sm text-gray-400 sm:text-base">
    Our team will help you understand better about the product and offerings
  </p>
</div>
    <form className="mx-auto max-w-xl space-y-6 text-white mb-6">

    <input
      type="text"
      placeholder="Name *"
      className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-sm placeholder-gray-400 focus:border-green-500 focus:outline-none"
    />

    <input
      type="email"
      placeholder="Email *"
      className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-sm placeholder-gray-400 focus:border-green-500 focus:outline-none"
    />

    <input
      type="tel"
      placeholder="Mobile Number *"
      className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-sm placeholder-gray-400 focus:border-green-500 focus:outline-none"
    />

    <input
      type="url"
      placeholder="Website (Optional)"
      className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-sm placeholder-gray-400 focus:border-green-500 focus:outline-none"
    />

    <select
      className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-sm text-gray-300 focus:border-green-500 focus:outline-none"
    >
      <option>Select number of employees</option>
      <option>1-10 Employees</option>
      <option>11-50 Employees</option>
      <option>51-200 Employees</option>
      <option>200+ Employees</option>
    </select>

    <textarea
      rows="4"
      placeholder="Please specify your requirements"
      className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 text-sm placeholder-gray-400 focus:border-green-500 focus:outline-none"
    ></textarea>

    <button
      type="submit"
      className="w-full rounded-lg bg-green-500 py-4 text-sm font-semibold text-black hover:bg-green-400"
    >
      Submit
    </button>

  </form>
  <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
    
    
    <div className="text-white mb-8">
      <h2 className="text-2xl font-bold sm:text-3xl">
        7-Day Money back Guarantee
      </h2>
      <p className="mt-2 text-sm text-gray-400">
        No Questions Asked | Get the offer today and boost your revenues
      </p>
    </div>

    
    <button className="rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-black hover:bg-green-400">
      Get Offer Now →
    </button>

  </div>

    </div>
  )
}

export default Nine