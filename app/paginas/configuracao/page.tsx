import Link from "next/link";
import { ArrowLeft, Terminal, User, Key, CheckCircle, AlertTriangle } from "lucide-react";

export default function Configuracao() {
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
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-3xl w-fit mx-auto mb-6">
                <Terminal className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Configurando o GitHub no VS Code
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Siga este guia rápido para preparar seu ambiente de desenvolvimento local.
              </p>
            </div>
          </header>

          <div className="space-y-8">

            {/* Passo 1 */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-600 text-lg font-bold">1</span>
                </div>
                <h2 className="text-2xl font-bold">Instalar o Git via Terminal</h2>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg">
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  No terminal do VS Code (Ctrl + `), cole o comando abaixo para instalar o motor do Git:
                </p>

                <div className="relative group">
                  <pre className="bg-zinc-900 text-zinc-100 p-6 rounded-2xl overflow-x-auto font-mono text-sm border border-zinc-700 shadow-inner">
                    <code>winget install --id Git.Git -e --source winget</code>
                  </pre>
                </div>

                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                      Lembre-se de reiniciar o VS Code após a instalação concluir!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Passo 2 */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Configurar Identidade</h2>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg">
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Agora, informe ao Git quem é você para que seus commits sejam identificados corretamente:
                </p>

                <div className="space-y-4">
                  <div className="bg-zinc-900 text-zinc-100 p-6 rounded-2xl font-mono text-sm border border-zinc-700 shadow-inner">
                    <div className="text-zinc-500 mb-2"># Defina seu e-mail do GitHub</div>
                    <code>git config --global user.email {"\"email@exemplo.com\""}</code>
                  </div>

                  <div className="bg-zinc-900 text-zinc-100 p-6 rounded-2xl font-mono text-sm border border-zinc-700 shadow-inner">
                    <div className="text-zinc-500 mb-2"># Defina seu nome de usuário</div>
                    <code>git config --global user.name {"\"SeuNomeUsuario\""}</code>
                  </div>
                </div>
              </div>
            </section>

            {/* Passo 3 */}
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  <Key className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Autorização</h2>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 p-8 rounded-3xl shadow-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-800 dark:text-blue-300 font-medium mb-2">
                      Ao tentar realizar o primeiro <strong>push</strong> ou sincronização, o Windows abrirá uma janela do navegador.
                    </p>
                    <p className="text-blue-800 dark:text-blue-300">
                      Basta clicar em <strong className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">Authorize GitHub</strong> para vincular sua conta ao Visual Studio Code.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <Link
              href="/paginas/repositorios"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Próximo: Explorar Repositórios
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </footer>
        </main>
      </div>
    </div>
  );
}