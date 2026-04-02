'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'



export default function Example() {

  return (
    <div className="relative isolate bg-mist-50 overflow-hidden -mt-3 -sm:mt-3 -md:mt-1 lg:mt-0">
  {/* Top blur background */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
  >
    <div
      style={{ clipPath: 'polygon(74.1% 44.1%, ...)' }}
      className="relative left-1/2 w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30"
    />
  </div>

  <div className="mx-auto max-w-2xl -mt-10 sm:mt-0 py-20 sm:py-44 md:py-44  xl:py-45 text-center lg:text-left">
    

    <h1 className="text-5xl sm:text-6xl font-semibold text-mist-600">
     Discover Our Summer Collection
    </h1>
    <p className="mt-6 text-lg leading-8 text-gray-500">
        Fresh styles, unbeatable prices. Find the perfect outfit for every occasion.
    </p>

    <div className="mt-10 flex justify-center items-center lg:justify-start gap-x-6">
      <Link
        to="/"
        className="rounded-md bg-mist-600 px-4 py-2 text-white font-semibold hover:bg-mist-500 transition"
      >
        Shop Now
      </Link>
      <Link to="about" className="text-mist-600 hover:text-mist-700 font-semibold">
        Learn more →
      </Link>
    </div>
  </div>

  {/* Bottom blur background */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
  >
    <div
      style={{ clipPath: 'polygon(74.1% 44.1%, ...)' }}
      className="relative left-1/2 w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-500 opacity-30"
    />
  </div>
</div>
  )
}
