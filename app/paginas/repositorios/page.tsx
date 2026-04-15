import Link from "next/link";
import { ArrowLeft, GitBranch, BookOpen, Plus, Search, Star, GitFork, Eye } from "lucide-react";

export default function Repositorios() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <main className="max-w-4xl mx-auto">

          {/* Header */}
          <header className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para a Home
            </Link>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-4 rounded-3xl w-fit mx-auto mb-6">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Repositórios do GitHub
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Explore seus repositórios e gerencie conexões entre VS Code e GitHub.
              </p>
            </div>
          </header>

          <section className="space-y-8">

            {/* Status Card */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-3xl w-fit mx-auto mb-6">
                  <GitBranch className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Nenhum repositório conectado</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                  Conecte sua conta do GitHub para começar a ver seus repositórios aqui. Depois de autorizar o GitHub no VS Code, os repositórios aparecerão automaticamente.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/paginas/configuracao"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Ir para Configuração
                  </Link>
                  <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200">
                    <Plus className="h-4 w-4" />
                    Criar Repositório
                  </button>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              <article className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-2xl w-fit mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Como conectar</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Abra o painel de controles do GitHub no VS Code e autorize o acesso à sua conta. Depois você poderá clonar, abrir e sincronizar repositórios diretamente do editor.
                </p>
              </article>

              <article className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-2xl w-fit mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Próximos passos</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Depois de conectar, visite a página de configuração para revisar as permissões e ajustes de identidade do Git.
                </p>
              </article>
            </div>

            {/* Mock Repository Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-center">Exemplo de Repositórios</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-center mb-6">
                Assim aparecerão seus repositórios quando conectados:
              </p>

              <div className="space-y-4 opacity-60">
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">meu-projeto-react</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Um projeto React incrível</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-zinc-500">
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            42
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-4 w-4" />
                            8
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            156
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">
                      Public
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">api-nodejs</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">API REST com Node.js e Express</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-zinc-500">
                          <span className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            15
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="h-4 w-4" />
                            3
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            89
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-medium rounded-full">
                      Private
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </main>
      </div>
    </div>
  );
}
