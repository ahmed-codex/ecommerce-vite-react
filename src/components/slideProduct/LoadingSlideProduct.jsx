import React from 'react'

const LoadingSlideProduct = () => {
  return (
    <div className=' mt-10 md:mt-15'>
        <div className="h-6 animate-pulse  bg-gray-300 rounded w-40 mb-3 ml-3 md:ml-15 lg:ml-32 "></div>
        <div className="h-0.5 animate-pulse  bg-gray-300  w-auto  mx-3 md:mx-15 lg:mx-32 "></div>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-3 md:px-15 lg:px-30 p-4">
    
            {[1,2,3,4].map((_, i) => (
                <div key={i} className="animate-pulse p-4 rounded-lg bg-white shadow">
                
                {/* الصورة */}
                <div className="w-full h-40 sm:h-44 md:h-48 bg-gray-300 rounded mb-4"></div>

                {/* النص */}
                <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>

                </div>
            ))}

        </div>
    </div>
  
  )
}

export default LoadingSlideProduct
