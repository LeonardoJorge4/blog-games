'use client';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Menu, 
  Moon, 
  Search, 
  Sun, 
  Home,
  Gamepad2,
  Trophy,
  Tv,
  Film,
  Star
} from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

export function Header() {
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

  const mainNavItems = [
    { label: 'Início', href: '/', icon: Home },
    { label: 'Games', href: '/games', icon: Gamepad2 },
    { label: 'Esports', href: '/esports', icon: Trophy },
    { label: 'Animes', href: '/animes', icon: Tv },
    { label: 'Séries', href: '/series', icon: Film },
    { label: 'Reviews', href: '/reviews', icon: Star },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="mr-4 flex">
            <a
              href="/"
              className="flex items-center space-x-2"
            >
              <Gamepad2 className="h-6 w-6" />
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
                    className="w-full flex items-center gap-2"
                  >
                    <item.icon className="h-4 w-4" />
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
                    className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-2"
                  >
                    <item.icon className="h-4 w-4" />
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
      </Container>
    </header>
  );
}
