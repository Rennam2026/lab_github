import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <main className="flex w-full max-w-4xl flex-col items-center gap-12 py-20 px-8 sm:items-start">
        
        {/* Header com Logo */}
        <div className="flex items-center gap-4">
          <div className="bg-black dark:bg-white p-2 rounded-full">
            <Image
              className="invert dark:invert-0"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">O que é o GitHub?</h1>
        </div>

        {/* Conteúdo Principal */}
        <section className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              A rede social dos programadores
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              O GitHub é uma plataforma de hospedagem de código-fonte e arquivos que utiliza o sistema de controle de versões <strong>Git</strong>. 
              É onde desenvolvedores do mundo todo colaboram em projetos de código aberto ou privados.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
              Para que serve?
            </h2>
            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-2">
                <span className="font-bold text-zinc-900 dark:text-white">🚀 Portfólio:</span> 
                Exiba seus projetos para o mundo e recrutadores.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-zinc-900 dark:text-white">🤝 Colaboração:</span> 
                Trabalhe em equipe no mesmo código sem conflitos.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-zinc-900 dark:text-white">⏳ Histórico:</span> 
                Mantenha um registro de cada alteração feita no seu software.
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <div className="flex flex-col w-full gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800 sm:flex-row">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 text-sm font-medium text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            href="https://github.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Criar conta gratuita
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-xl border border-zinc-300 px-8 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            href="https://docs.github.com/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentação oficial
          </a>
        </div>

        {/* Badge Informativa */}
        <footer className="mt-12 text-sm text-zinc-500 italic">
          💡 Curiosidade: O GitHub hospeda hoje mais de 100 milhões de repositórios.
        </footer>
      </main>
    </div>
  );
}