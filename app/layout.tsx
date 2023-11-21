import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Eungbug Devlog',
    template: 'Eungbug Devlog | %s'
  },
  description: 'Eungbug 개발 블로그',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ko"
      className="font-Pretendard">
      <head>
        <meta
          name="google-site-verification"
          content="rYeNxTmzWw8kwL2DXcrlzyNdw_FA1lsJUzWah8PIUow"
        />
      </head>
      <body
        className={`w-full flex flex-col items-center px-5 py-3 h-screen bg-white dark:bg-darkblack`}>
        <header className={`w-full max-w-3xl flex justify-between items-center my-1`}>
          <NavBar />
        </header>
        <main className="w-full max-w-3xl pb-5 pt-10 flex-1 sm:px-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
