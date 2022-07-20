import React from "react"
import Link from "next/link"
import Image from "next/image"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer } from "../components/meta"
import ArchCard from "../components/arch-card"

const Archetypes = ({ homepage }) => {

    let artist       = { name: "The Artist", slug: "artist",
                         image: "https://res.cloudinary.com/mymediacreative/image/upload/v1657362432/the%20harbour/archetype%20illustrations/Artist-square_ejnhps.png", }
    let caregiver    = { name: "The Caregiver", slug: "caregiver",
                         image: "https://res.cloudinary.com/mymediacreative/image/upload/v1657362449/the%20harbour/archetype%20illustrations/Caregiver-square_qq0lqy.png", }
    let storyteller  = { name: "The Storyteller", slug: "storyteller",
                         image: "https://res.cloudinary.com/mymediacreative/image/upload/v1657362484/the%20harbour/archetype%20illustrations/Storyteller-square_wwleoc.png", }
    let organizer    = { name: "The Organizer", slug: "organizer",
                         image: "https://res.cloudinary.com/mymediacreative/image/upload/v1657362470/the%20harbour/archetype%20illustrations/Organizer-square_h0ix8t.png", }
    let architect    = { name: "The Architect", slug: "architect",
                         image: "https://res.cloudinary.com/mymediacreative/image/upload/v1657362444/the%20harbour/archetype%20illustrations/Architect-square_mtypwo.png", }
    let scientist    = { name: "The Scientist", slug: "scientist",
                         image: "https://res.cloudinary.com/mymediacreative/image/upload/v1657362497/the%20harbour/archetype%20illustrations/Scientist-square_xec7ux.png", }
    let entrepreneur = { name: "The Entrepreneur", slug: "entrepreneur",
                         image: "https://res.cloudinary.com/mymediacreative/image/upload/v1657362414/the%20harbour/archetype%20illustrations/Entrepreneur-square_wqk53w.png", }
    let reformer     = { name: "The Reformer", slug: "reformer",
                         image: "https://res.cloudinary.com/mymediacreative/image/upload/v1657362463/the%20harbour/archetype%20illustrations/Reformer-square_rcafgh.png", }

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"Archetypes", desc:""}} />
        <div className="archs-head">
          <Spacer h="40px" />
          <h1>Archetypes</h1>
          <Spacer h="5px" />
            <p>View 8 of the mindsets we've identified in the climate movement --- and see which one best <br/>
                reflects you by <b><Link href="/quiz">taking our quiz</Link></b>.
            </p>
        </div>

        <Spacer h="25px" />

        <div className="abt-rows">
          <ArchCard arch={artist} />
          <ArchCard arch={caregiver} />
          <ArchCard arch={storyteller} />
          <ArchCard arch={organizer} />
          <ArchCard arch={architect} />
          <ArchCard arch={scientist} />
          <ArchCard arch={entrepreneur} />
          <ArchCard arch={reformer} />
        </div>

        <Spacer h="50px" />

      <Footer />
      </div>
    </>
  )
}

export default Archetypes
