import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Newspaper,
  Star,
  BookOpen,
  Trophy,
  Monitor,
  Gamepad2,
  PlayCircle,
  ShieldCheck,
  Mail,
  Info
} from 'lucide-react';
import Link from 'next/link';
import Container from '../../ui/container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t bg-card">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          {/* Sobre */}
          <div>
            <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
              <Info className="h-5 w-5" />
              Sobre o Blog
            </h3>
            <p className="text-sm text-muted-foreground">
              Seu destino definitivo para as últimas notícias, análises e reviews do mundo dos games.
              Mantendo você atualizado sobre tudo que acontece no universo dos jogos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
              <Newspaper className="h-5 w-5" />
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/noticias" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Newspaper className="h-4 w-4" />
                  Últimas Notícias
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/guias" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Guias & Dicas
                </Link>
              </li>
              <li>
                <Link href="/esports" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Esports
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="mb-4 text-lg font-semibold flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Categorias
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pc" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  PC Gaming
                </Link>
              </li>
              <li>
                <Link href="/playstation" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Gamepad2 className="h-4 w-4" />
                  PlayStation
                </Link>
              </li>
              <li>
                <Link href="/xbox" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <Gamepad2 className="h-4 w-4" />
                  Xbox
                </Link>
              </li>
              <li>
                <Link href="/nintendo" className="text-muted-foreground hover:text-primary flex items-center gap-2">
                  <PlayCircle className="h-4 w-4" />
                  Nintendo
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Siga-nos</h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Siga-nos no Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
                aria-label="Siga-nos no YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Blog de Games. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link href="/privacidade" className="hover:text-primary flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Política de Privacidade
              </Link>
              <Link href="/termos" className="hover:text-primary flex items-center gap-2">
                <Info className="h-4 w-4" />
                Termos de Uso
              </Link>
              <Link href="/contato" className="hover:text-primary flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contato
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 