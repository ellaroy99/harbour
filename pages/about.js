import React from "react"
import Link from "next/link"
import Image from "next/image"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer } from "../components/meta"
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
