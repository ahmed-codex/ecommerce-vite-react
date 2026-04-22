import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React, { useRef } from 'react';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_ja3tovn', 'template_txcdb57', form.current,'zL7dr49oTroow9ZtQ')
        .then(
            () => {
             toast.success('Successfully Send!')
             form.current.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
  return (
    <div className="isolate bg-mist-700 px-6 py-10 -mt-3 md:mt-0 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contact Us</h2>
        <p className="mt-2 text-lg/8 text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form onSubmit={sendEmail} ref={form} className="mx-auto mt-8 max-w-xl sm:mt-7">
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">

          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                name="name"
                placeholder='Enter Your FirstName'
                type="text"
                required
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-sm md:text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-mist-500"
              />
            </div>
          </div>  
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder='Enter Your Email'
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-sm md:text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-mist-500"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder='Enter Your Message'
                required
                rows={4}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-sm md:text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-mist-500"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-mist-500 px-3.5 py-2 text-center text-base font-semibold text-white shadow-xs cursor-pointer transition-all duration-300 hover:bg-mist-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sent message
          </button>
        </div>
      </form>
    </div>
  )
}
