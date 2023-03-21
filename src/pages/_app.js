import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.css'

export default function App({ Component, pageProps }) {
  return(
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
