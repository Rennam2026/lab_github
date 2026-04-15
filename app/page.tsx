import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, GitBranch, Users, Zap, Star, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-purple-950">
        <div className="absolute inset-0 bg-grid-zinc-100 dark:bg-grid-zinc-800 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg">
                <Image
                  className="invert"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub logo"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GitHub Guide
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tighter mb-6">
              Onde o mundo constrói{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                software.
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl sm:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 mb-8">
              O GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o{" "}
              <strong className="text-blue-600 dark:text-blue-400">Git</strong>.
              É a maior comunidade de desenvolvedores do planeta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/paginas/configuracao"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Começar Configuração
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/paginas/repositorios"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                Explorar Repositórios
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Por que usar GitHub?</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Descubra os benefícios de integrar GitHub com seu fluxo de desenvolvimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <GitBranch className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Controle de Versão</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Gerencie o histórico de alterações do seu código, evitando perdas e facilitando o trabalho em equipe.
              </p>
            </div>

            <div className="group p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Colaboração</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Trabalhe em equipe sem conflitos. Pull requests, code reviews e discussões facilitam a colaboração.
              </p>
            </div>

            <div className="group p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Portfólio Vivo</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mostre seus projetos para o mundo. Contribua com open source e construa sua reputação como desenvolvedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Zap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pronto para começar?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Configure seu ambiente GitHub no VS Code em poucos minutos e comece a versionar seus projetos.
            </p>
            <Link
              href="/paginas/configuracao"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Iniciar Configuração
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}