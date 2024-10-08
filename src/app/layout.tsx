import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';

import { Suspense } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Rentcars | Hydrah Tec',
  description: 'Pagina da locadora Rentcars',
  keywords: 'alugar carros, aluguel de carros, carros para alugar, carros baratos, comprar carro',
  icons: '/img/imgfavicon_rentcars.ico',
  robots: 'index, follow',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando dados da pagina...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
