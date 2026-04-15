import { Code, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GitHub Guide
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Seu guia completo para integrar GitHub com VS Code e dominar o controle de versão.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="https://github.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a></li>
              <li><a href="https://code.visualstudio.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">VS Code</a></li>
              <li><a href="https://git-scm.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Git</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Recursos</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><a href="/paginas/configuracao" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Configuração</a></li>
              <li><a href="/paginas/repositorios" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Repositórios</a></li>
              <li><a href="https://docs.github.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentação</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2024 GitHub Guide. Feito com <Heart className="inline h-4 w-4 text-red-500 mx-1" /> para desenvolvedores.
            </p>
            <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}