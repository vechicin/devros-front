import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import React, { useEffect, useRef, useState } from "react";

interface Card {
  title: string;
  description: string;
}

interface CardCarouselProps {
  cardArray: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cardArray }) => {
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cardHeights = cardRefs.current.map((card) => card?.offsetHeight || 0);
    const maxHeight = Math.max(...cardHeights);
    setCardHeight(maxHeight);
  }, [cardArray]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        className="p-6"
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cardArray.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              style={{ minHeight: cardHeight ?? "auto" }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
