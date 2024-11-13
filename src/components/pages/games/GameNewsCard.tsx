'use client';

import { Post } from '@/@types/Post.types';
import { formatDate } from '@/lib/utils';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GameNewsCardProps {
  post: Post;
  variant?: 'default' | 'featured';
}

export function GameNewsCard({ post, variant = 'default' }: GameNewsCardProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const isPostFavorite = isFavorite(post.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPostFavorite) {
      removeFavorite(post.id);
    } else {
      addFavorite(post);
    }
  };

  return (
    <Link
      href={post.slug}
      className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
    >
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 hover:bg-background/20"
          onClick={handleFavoriteClick}
        >
          <Heart
            className={cn(
              'h-5 w-5 transition-all duration-300',
              isPostFavorite
                ? 'fill-red-500 text-red-500 hover:fill-red-600 hover:text-red-600'
                : 'text-white hover:fill-red-500/20 hover:text-red-500'
            )}
          />
        </Button>
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {post.category}
          </span>
          {variant === 'featured' && (
            <h3 className="mt-2 text-xl font-bold text-white">
              {post.title}
            </h3>
          )}
        </div>
      </div>
      {variant === 'default' && (
        <div className="p-4">
          <h3 className="font-semibold group-hover:text-primary">{post.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span>{post.views} visualizações</span>
          </div>
        </div>
      )}
    </Link>
  );
}
