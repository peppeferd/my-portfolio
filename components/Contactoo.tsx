'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { sendEmail } from '../helpers/sendEmail'
import { message } from 'antd'

export type FormData = {
  name: string
  email: string
  message: string
}

const Contactoo: FC = () => {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit(data: FormData) {
    sendEmail(data)
    message.success('Email sent!')
  }

  return (
    <div className="text-center justify-center items-center mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 text-center justify-center items-center flex flex-col">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black bg-gray-400 w-fit p-3 rounded-md"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Please enter your name"
            className="p-2 lg:w-[20%] h-[35%] rounded-md"
            {...register('name', { required: true })}
          />
        </div>
        <div className="mb-5 text-center justify-center items-center flex flex-col">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black bg-gray-400 w-fit p-3 rounded-md"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Please enter your email"
            className="p-2 lg:w-[20%] h-[35%] rounded-md"
            {...register('email', { required: true })}
          />
        </div>
        <div className="mb-5 text-center justify-center items-center flex flex-col">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black bg-gray-400 w-fit p-3 rounded-md"
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Please enter your message"
            className="p-2 lg:w-[50%] h-[35%] rounded-md"
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
            Invia
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contactoo
