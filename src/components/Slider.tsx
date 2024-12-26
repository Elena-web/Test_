import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderContainer from './Slider.styles';

interface Slide {
  year: string;
  description: string;
}

interface SlideBlock {
  id: string;
  slides: Slide[];
}

interface SliderProps {
  slidesData: SlideBlock[];
}

const Slider: React.FC<SliderProps> = ({ slidesData }) => {
  const [localActiveIndex, setLocalActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  SwiperCore.use([Navigation]);

  const handleSlideChange = (swiper: any) => {
    setLocalActiveIndex(swiper.activeIndex);
    if (swiper.isEnd) {
      swiper.navigation.disable();
    } else {
      swiper.navigation.enable();
    }
  };

  const handleReachEnd = (swiper: any) => {
	if (swiper.navigation.nextEl) {
	  swiper.navigation.nextEl.style.display = 'none';
	}
  };

  return (
    <SliderContainer className="blocks">
      {slidesData.map((block) => (
        <Swiper
          id={block.id}
          key={block.id}
          className="swiper swiper-slider"
          ref={swiperRef}
          spaceBetween={10}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined,
          }}
          pagination={{ clickable: true }}
          loop={false}
          onReachEnd={handleReachEnd}
          slidesPerView={3}
          initialSlide={localActiveIndex}
          onInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation?.update();
          }}
          onSlideChange={handleSlideChange}
        >
          <>
            {block.slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <h6>{slide.year}</h6>
                <p>{slide.description}</p>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev" ref={prevRef}></div>
			<div className="swiper-button-next" ref={nextRef}></div>
          </>
        </Swiper>
      ))}
    </SliderContainer>
  );
};

export default Slider;