import React from "react"
import Link from "next/link"
import Image from "next/image"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer, Divider } from "../components/meta"
import AboutCard from "../components/about-card"

const About = ({ homepage }) => {

    let tristan = { name: "Tristan Surman",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645637892/about/Tristan_2_gvybas.png",
                    li: "https://www.linkedin.com/in/tristan-surman/",
                    desc: <>"A little quote about what the harbour means to boss man Tristan"</>,  };
    let ella    = { name: "Ella Roy",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645637892/about/Ella_2_rt93uu.png",
                    li: "https://www.linkedin.com/in/ella-roy-433948156/",
                    desc: <>"A little quote about what the harbour means to boss man Tristan"</>,  };
    let tony    = { name: "Tony Wang",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645637892/about/Tony_2_bxu33u.png",
                    li: "https://www.linkedin.com/in/tonywang99/",
                    desc: <>"A little quote about what the harbour means to boss man Tristan"</>,  };
    let liam    = { name: "Liam Chung",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_500/v1645678500/about/Liam_2_iijz0q.png",
                    li: "https://www.linkedin.com/in/liam-chung-9121a4151/",
                    desc: <>"A little quote about what the harbour means to boss man Tristan"</>,  };

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"Home", desc:""}} />
        <div className="about-head">
          <Spacer h="10px" />
          <h1>About</h1>
          <p>A lot of us don’t know how to fight climate change. We know that we want to—but the “how” keeps <br/>
            eluding us. 74% of young people don’t know how they can contribute to climate action. But, after a <br/>
            couple years of being in this movement, we’ve learned something: everybody’s strengths, perspective, <br/>
            and experiences are valuable (no, vital) in the fight to make our planet habitable and just. <br/>
            <br/><br/>
            So we built this quiz. It’s like any other personality quiz you’ve ever taken—but with some added <br/>
            twists. Once you take it, you’ll get assigned a climate warrior archetype: one of eight profiles that <br/>
            reflect different mindsets in the movement. With that archetype you won’t just get a cute description <br/>
            and some similar celebrities. You’ll also get resources, guidance, and the opportunity to connect <br/>
            based on the mindset that you’re bringing to the table in the fight to save our planet. <br/> <br/>
          </p>
          <a className="arrow-link"><em>Take the quiz</em></a>
          <Spacer h="40px" />
          <div className="createdBy">
              <div>
                <p>Created by:<br/>
                  <em>My Media Creative</em><br/>
                  <a href="https://mymediacreative.org">mymediacreative.org</a>
                </p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1646253292/MMC_Logo-01_zmy7c4.png" alt="My Media Creative Logo" />
              </div>
          </div>

          <p>A lot of us don’t know how to fight climate change. We know that we want to—but the “how” keeps<br/>
            eluding us. 74% of young people don’t know how they can contribute to climate action. But, after a<br/>
            couple years of being in this movement, we’ve learned something: everybody’s strengths, perspective,<br/>
            and experiences are valuable (no, vital) in the fight to make our planet habitable and just.<br/>
            </p>
          <div className="createdBy">
              <div>
                <p>Funded by:<br/>
                  <em>The Foundation for<br/>
                    Environmental Stewardship</em>
                </p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1646253292/MMC_Logo-01_zmy7c4.png" alt="My Media Creative Logo" />
              </div>
          </div>

          <div style={{position: "relative"}}>
            <Spacer h="30px" />
            <Divider />
          </div>

          <h1>Our Partners</h1>

          <Spacer h="130px" />
          <Divider b="0"/>
        </div>

        <div className="abt-rows">
          <AboutCard person={tristan} />
          <AboutCard person={ella} />
          <AboutCard person={tony} />
          <AboutCard person={liam} />
        </div>

        <Spacer h="50px" />

      <Footer />
      </div>
    </>
  )
}

export default About
