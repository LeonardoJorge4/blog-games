import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Clock } from 'lucide-react';

export function LatestPosts({ posts }) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Últimas Postagens</h2>
      <Carousel
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {posts.map((post) => (
            <CarouselItem
              key={post.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="flex gap-4 p-4">
                <div className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-sm text-primary">
                      {post.category}
                    </span>
                    <h3 className="font-semibold">{post.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
