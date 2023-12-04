"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../helpers/sendEmail";
import { message } from "antd";
export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contactoo: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
    message.success("Email sent!");
  }

  return (
    <div className="h-screen bg-cover bg-center bg-tech2">
      <div className="bg-indigo-500 text-center p-16 text-3xl">
        <h1 className="mb-6">Contact me</h1>
        <p>
          Compile the form and send me an email, then i will get to you soon.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 pb-4 pl-3">
        <div className="py-7">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Insert your name"
            className="w-[300px] rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Insert your email"
            className="w-[300px] rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black"
          >
            Messagge
          </label>
          <textarea
            rows={4}
            placeholder="Write your messagge"
            className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactoo;
