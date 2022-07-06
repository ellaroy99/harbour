import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer } from "../components/meta"

import Timg from "../assets/img/tristan-abt.png";

const About = ({ homepage }) => {

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"Home", desc:""}} />
        <div className="about-head">
          <Spacer h="20px" />
          <h1>About</h1>
            <p>Eco-anxiety is real. Three quarters of young people are terrified about the future of our planet. We <br/>
                obviously care. But the climate crisis can feel overwhelming—so overwhelming, in fact, that we <br/>
                often have no clue how to help or where to start. <br/> <br/>

                Existential crises tend to have that effect on people. <br/> <br/>

                So we decided to do something about it. First, we made a personality quiz to help you figure out <br/>
                what your Climate Archetype is. Then, we compiled resources on how to get involved in the <br/>
                climate movement—tailor-made for each personality type. Finally, we went out and spoke to <br/>
                dozens of young climate leaders from across Canada—so you can see what climate action really <br/>
                looks like from the ground. You can check out their stories in the form of profiles and <br/>
                documentaries featured on each Climate Archetype’s page. <br/> <br/>

                Take the quiz, explore our resources, get inspired. Everyone has a role to play in saving the planet <br/>
                —now it’s time to find yours. <br/> <br/>

                This project was produced by My Media Creative and made possible thanks to generous support <br/>
                from The Harbour, an initiative of the Foundation for Environmental Stewardship.
            </p>
          <Spacer h="140px" />
        </div>

        <div className="abt-rows">
          <div className="abt-row">
            <div className="profile-img">
              <a className="">
                <img src={Timg} />
              </a>
            </div>
            <div className="profile-content">
              <h1>Tristan Surman</h1>
              <h5>"A little quote about what the harbour means to <br /> boss man Tristan"</h5>
              <a className="">
              </a>
            </div>
          </div>

          <div className="abt-row">
            <div className="profile-img">
              <a className="">
                <img src={Timg} />
              </a>
            </div>
            <div className="profile-content">
              <h1>Ella Roy</h1>
              <h5>"A little quote about what the harbour means to <br /> boss man Tristan"</h5>
              <a className="">
              </a>
            </div>
          </div>

          <div className="abt-row">
            <div className="profile-img">
              <a className="">
                <img src={Timg} />
              </a>
            </div>
            <div className="profile-content">
              <h1>Tony Wang</h1>
              <h5>"A little quote about what the harbour means to <br /> boss man Tristan"</h5>
              <a className="">
              </a>
            </div>
          </div>

          <div className="abt-row">
            <div className="profile-img">
              <a className="">
                <img src={Timg} />
              </a>
            </div>
            <div className="profile-content">
              <h1>Liam Chung</h1>
              <h5>"A little quote about what the harbour means to <br /> boss man Tristan"</h5>
              <a className="">
              </a>
            </div>
          </div>
        </div>

        <Spacer h="50px" />

      <Footer />
      </div>
    </>
  )
}

export default About
