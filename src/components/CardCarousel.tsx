import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface CardCarouselProps {
  cardKeys: string[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cardKeys }) => {
  const { t } = useTranslation();
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heights = cardRefs.current.map((c) => c?.offsetHeight || 0);
    setCardHeight(Math.max(...heights));
  }, [cardKeys]);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        className="p-6"
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cardKeys.map((key, i) => (
          <SwiperSlide key={key} className="flex justify-center items-center">
            <div
              ref={(el) => (cardRefs.current[i] = el)}
              className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
              style={{ minHeight: cardHeight ?? "auto" }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {t(`cards.${key}.title`)}
              </h3>
              <p className="text-gray-700 mb-4">
                {t(`cards.${key}.description`)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
