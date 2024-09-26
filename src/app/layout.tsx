import type { Metadata } from 'next';
import UserThemeProvider from './context/theme-provider';
import './globals.css';

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
        <UserThemeProvider>{children}</UserThemeProvider>
      </body>
    </html>
  );
}
