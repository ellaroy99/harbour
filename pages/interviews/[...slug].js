import React from "react"
import content from '../../assets/data/interviews.json';
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer, Divider } from "../../components/meta"

import Timg from "../../assets/img/tristan-abt.png";

export default function Page ( p ) {

    let page = p.page;

    if(typeof(page) == 'undefined') return ( <> <p> ERROR </p> </> )
    else return (
        <>
        <div id="main-content">
            {/*<Seo seo={homepage.attributes.seo} />*/}
            <Nav seo={{title: page.name, desc: page.seoDesc }} />
            <div className="itv-head">
                <Spacer h="10px" />
                <h1>{page.name}: {page.headline}</h1>

                <div className="itv-row-con">
                    <div className="itv-row">
                        <div className="itv-img">
                            <img src={page.headerimg} />
                        </div>
                        <div className="reg itv-info">
                            <h4>Name: <br className="stay"/><em>{page.name}</em></h4>
                            <h4>Age: <br className="stay"/><em>{page.age}</em></h4>
                            <h4>Occupation: <br className="stay"/><em>{page.occupation}</em></h4>
                        </div>
                        <div className="mobile itv-info">
                            <h4>Name:</h4>
                            <h4><em>{page.name}</em></h4>
                            <h4>Age:</h4>
                            <h4><em>{page.age}</em></h4>
                            <h4>Occupation:</h4>
                            <h4><em>{page.occupation}</em></h4>
                        </div>
                    </div>
                </div>
                <Spacer h="30px" />
                <p> {page.intro} </p>
                <Spacer h="50px" />
                <Divider b="0px" />
            </div>

            <Spacer h="60px" />
            <div className="">
                <div className="itv-questions">
                    <div>
                        <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>{ page.oneQ }</h2>
                        <p>{ page.oneA }</p>
                    </div>
                    <Spacer h="50px"/>

                    <div>
                        <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>My average day.</h2>
                        <div className="avgDay">
                            { page.avgDay.map(day => (
                                    <>
                                    <div>
                                        <h6>{day.time}</h6>
                                        <h3>{day.activity}</h3>
                                        <p>{day.description}</p>
                                    </div>
                                    </>
                                )
                            )}
                        </div>
                    </div>
                    <Spacer h="50px"/>

                    <div>
                        <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>{ page.twoQ }</h2>
                        <p>{ page.twoA }</p>
                    </div>
                    <Spacer h="50px"/>

                    <div>
                        <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>{ page.threeQ }</h2>
                        <p>{ page.threeA }</p>
                    </div>
                    <Spacer h="50px"/>

                    <div>
                        <h2 style={{ color: "var(--dorange)", fontStyle: "italic" }}>
                            {page.name}&#39;s starter pack:
                        </h2>
                        <div className="starterPack">
                            { page.starterPack.map(res => (
                                    <>
                                        <div>
                                            <h3>{res.title}</h3>
                                            <p>{res.type}</p>
                                            <button className="arrow-link" style={{}}><a href={res.link}>View Resource</a></button>
                                        </div>
                                    </>
                                )
                            )}
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

export async function getStaticPaths() {
  const paths = content.pages.map(page => {
    const slug = page.path.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: true};
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = content.pages.find(page => page.path === currentPath) || {notfound: true};
  return {props: {page}};
}
