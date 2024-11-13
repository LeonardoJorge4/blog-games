'use client';

import { GameNewsCard } from '@/components/pages/games/GameNewsCard';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="space-y-8 py-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold">Favoritos</h1>
          <Heart className="h-8 w-8 text-destructive" />
        </div>
        <p className="text-muted-foreground">
          Suas notícias e artigos favoritos em um só lugar
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border bg-card p-8 text-center">
          <Heart className="h-12 w-12 text-muted-foreground" />
          <div>
            <h2 className="text-lg font-semibold">Nenhum favorito ainda</h2>
            <p className="text-sm text-muted-foreground">
              Adicione artigos aos favoritos clicando no coração em cada postagem
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((post) => (
            <GameNewsCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
    </div>
  );
} 