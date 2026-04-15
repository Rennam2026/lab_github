'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Settings, BookOpen, ChevronDown, ExternalLink } from 'lucide-react';

interface MenuItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

const menuItems: MenuItem[] = [
  {
    href: '/',
    label: 'Início',
    icon: Home,
    description: 'Página principal'
  },
  {
    href: '/paginas/configuracao',
    label: 'Configuração',
    icon: Settings,
    description: 'Configurar GitHub no VS Code'
  },
  {
    href: '/paginas/repositorios',
    label: 'Repositórios',
    icon: BookOpen,
    description: 'Gerenciar repositórios'
  }
];

export default function MenuNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('/');
  const menuRef = useRef<HTMLDivElement>(null);

  // Detect current page - only on client side
  useEffect(() => {
    // Use setTimeout to ensure DOM is ready
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        setActiveItem(window.location.pathname);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (href: string) => {
    setActiveItem(href);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all duration-200 shadow-sm hover:shadow-md"
        aria-label="Menu de navegação"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Menu className="h-5 w-5" />
        <span className="text-sm font-medium">Menu</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <div className="absolute top-full mt-2 right-0 z-50 w-80 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Navegação
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <nav className="p-2">
              {/* Main Navigation */}
              <div className="mb-4">
                <h4 className="px-3 py-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  Páginas
                </h4>
                <ul className="space-y-1">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.href;

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => handleItemClick(item.href)}
                          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800'
                              : 'hover:bg-zinc-50 dark:hover:bg-zinc-800'
                          }`}
                        >
                          <div className={`p-2 rounded-lg transition-colors ${
                            isActive
                              ? 'bg-gradient-to-br from-blue-500 to-purple-600'
                              : 'bg-zinc-100 dark:bg-zinc-800 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700'
                          }`}>
                            <Icon className={`h-4 w-4 ${
                              isActive
                                ? 'text-white'
                                : 'text-zinc-600 dark:text-zinc-400'
                            }`} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className={`font-medium transition-colors ${
                              isActive
                                ? 'text-blue-700 dark:text-blue-300'
                                : 'text-zinc-900 dark:text-zinc-100'
                            }`}>
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                                {item.description}
                              </div>
                            )}
                          </div>

                          {isActive && (
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* External Links */}
              <div>
                <h4 className="px-3 py-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                  Links Externos
                </h4>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 group"
                    >
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                        <ExternalLink className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">GitHub</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">Plataforma principal</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://code.visualstudio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 group"
                    >
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                        <ExternalLink className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">VS Code</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">Editor de código</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 group"
                    >
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                        <ExternalLink className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-zinc-900 dark:text-zinc-100">Documentação</div>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">Guias oficiais</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  GitHub Guide
                </span>
                <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}