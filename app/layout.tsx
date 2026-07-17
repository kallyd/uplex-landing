import type { Metadata } from "next";
import "@fontsource-variable/sora";
import "./globals.css";

export const metadata: Metadata = {
  title: "UplexOS — A empresa que existe dentro do seu sistema",
  description: "Um sistema operacional agentic para planejar, construir, validar, proteger e evoluir produtos digitais com agentes, governança e evidências.",
  metadataBase: new URL("https://uplexos.com"),
  openGraph: {
    title: "UplexOS — Agentic Company Operating System",
    description: "Transforme intenção em software real por meio de uma organização digital governada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
