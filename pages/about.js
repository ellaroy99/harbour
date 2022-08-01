import React from "react"
import Link from "next/link"
import Image from "next/image"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer, Divider } from "../components/meta"
import AboutCard from "../components/about-card"

const About = ({ homepage }) => {

    let tristan = { name: "Tristan Surman",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_800/v1657729362/the%20harbour/about%20page/Tristan_jn2efy.png",
                    li: "https://www.linkedin.com/in/tristan-surman/",
                    desc: <>"I wish I could tell my younger self that one day I’d be making BuzzFeed quizzes for social change. It’d totally freak him out."</>,  };
    let ella    = { name: "Ella Roy",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_800/v1657729362/the%20harbour/about%20page/Ella_xflzcb.png",
                    li: "https://www.linkedin.com/in/ella-roy-433948156/",
                    desc: <>"A little quote about what the harbour means to Boss Man Ella"</>,  };
    let tony    = { name: "Tony Wang",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_800/v1657729361/the%20harbour/about%20page/Tony_eay37u.png",
                    li: "https://www.linkedin.com/in/tonywang99/",
                    desc: <>"A little quote about what the harbour means to Boss Man Tony"</>,  };
    let liam    = { name: "Liam Chung",
                    image: "https://res.cloudinary.com/mymediacreative/image/upload/c_scale,w_800/v1657729362/the%20harbour/about%20page/Liam_w9pgs7.png",
                    li: "https://www.linkedin.com/in/liam-chung-9121a4151/",
                    desc: <>"A little quote about what the harbour means to Liam"</>,  };

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"Home", desc:""}} />
        <div className="about-head">
          <Spacer h="40px" />
          <h1>So, why a quiz?</h1>
          <Spacer h="10px" />
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
                <p>Created by:<br className="stay"/>
                  <em>My Media Creative</em><br className="stay"/>
                  <a href="https://mymediacreative.org">mymediacreative.org</a>
                </p>
              </div>
              <div>
                <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1646253292/MMC_Logo-01_zmy7c4.png" alt="My Media Creative Logo" />
              </div>
          </div>

          <p>My Media is a creative agency for social change and climate action. We’ve worked with more <br/>
             than 100 purpose-driven nonprofits, social enterprises, and charities to amplify their work. <br/>
             Our work in advertising, branding, and design for such brilliant organisations has inspired us <br/>
             with a sense of  purpose. We wanted to create something that would aim to do the same for others.<br/>
            </p>
          <div className="createdBy">
              <div>
                <p>Funded by:<br className="stay"/>
                  <em>The Foundation for<br className="stay"/>
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

            <Spacer h="30px" />
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
