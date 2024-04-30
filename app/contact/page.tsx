import Contactoo from '@/components/Contactoo'
import React from 'react'

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-green-600 min-h-screen text-3xl pt-36">
      <div>
        <h1 className="mx-auto p-4 bg-blue-600 max-w-fit rounded-full">
          Contact me!
        </h1>

        <Contactoo />
      </div>
    </div>
  )
}

export default Contact
