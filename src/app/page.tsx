'use client';
import { FeaturedSection } from '@/components/pages/home/FeaturedSection';
import { HeroCarousel } from '@/components/pages/home/HeroCarousel';
import { LatestPosts } from '@/components/pages/home/LatestPosts';
import { MostVisitedSection } from '@/components/pages/home/MostVisitedSection';
import AdUnit from '@/components/common/AdUnit';
import { Post } from '@/@types/Post.types';

const featuredPosts: Post[] = [
  {
    id: 1,
    title: 'Novo God of War anunciado para 2025',
    excerpt: 'Santa Monica Studio revela próximo capítulo da saga nórdica...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'Games',
    date: '2024-03-20',
    views: 1500,
  },
  {
    id: 2,
    title: 'Novo God of War anunciado para 2026',
    excerpt: 'Santa Monica Studio revela próximo capítulo da saga nórdica...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'Games',
    date: '2024-03-20',
    views: 1500,
  },
  {
    id: 3,
    title: 'Novo God of War anunciado para 2026',
    excerpt: 'Santa Monica Studio revela próximo capítulo da saga nórdica...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'Games',
    date: '2024-03-20',
    views: 1500,
  },
  {
    id: 4,
    title: 'Novo God of War anunciado para 2026',
    excerpt: 'Santa Monica Studio revela próximo capítulo da saga nórdica...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'Games',
    date: '2024-03-20',
    views: 1500,
  },
  {
    id: 5,
    title: 'Novo God of War anunciado para 2026',
    excerpt: 'Santa Monica Studio revela próximo capítulo da saga nórdica...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'Games',
    date: '2024-03-20',
    views: 1500,
  },
  // ... adicione mais posts
];

export default function Home() {
  return (
    <div className="space-y-8">
      <AdUnit className="mt-4" />

      <HeroCarousel posts={featuredPosts} />

      <AdUnit />

      <div>
        <div className="space-y-8">
          <FeaturedSection posts={featuredPosts} />
          {/* Anúncio entre seções */}
          <AdUnit />

          <MostVisitedSection posts={featuredPosts} />
          {/* Anúncio entre seções */}
          <AdUnit />

          <LatestPosts posts={featuredPosts} />
        </div>

        {/* Sidebar com anúncios */}
        {/* <aside className="space-y-8">
          <AdUnit variant="square" />
          <AdUnit
            variant="vertical"
            className="sticky top-4"
          />
        </aside> */}
      </div>

      <AdUnit className="mb-8" />
    </div>
  );
}
