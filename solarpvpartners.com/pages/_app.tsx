import 'modern-normalize/modern-normalize.css'
import '@/scss/styles.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
