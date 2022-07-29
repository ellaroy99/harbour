import App from "next/app"
import Head from "next/head"
import { PageTransition } from 'next-page-transitions'
import Footer from "../components/meta/footer"
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
        <PageTransition timeout={450} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 450ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 450ms;
          }
        `}</style>
      <h1 style={{color:"red", position: "fixed", bottom: "10px", right: "30px" }}> BETA </h1>
    </>
  )
}

export default Harbour
