'use client';

import { Post } from '@/@types/Post.types';
import { createContext, useContext, useEffect, useState } from 'react';

interface FavoritesContextType {
  favorites: Post[];
  addFavorite: (post: Post) => void;
  removeFavorite: (postId: number) => void;
  isFavorite: (postId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Post[]>([]);

  // Carrega favoritos do localStorage ao iniciar
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Salva favoritos no localStorage quando mudam
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (post: Post) => {
    setFavorites((prev) => [...prev, post]);
  };

  const removeFavorite = (postId: number) => {
    setFavorites((prev) => prev.filter((post) => post.id !== postId));
  };

  const isFavorite = (postId: number) => {
    return favorites.some((post) => post.id === postId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}; 