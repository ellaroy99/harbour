import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer, Divider } from "../components/meta"

import Timg from "../assets/img/tristan-abt.png";

const JaneDoe = ({ homepage }) => {

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"Jane Doe", desc:""}} />
        <div className="itv-head">
            <Spacer h="10px" />
            <h1>Jane Doe: Interesting Headline</h1>

            <div className="itv-row-con">
                <div className="itv-row">
                    <div className="itv-img">
                        <img src="https://res.cloudinary.com/mymediacreative/image/upload/v1645693934/blog-placeholder_csxpbc.png" />
                    </div>
                    <div className="itv-info">
                        <h4>Name: <br className="stay"/><em>Name Surname</em></h4>
                        <h4>Age: <br className="stay"/><em>32</em></h4>
                        <h4>Occupation: <br className="stay"/><em>Job Name</em></h4>
                    </div>
                </div>
            </div>

            <Spacer h="30px" />

            <p> Introductory paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>

            <Spacer h="50px" />

            <Divider b="0px" />
        </div>

        <Spacer h="60px" />
        <div className="">
            <div className="itv-questions">
                <div>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>1.</h2>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>
                        This is the first question.
                    </h2>
                    <p>This is the second answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Spacer h="50px"/>

                <div>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>2.</h2>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>
                        My average day.
                    </h2>
                    <div className="avgDay">
                        <div>
                            <h6>8:00 AM</h6>
                            <h3>Activity</h3>
                            <p>Activity Description</p>
                        </div>
                        <div>
                            <h6>8:00 AM</h6>
                            <h3>Activity</h3>
                            <p>Activity Description</p>
                        </div>
                        <div>
                            <h6>8:00 AM</h6>
                            <h3>Activity</h3>
                            <p>Activity Description</p>
                        </div>
                        <div>
                            <h6>8:00 AM</h6>
                            <h3>Activity</h3>
                            <p>Activity Description</p>
                        </div>
                    </div>
                </div>

                <Spacer h="50px"/>

                <div>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>3.</h2>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>
                        This is the second question.
                    </h2>
                    <p>This is the second answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Spacer h="50px"/>

                <div>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>4.</h2>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>
                        This is the third question.
                    </h2>
                    <p>This is the second answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Spacer h="50px"/>

                <div>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>5.</h2>
                    <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>
                        Jane's starter pack:
                    </h2>
                    <div className="starterPack">
                        <div>
                            <h3>Resource Title</h3>
                            <p>Resource Type</p>
                            <a className="arrow-link" href="">View Resource</a>
                        </div>
                        <div>
                            <h3>Resource Title</h3>
                            <p>Resource Type</p>
                            <a className="arrow-link" href="">View Resource</a>
                        </div>
                        <div>
                            <h3>Resource Title</h3>
                            <p>Resource Type</p>
                            <a className="arrow-link" href="">View Resource</a>
                        </div>
                        <div>
                            <h3>Resource Title</h3>
                            <p>Resource Type</p>
                            <a className="arrow-link" href="">View Resource</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <Spacer h="50px"/>


      <Footer />
      </div>
    </>
  )
}

export default JaneDoe
