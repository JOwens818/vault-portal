import type { Metadata } from 'next';
import { AuthProvider } from './context/auth-provider';
import './globals.css';
import VaultHeader from './components/Header';
import { ThemeProvider } from './context/theme-provider';

export const metadata: Metadata = {
  title: 'Vault App',
  description: 'Secure password management'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={'bg-white text-slate-800 dark:bg-slate-800 dark:text-white'}
      >
        <AuthProvider>
          <ThemeProvider>
            <VaultHeader />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
