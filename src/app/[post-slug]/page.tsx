'use client';

import { Post } from '@/@types/Post.types';
import AdUnit from '@/components/common/AdUnit';
import { GameNewsCard } from '@/components/pages/games/GameNewsCard';
import { formatDate } from '@/lib/utils';
import { Clock, Eye, Share2 } from 'lucide-react';
import Image from 'next/image';

// Simula dados do post atual
const currentPost: Post = {
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
};

// Simula posts relacionados
const relatedPosts: Post[] = [
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

export default function PostPage({ params }: { params: { 'post-slug': string } }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: currentPost.title,
          text: currentPost.excerpt,
          url: window.location.href,
        })
        .catch((error) => console.log('Error sharing:', error));
    }
  };

  return (
    <article className="py-8">
      {/* Header do Post */}
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {currentPost.category}
          </span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <time dateTime={currentPost.date}>{formatDate(currentPost.date)}</time>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{currentPost.views} visualizações</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold">{currentPost.title}</h1>
        <p className="text-xl text-muted-foreground">{currentPost.excerpt}</p>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <Share2 className="h-4 w-4" />
          Compartilhar
        </button>
      </div>

      {/* Imagem Principal */}
      <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={currentPost.image}
          alt={currentPost.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Anúncio */}
      <AdUnit className="mb-8" />

      {/* Conteúdo do Post */}
      <div className="prose prose-lg dark:prose-invert mx-auto mb-8 max-w-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>

        <h2>Principais Atualizações</h2>
        <ul>
          <li>Melhorias significativas de performance em PS4 e PS5</li>
          <li>Correções de bugs reportados pela comunidade</li>
          <li>Novos recursos de acessibilidade</li>
          <li>Ajustes no balanceamento de combate</li>
        </ul>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <blockquote>
          "Esta atualização representa nosso compromisso contínuo com a comunidade
          de jogadores" - Diretor do Jogo
        </blockquote>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>

      {/* Anúncio */}
      <AdUnit className="mb-8" />

      {/* Posts Relacionados */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Posts Relacionados</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {relatedPosts.map((post) => (
            <GameNewsCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
