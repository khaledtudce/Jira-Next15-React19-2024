"use client";

const Autoplay = require("embla-carousel-autoplay");
const { Carousel, CarouselContent, CarouselItem } = require("./ui/carousel");
import companies from "@/data/companies";
import Image from "next/image";

const CompanyCarousel = () => {
  return (
    <Carousel
      className="w-full py-10"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies.map(({ name, path, id }) => {
          return (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <Image
                src={path}
                alt={name}
                width={200}
                height={56}
                className="h-9 sm:h-14 w-auto object-contain"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyCarousel;
