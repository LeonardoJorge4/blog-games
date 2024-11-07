'use client';
import { Header } from '@/components/common/Header';
import { FeaturedSection } from '@/components/pages/home/FeaturedSection';
import { HeroCarousel } from '@/components/pages/home/HeroCarousel';
import { LatestPosts } from '@/components/pages/home/LatestPosts';
import { MostVisitedSection } from '@/components/pages/home/MostVisitedSection';

type Post = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  views: number;
};

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

const Sidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-muted p-4 rounded-lg text-center">
        <p className="text-sm text-muted-foreground">Publicidade</p>
        <div className="h-[600px] bg-accent/20 mt-2 rounded flex items-center justify-center">
          Espaço para Anúncio
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container py-8 space-y-12">
        {/* Hero Section */}
        <HeroCarousel posts={featuredPosts} />

        {/* Layout Principal */}
        <div>
          <div className="space-y-12">
            <FeaturedSection posts={featuredPosts} />

            <MostVisitedSection posts={featuredPosts} />

            <LatestPosts posts={featuredPosts} />
          </div>

          {/* Sidebar */}
          {/* <Sidebar /> */}
        </div>
      </main>
    </div>
  );
}
