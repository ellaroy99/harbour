import React from "react"
import Link from 'next/link'
import Image from 'next/image'
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer } from "../components/meta"


const Home = ({ homepage }) => {

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"Home", desc:""}} />
        <div className="home-head">
          <Spacer h="20px" />
          <h1>Find your place in the climate movement.</h1>
          <p>We all have a role to play when it comes to fighting climate change—and they’re not always what <br/> you’d expect. Take our short personality quiz to discover your unique Climate Archetype.</p>
          <Spacer h="20px" />
          <Link href="/quiz">
            <a className="arrow-link">Take the Test</a>
          </Link>
          <Spacer h="30px" />
        </div>

        <div className="img-con">
          <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1657362417/the%20harbour/archetype%20illustrations/Architect_uk6err.png" alt="" />
        </div>

        <Spacer h="50px" />

      <Footer />
      </div>
    </>
  )
}

export default Home

