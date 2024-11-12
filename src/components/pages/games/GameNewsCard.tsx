import { Post } from '@/@types/Post.types';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface GameNewsCardProps {
  post: Post;
  variant?: 'default' | 'featured';
}

export function GameNewsCard({ post, variant = 'default' }: GameNewsCardProps) {
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
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {post.category}
          </span>
          {variant === 'featured' && (
            <h3 className="mt-2 text-xl font-bold text-card-foreground">
              {post.title}
            </h3>
          )}
        </div>
      </div>
      {variant === 'default' && (
        <div className="p-4">
          <h3 className="font-semibold group-hover:text-primary">
            {post.title}
          </h3>
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
