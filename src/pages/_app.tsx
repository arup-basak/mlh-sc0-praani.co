import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Footer from '@/components/Footer';
import { Golos_Text } from 'next/font/google'

const font = Golos_Text({ subsets: ['latin'], weight: ['400'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <main className={font.className}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </UserProvider>
  )
}
