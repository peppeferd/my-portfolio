import React from 'react'
import Contactoo from '@/components/Contactoo'
import sfondo from '../../../public/assets/sfondo.jpg'

const Contact = () => {
  return (
    <div className="h-full min-h-screen bg-gradient-to-r from-green-500 to-indigo-500">
      <div className="items-center justify-center flex">
        <h1 className="text-center bg-indigo-200 p-6 w-fit text-3xl rounded-lg mt-6">
          Feel free to contact me by e-mail
        </h1>
      </div>
      <Contactoo />
    </div>
  )
}

export default Contact
