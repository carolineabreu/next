import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import "../styles/style.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}
