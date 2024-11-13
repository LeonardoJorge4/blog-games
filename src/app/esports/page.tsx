'use client';
import { Post } from '@/@types/Post.types';
import AdUnit from '@/components/common/AdUnit';
import { PageFilters } from '@/components/common/PageFilters';
import { GameNewsCard } from '@/components/pages/games/GameNewsCard';
import {
  Trophy,
  Crosshair,
  Swords,
  Target,
  Dices,
} from 'lucide-react';
import { useState } from 'react';

const esportsNews: Post[] = [
  {
    id: 1,
    title: 'LOUD vence Valorant Champions 2024',
    slug: 'loud-vence-valorant-champions-2024',
    excerpt:
      'Equipe brasileira faz história e conquista mais um título internacional...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'FPS',
    date: '2024-03-21',
    views: 1500,
  },
  {
    id: 2,
    title: 'Final do Mundial de LoL bate recorde de audiência',
    slug: 'final-do-mundial-de-lol-bate-recorde-de-audiencia',
    excerpt:
      'Decisão entre T1 e JDG ultrapassa marca histórica de espectadores simultâneos...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'MOBA',
    date: '2024-03-20',
    views: 2000,
  },
  {
    id: 3,
    title: 'FURIA anuncia nova line-up de CS2',
    slug: 'furia-anuncia-nova-line-up-de-cs2',
    excerpt:
      'Organização brasileira reformula equipe visando os principais torneios de 2024...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'FPS',
    date: '2024-03-19',
    views: 1200,
  },
];

const filterOptions = [
  { value: 'all', label: 'Todos os gêneros', icon: Trophy },
  { value: 'fps', label: 'FPS', icon: Crosshair },
  { value: 'moba', label: 'MOBA', icon: Swords },
  { value: 'battle-royale', label: 'Battle Royale', icon: Target },
  { value: 'strategy', label: 'Estratégia', icon: Dices },
];

export default function EsportsPage() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filteredNews =
    selectedGenre === 'all'
      ? esportsNews
      : esportsNews.filter((news) => {
          const genreItem = filterOptions.find((g) => g.value === selectedGenre);
          return news.category === genreItem?.label;
        });

  return (
    <div className="space-y-8 py-8">
      {/* Header da página */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Esports</h1>
        <p className="text-muted-foreground">
          Acompanhe as últimas notícias do cenário competitivo dos jogos
          eletrônicos
        </p>
      </div>

      {/* Filtros e Controles */}
      <PageFilters
        selectedFilter={selectedGenre}
        onFilterChange={setSelectedGenre}
        filterOptions={filterOptions}
        view={view}
        onViewChange={setView}
        filterPlaceholder="Selecione uma modalidade"
      />

      {/* Anúncio */}
      <AdUnit />

      {/* Lista de Notícias */}
      <div
        className={
          view === 'grid'
            ? 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
            : 'space-y-6'
        }
      >
        {filteredNews.map((news) => (
          <GameNewsCard
            key={news.id}
            post={news}
            variant={view === 'list' ? 'featured' : 'default'}
          />
        ))}
      </div>

      {/* Anúncio */}
      <AdUnit />
    </div>
  );
}
