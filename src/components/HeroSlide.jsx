import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay} from 'swiper/modules';

const img= [
  "3ca518ac387b3e07aaf503b2c1399707.jpg",
  "686d4a051c21359b7577ee191b02fb70.jpg",
  "791f8cd5afd3d9f571d41532d0165769.jpg",
  "a959c27ca359e1fc2c5453411253d1ad.jpg",
  "ef169eeb1097eaa0cd21f0311524820e.jpg",
]
 


export default function Example() {

  return (
  <div className="relative isolate bg-mist-50 overflow-hidden flex items-center justify-around -mt-3 -sm:mt-3 -md:mt-1 lg:mt-0 lg:p-3">
    <div>
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

    <div className="w-[450px] h-[550px] bg-contain overflow-hidden rounded-lg hidden lg:block ">
        <Swiper
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        modules={[Autoplay]}
        className="mySwiper h-full"
      >
        {img.map((img)=>(
          <SwiperSlide>
            <img
              alt=""
              src={`src/img/${img}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
</div>
  )
}
