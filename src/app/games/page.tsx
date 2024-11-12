'use client';
import { Post } from '@/@types/Post.types';
import AdUnit from '@/components/common/AdUnit';
import { GameNewsCard } from '@/components/pages/games/GameNewsCard';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Gamepad2,
  Sword,
  Car,
  Ghost,
  Brain,
  Crosshair,
  Volleyball,
} from 'lucide-react';
import { useState } from 'react';

const gameNews: Post[] = [
  {
    id: 1,
    title: 'God of War Ragnarök recebe nova atualização',
    slug: 'god-of-war-ragnarok-recebe-nova-atualizacao',
    excerpt:
      'Novo patch traz melhorias de performance e correções de bugs que os jogadores relataram desde o lançamento...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'Ação/Aventura',
    date: '2024-03-21',
    views: 1200,
  },
  {
    id: 2,
    title: 'Final Fantasy VII Rebirth ultrapassa 5 milhões de vendas',
    slug: 'final-fantasy-vii-rebirth-ultrapassa-5-milhoes-de-vendas',
    excerpt:
      'Novo título da Square Enix bate recordes de vendas e se torna um dos jogos mais vendidos da franquia...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'RPG',
    date: '2024-03-20',
    views: 1500,
  },
  {
    id: 3,
    title: 'Novo Forza Motorsport impressiona com gráficos realistas',
    slug: 'novo-forza-motorsport-impressiona-com-graficos-realistas',
    excerpt:
      'O mais recente título da série Forza estabelece novo padrão para jogos de corrida com visuais impressionantes...',
    image:
      'https://cdn.awsli.com.br/600x700/1610/1610163/produto/177700788/poster-god-of-war-4-b-d3e21ed2.jpg',
    category: 'Corrida',
    date: '2024-03-19',
    views: 800,
  },
];

const genres = [
  { value: 'all', label: 'Todos os Gêneros', icon: Gamepad2 },
  { value: 'action', label: 'Ação/Aventura', icon: Sword },
  { value: 'racing', label: 'Corrida', icon: Car },
  { value: 'sports', label: 'Esportes', icon: Volleyball },
  { value: 'horror', label: 'Terror', icon: Ghost },
  { value: 'puzzle', label: 'Puzzle', icon: Brain },
  { value: 'fps', label: 'FPS', icon: Crosshair },
];

export default function GamesPage() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filteredNews =
    selectedGenre === 'all'
      ? gameNews
      : gameNews.filter((news) => {
          const genreItem = genres.find((g) => g.value === selectedGenre);
          return news.category === genreItem?.label;
        });

  return (
    <div className="space-y-8 py-8">
      {/* Header da página */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Games</h1>
        <p className="text-muted-foreground">
          Fique por dentro das últimas notícias do mundo dos games
        </p>
      </div>

      {/* Filtros e Controles */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Select
            value={selectedGenre}
            onValueChange={setSelectedGenre}
          >
            <SelectTrigger className="w-[220px]">
              <SelectValue placeholder="Selecione um gênero" />
            </SelectTrigger>
            <SelectContent>
              {genres.map((genre) => (
                <SelectItem
                  key={genre.value}
                  value={genre.value}
                >
                  <div className="flex items-center gap-2">
                    <genre.icon className="h-4 w-4" />
                    {genre.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button
              variant={view === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setView('grid')}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </Button>
            <Button
              variant={view === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setView('list')}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>

        <Select defaultValue="recent">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Mais recentes</SelectItem>
            <SelectItem value="popular">Mais populares</SelectItem>
            <SelectItem value="views">Mais vistos</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
