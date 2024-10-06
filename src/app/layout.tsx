'use client'; // Certifique-se de que este arquivo é um cliente

import Navbar from '@/components/layouts/navbar';
import NavbarOficina from '@/components/layouts/navbarOficina';
import './globals.css';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);

  const hideNavbarPaths = ['/login', '/register', '/forgot-password'];

  useEffect(() => {
    setShowNavbar(!hideNavbarPaths.some((path) => pathname.startsWith(path)));
  }, [pathname]);

  const isOficinaRoute = pathname.startsWith('/oficina');

  return (
    <html lang="en">
      <body className={inter.className}>
        {showNavbar && !isOficinaRoute && <Navbar />}
        {isOficinaRoute && <NavbarOficina />}
        <main>{children}</main> {/* Certifique-se de que children está sendo renderizado */}
      </body>
    </html>
  );
}