"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { Provider1, Provider2, Provider3,Provider4,Provider5,Provider6,Provider7,Provider8,Provider9 } from "@/assets";
import Image from "next/image";

export const Providers = () => {

  const providersImg = [Provider1, Provider2, Provider3, Provider4, Provider5, Provider6, Provider7, Provider8, Provider9]

  return (
    <div className="my-5">
    <Swiper
    spaceBetween={40}
    breakpoints={{
      300: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
    }}
    slidesPerView={4}
    modules={[Autoplay]}
    loop={true}
    speed={2000}
    autoplay={{
        delay: 0,
        disableOnInteraction: false,
    }}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper:any) => console.log(swiper)}
    >
      {providersImg.map((img, i) => (
      <div key={i}>

        <SwiperSlide>
          <div className="relative md:w-[150px] md:h-[100px] w-[100px] h-[70px]">
            <Image src={img} alt="provider" fill className="object-contain select-none"/>
          </div>
        </SwiperSlide>
      </div>
      ))}

    </Swiper>
    </div>
  )
}
