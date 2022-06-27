import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Layout, Spacer } from "../components/meta"

const Home = ({ homepage }) => {

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <div className="home-head">
          <Spacer h="100px" />
          <h1>Find your place in the climate movement.</h1>
          <p>We all have a role to play when it comes to fighting climate change—and they’re not always what <br/> you’d expect. Take our short personality quiz to discover your unique Climate Archetype.</p>
          <a href="/quiz" className="arrow-link">Take the Test</a>
          <Spacer h="140px" />
        </div>

        <div className="quiz-con">
        </div>

        <Spacer h="50px" />

      </div>
    </>
  )
}

export default Home

