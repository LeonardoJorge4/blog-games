import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Newspaper,
  BookOpen,
  Trophy,
  Monitor,
  ShieldCheck,
  Mail,
  Info,
  Gamepad2,
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
              Seu destino definitivo para as últimas notícias, análises e
              reviews do mundo dos games. Mantendo você atualizado sobre tudo
              que acontece no universo dos jogos.
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
                <Link
                  href="/noticias"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <Newspaper className="h-4 w-4" />
                  Últimas Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/guias"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Mais lidas da semana
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <Gamepad2 className="h-4 w-4" />
                  Games
                </Link>
              </li>
              <li>
                <Link
                  href="/esports"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
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
                <Link
                  href="/pc"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <Monitor className="h-4 w-4" />
                  PC Gaming
                </Link>
              </li>
              <li>
                <Link
                  href="/playstation"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <svg
                    stroke="currentColor"
                    className="h-4 w-4"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"></path>
                  </svg>
                  PlayStation
                </Link>
              </li>
              <li>
                <Link
                  href="/xbox"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <svg
                    stroke="currentColor"
                    className="h-4 w-4"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"></path>
                  </svg>
                  Xbox
                </Link>
              </li>
              <li>
                <Link
                  href="/nintendo"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <svg
                    stroke="currentColor"
                    className="w-4 h-4"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.34 8.005c0-4.38.01-7.972.023-7.982C9.373.01 10.036 0 10.831 0c1.153 0 1.51.01 1.743.05 1.73.298 3.045 1.6 3.373 3.326.046.242.053.809.053 4.61 0 4.06.005 4.537-.123 4.976-.022.076-.048.15-.08.242a4.14 4.14 0 0 1-3.426 2.767c-.317.033-2.889.046-2.978.013-.05-.02-.053-.752-.053-7.979m4.675.269a1.62 1.62 0 0 0-1.113-1.034 1.61 1.61 0 0 0-1.938 1.073 1.9 1.9 0 0 0-.014.935 1.63 1.63 0 0 0 1.952 1.107c.51-.136.908-.504 1.11-1.028.11-.285.113-.742.003-1.053M3.71 3.317c-.208.04-.526.199-.695.348-.348.301-.52.729-.494 1.232.013.262.03.332.136.544.155.321.39.556.712.715.222.11.278.123.567.133.261.01.354 0 .53-.06.719-.242 1.153-.94 1.03-1.656-.142-.852-.95-1.422-1.786-1.256"></path>
                    <path d="M3.425.053a4.14 4.14 0 0 0-3.28 3.015C0 3.628-.01 3.956.005 8.3c.01 3.99.014 4.082.08 4.39.368 1.66 1.548 2.844 3.224 3.235.22.05.497.06 2.29.07 1.856.012 2.048.009 2.097-.04.05-.05.053-.69.053-7.94 0-5.374-.01-7.906-.033-7.952-.033-.06-.09-.063-2.03-.06-1.578.004-2.052.014-2.26.05Zm3 14.665-1.35-.016c-1.242-.013-1.375-.02-1.623-.083a2.81 2.81 0 0 1-2.08-2.167c-.074-.335-.074-8.579-.004-8.907a2.85 2.85 0 0 1 1.716-2.05c.438-.176.64-.196 2.058-.2l1.282-.003v13.426Z"></path>
                  </svg>
                  Switch
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
              © {currentYear} GameTrack. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link
                href="/privacidade"
                className="hover:text-primary flex items-center gap-2"
              >
                <ShieldCheck className="h-4 w-4" />
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="hover:text-primary flex items-center gap-2"
              >
                <Info className="h-4 w-4" />
                Termos de Uso
              </Link>
              <Link
                href="/contato"
                className="hover:text-primary flex items-center gap-2"
              >
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
