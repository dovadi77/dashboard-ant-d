import type { AppProps } from 'next/app'
import Layout from "../components/BaseLayout"
import '../styles/globals.css'
import '../styles/antd.less'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
