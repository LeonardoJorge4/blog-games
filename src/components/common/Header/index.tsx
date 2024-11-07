import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Moon, Search, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleTheme}
      aria-label="Alternar tema"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
};

export function Header() {
  const mainNavItems = [
    { label: 'Início', href: '/' },
    { label: 'Games', href: '/games' },
    { label: 'Esports', href: '/esports' },
    { label: 'Animes', href: '/animes' },
    { label: 'Séries', href: '/series' },
    { label: 'Reviews', href: '/reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 flex">
          <a
            href="/"
            className="flex items-center space-x-2"
          >
            <span className="font-bold text-xl">GeekBlog</span>
          </a>
        </div>

        {/* Menu Mobile */}
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="lg:hidden"
          >
            <Button
              variant="ghost"
              size="icon"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu de navegação</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-52"
          >
            {mainNavItems.map((item) => (
              <DropdownMenuItem key={item.href}>
                <a
                  href={item.href}
                  className="w-full"
                >
                  {item.label}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center">
          <ul className="flex space-x-6">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Ações */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
