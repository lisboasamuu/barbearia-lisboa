import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbearia Lisboa",
  robots: {
    index: false,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6 text-center">
      <meta httpEquiv="refresh" content="0;url=/barbearia-lisboa/" />
      <div>
        <p className="eyebrow">Barbearia Lisboa</p>
        <h1 className="mt-4 font-serif text-4xl text-ink">Estilo, precisão e presença.</h1>
        <p className="mt-5 text-muted">Você será direcionado para o site da Barbearia Lisboa.</p>
        <a className="button-primary mt-7" href="/barbearia-lisboa/">Acessar o site</a>
      </div>
    </main>
  );
}
