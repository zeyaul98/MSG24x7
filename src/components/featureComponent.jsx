import React from 'react'

const featureComponent = ({ icon: Icon, title, description }) => {
  return (
    <div className="rounded-xl border border-gray-700 bg-black p-6">
      <Icon size={32} className="mb-4 text-white" />
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

export default featureComponent