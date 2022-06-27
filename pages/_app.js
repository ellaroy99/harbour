import App from "next/app"
import Head from "next/head"
import { PageTransition } from 'next-page-transitions'
import "../assets/css/style.css"
import "../assets/css/font.css"
import "../assets/css/color.css"
import "../assets/css/screen-sizes.css"
import 'jquery/dist/jquery.min.js'

const Harbour = ({ Component, router, pageProps }) => {

  return (
    <>
      <Head>
      {/*gtag here*/}
      </Head>
      {/* header here*/}
      <Component {...pageProps} key={router.route} />
    </>
  )
}

export default Harbour
