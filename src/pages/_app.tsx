import Layout from '@src/components/layout/Layout'
import '@src/styles/globals.css'
import { ModalProvider } from '@src/utils/modalContext/ModalContext'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalProvider>
  )
}
