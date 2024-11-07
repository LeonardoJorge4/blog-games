import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';

export function HeroCarousel({ posts }) {
  return (
    <Carousel
      className="w-full max-w-5xl mx-auto"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {posts.slice(0, 3).map((post) => (
          <CarouselItem key={post.id}>
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="text-sm font-medium text-primary">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold text-white mt-2">
                  {post.title}
                </h2>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
