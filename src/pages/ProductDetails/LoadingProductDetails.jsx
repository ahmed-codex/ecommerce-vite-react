import React from 'react'

const LoadingProductDetails = () => {
  return (
  <div className="animate-pulse bg-white flex flex-col md:flex-row items-center gap-4 md:gap-8 lg:gap-13 px-4 md:p-6 lg:px-33 rounded-lg ">

  {/* الصورة */}
  <div className="w-full md:w-48 lg:w-75 xl:w-100 h-48 md:h-60 lg:h-70 xl:h-80 bg-gray-300 rounded"></div>

  {/* النص */}
  <div className="flex-1 space-y-4 md:space-y-6 w-full">
    <div className="h-4 md:h-6 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 md:h-6 bg-gray-300 rounded w-2/3"></div>
    <div className="h-4 md:h-6 bg-gray-300 rounded w-1/2"></div>
    <div className="h-4 md:h-6 bg-gray-300 rounded w-2/3"></div>
    <div className="h-3 md:h-4 bg-gray-300 rounded w-1/3"></div>
  </div>

</div>
  )
}

export default LoadingProductDetails
