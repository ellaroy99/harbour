import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer, Divider } from "../components/meta"

import Timg from "../assets/img/tristan-abt.png";

const About = ({ homepage }) => {

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"The Artist", desc:""}} />
        <div className="arch-head">
            <Spacer h="20px" />
            <h5>Your climate archetype is:</h5>
            <h1>The Artist</h1>
            <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>"The role of the artist is to make <br />
                the revolution irresistible."</h2>
            <p className="quoteP">-Toni Cade Bamabara</p>

          <Spacer h="140px" />
          <img src={Timg} />
          <Divider b="0px" />
        </div>

        <Spacer h="110px" />
        <div className="your-list">
            <div className="anchor-list-con">
                <ul className="anchor-list">
                    <li><a href="">Your Joy</a></li>
                    <li><a href="">Your Strength</a></li>
                    <li><a href="">Your Quirk</a></li>
                    <li><a href="">Your Role</a></li>
                </ul>
            </div>
            <div className="anchor-content">
                <img src={Timg} />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>The Artist loves exploring new <br />
                    ideas and following their passions <br />
                    to unexpected places.</h2>
                <p>You’re probably no stranger to letting your curiosity guide you down many rabbit <br/>
                    holes—whether it’s a niche new hobby or an internet quiz about what climate <br/>
                    archetype you are.</p>
                <Spacer h="50px"/>
                <img src={Timg} />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>The Artist loves exploring new <br />
                    ideas and following their passions <br />
                    to unexpected places.</h2>
                <p>You’re probably no stranger to letting your curiosity guide you down many rabbit <br/>
                    holes—whether it’s a niche new hobby or an internet quiz about what climate <br/>
                    archetype you are.</p>
                <Spacer h="50px"/>
                <img src={Timg} />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>The Artist loves exploring new <br />
                    ideas and following their passions <br />
                    to unexpected places.</h2>
                <p>You’re probably no stranger to letting your curiosity guide you down many rabbit <br/>
                    holes—whether it’s a niche new hobby or an internet quiz about what climate <br/>
                    archetype you are.</p>
                <Spacer h="50px"/>
                <img src={Timg} />
                <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>The Artist loves exploring new <br />
                    ideas and following their passions <br />
                    to unexpected places.</h2>
                <p>You’re probably no stranger to letting your curiosity guide you down many rabbit <br/>
                    holes—whether it’s a niche new hobby or an internet quiz about what climate <br/>
                    archetype you are.</p>
                <Spacer h="100px"/>
                <Divider />
            </div>

        </div>

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
