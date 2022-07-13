import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer, Divider } from "../components/meta"

import Timg from "../assets/img/tristan-abt.png";

const About = ({ homepage }) => {

    let [anchorSelect, anchorSelectUpdate] = useState(["select", "", "", ""])

    let listenToScroll = () => {
        const anchor1 = document.getElementById('anchor1').getBoundingClientRect().top + window.scrollY; // find the top position of title block
        const anchor2 = document.getElementById('anchor2').getBoundingClientRect().top + window.scrollY; // find the top position of title block
        const anchor3 = document.getElementById('anchor3').getBoundingClientRect().top + window.scrollY; // find the top position of title block
        const anchor4 = document.getElementById('anchor4').getBoundingClientRect().top + window.scrollY; // find the top position of title block

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        if(winScroll < anchor2) { anchorSelectUpdate(["select","","",""]) }
        else if(winScroll > anchor2 && winScroll < anchor3) { anchorSelectUpdate(["","select","",""]) }
        else if(winScroll > anchor3 && winScroll < anchor4) { anchorSelectUpdate(["","","select",""]) }
        else if(winScroll > anchor4) { anchorSelectUpdate(["","","","select"]) }
    }

    // assign the scroll listener and unassign at end
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll, { passive: true });
        return () => { window.removeEventListener('scroll', listenToScroll); };
    }, []);

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"The Artist", desc:""}} />
        <div className="arch-head">
            <Spacer h="10px" />
            <h5>Your climate archetype is:</h5>
            <h1>The Artist</h1>
            <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>"The role of the artist is to make <br />
                the revolution irresistible."</h2>
            <p className="quoteP">-Toni Cade Bamabara</p>

          <div className="img-con">
            <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1657362375/the%20harbour/archetype%20illustrations/Artist_gblz0z.png" />
          </div>
          <Divider b="0px" />
        </div>

        <Spacer h="110px" />
        <div className="your-list">
            <div className="anchor-list-con">
                <ul className="anchor-list">
                    <li className={anchorSelect[0]}><a href="#anchor1">Your Joy</a></li>
                    <li className={anchorSelect[1]}><a href="#anchor2">Your Strength</a></li>
                    <li className={anchorSelect[2]}><a href="#anchor3">Your Quirk</a></li>
                    <li className={anchorSelect[3]}><a href="#anchor4">Your Role</a></li>
                <Spacer h="100px"/>
                </ul>
            </div>
            <div className="anchor-content">
                <img id="anchor1" src={Timg} />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>The Artist loves exploring new <br />
                    ideas and following their passions <br />
                    to unexpected places.</h2>
                <p>You’re probably no stranger to letting your curiosity guide you down many rabbit <br/>
                    holes—whether it’s a niche new hobby or an internet quiz about what climate <br/>
                    archetype you are.</p>
                <Spacer h="50px"/>
                <img id="anchor2" src={Timg} />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>The Artist loves exploring new <br />
                    ideas and following their passions <br />
                    to unexpected places.</h2>
                <p>You’re probably no stranger to letting your curiosity guide you down many rabbit <br/>
                    holes—whether it’s a niche new hobby or an internet quiz about what climate <br/>
                    archetype you are.</p>
                <Spacer h="50px"/>
                <img id="anchor3" src={Timg} />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>The Artist loves exploring new <br />
                    ideas and following their passions <br />
                    to unexpected places.</h2>
                <p>You’re probably no stranger to letting your curiosity guide you down many rabbit <br/>
                    holes—whether it’s a niche new hobby or an internet quiz about what climate <br/>
                    archetype you are.</p>
                <Spacer h="50px"/>
                <img id="anchor4" src={Timg} />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>The Artist loves exploring new <br />
                    ideas and following their passions <br />
                    to unexpected places.</h2>
                <p>You’re probably no stranger to letting your curiosity guide you down many rabbit <br/>
                    holes—whether it’s a niche new hobby or an internet quiz about what climate <br/>
                    archetype you are.</p>
                <Spacer h="100px"/>
                <Divider b="0"/>
            </div>

        </div>

        <Spacer h="50px"/>

      <div style={{ textAlign: "center" }}>
        <h1>The Artist in Action</h1>
        <p>We met with dozens of young leaders across the country to explore the different ways you can <br/>
            take action against climate change. Here are some of their stories.</p>
        <img src={Timg}/>

          <Spacer h="100px" />

        <div className="arch-profile">
            <div>
                <img src={Timg} />
                <h3> Name Surname </h3>
                <p> <em> Career Name </em> </p>
                <Spacer h="15px" />
                <a className="arrow-link"> View Profile </a>
            </div>
            <div>
                <img src={Timg} />
                <h3> Name Surname </h3>
                <p> <em> Career Name </em> </p>
                <Spacer h="15px" />
                <a className="arrow-link"> View Profile </a>
            </div>
            <div>
                <img src={Timg} />
                <h3> Name Surname </h3>
                <p> <em> Career Name </em> </p>
                <Spacer h="15px" />
                <a className="arrow-link"> View Profile </a>
            </div>

            <Divider b="-120px"/>
        </div>

          <Spacer h="200px" />

        <div className="starter-pack">
            <img src={Timg} />
            <h1> Starter Pack </h1>
            <p>You gotta start somewhere. Explore our curated list of resources, <br/>
                tailored specifically for your climate archetype.</p>
            <Spacer h="30px" />
            <a style={{ backgroundColor: "var(--dblue)"}} className="arrow-link">View Starter Pack</a>
            <Spacer h="30px" />
            <Divider b="-100px"/>
        </div>

          <Spacer h="200px" />

        <div className="starter-pack">
            <h1> Careers </h1>
            <h3> Digital Designer • Facilitator • Curator • Musician</h3>
            <Spacer h="30px" />
        </div>
      </div>


        <Spacer h="50px" />

      <Footer />
      </div>
    </>
  )
}

export default About
