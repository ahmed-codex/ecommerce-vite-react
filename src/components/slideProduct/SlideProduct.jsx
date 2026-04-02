import Product from "./Product";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

const SlideProduct = ({ data, title }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-1 py-5 sm:px-3 sm:py-6 sm:p-10 md:py-8 lg:py-10 lg:max-w-7xl lg:px-8">
        <Link to={`/category/${title.replace(" ", "-")}`}>
          <h2 className="text-2xl font-bold tracking-tight text-mist-500 capitalize border-mist-500">
            {title}
          </h2>
        </Link>
        <p className="flex  mt-3 ">
          <span className="border-2 border-mist-400 w-40"></span>
          <span className="border-2 flex-1  border-mist-200"></span>
        </p>

        <div className="mt-6 p-2 md:p-5  xl:gap-x-8">
          <Swiper
      
            // spaceBetween={30}
            centeredSlides={true}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }
            }
            // slidesPerView={5}

            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 3 }, // من 320px إلى 639px → عنصر واحد
              640: { slidesPerView: 2, spaceBetween: 5 }, // من 640px → عنصرين
              768: { slidesPerView: 3, spaceBetween: 15 }, // من 768px → 3 عناصر
              1024: { slidesPerView: 4, spaceBetween: 20 }, // من 1024px → 4 عناصر
              1280: { slidesPerView: 5, spaceBetween: 30 }, // من 1280px → 5 عناصر
            }}
            loop={true }
            className="mySwiper "
          >
            {data.map((product) => (
              <SwiperSlide key={product.id}>
                <Product item={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default SlideProduct;
