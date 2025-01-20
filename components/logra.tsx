"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Card, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CarruselProps {
  title: string;
  image: string;
}

interface LogrosComponentProps {
  items: CarruselProps[];
}

const Carrusel: React.FC<CarruselProps> = ({ title, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="relative h-96 w-80 mx-auto rounded-xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            priority={true}
            alt="Card background"
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40 flex flex-col justify-center items-center p-8 text-white rounded-xl">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <h4 className="font-bold text-2xl text-center">{title}</h4>
          </CardHeader>
        </div>
      </Card>
    </motion.div>
  );
};

const LogrosComponent: React.FC<LogrosComponentProps> = ({ items }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Carrusel title={item.title} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogrosComponent;
