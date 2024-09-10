import type { Metadata } from 'next';
import { AuthProvider } from './context/auth-provider';
import UserThemeProvider from './context/theme-provider';
import './globals.css';
import VaultHeader from './components/Header';

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
      <body>
        <AuthProvider>
          <UserThemeProvider>
            <VaultHeader />
            {children}
          </UserThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
