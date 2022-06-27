import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Layout, Spacer } from "../components/meta"
import Question from "../components/question"

import questions from "../assets/data/questions.json"
import archetypes from "../assets/data/archetypes.json"

const Quiz = ({ homepage }) => {

  // state that manages what the profile
  let [profile, profileUpdate] = useState(questions);
  // tracks what questions have been answered
  let [answered, answeredUpdate] = useState([]);
  // display of answer
  let [result, resultUpdate] = useState("Answer all questions to see your results.");

  let onChangeValue = (event) => {
    // add this question to answered list
    let id = Number(event.target.name);
    if(!answered.includes(id)) answeredUpdate([...answered, id]);

    let answer = Number(event.target.value);
    // depending on how the question was asked, it may be for or against a certain attribute
    if(profile[id - 1].axis % 2 == 0) answer = answer * -1;

    // update state to reflect answer to question
    profileUpdate(prevState => (
      prevState.map( el => el.id === id? { ...el, value: answer }: el )
    ));
  }

  useEffect(() => {
    if(answered.length == profile.length) {
      // calculate response
      var out = calcResult();
      // set state var of "output" to "all q's answered!" and whatever the response is
      resultUpdate(out);
    };
  });

  let calcResult = () => {
    // pull out questions relevant to each axis
    let IEarr = profile.filter(checkIE);
    let FTarr = profile.filter(checkFT);
    let CNarr = profile.filter(checkCN);

    // sum the scores in each category
    let IE = sum(IEarr);
    let FT = sum(FTarr);
    let CN = sum(CNarr);

    let code = "";

    code += IE >= 0 ? "I" : "E";
    code += FT >= 0 ? "F" : "T";
    code += CN >= 0 ? "C" : "N";

    //return <>All questions have been answered. <br/> archetype: {archetypes[code]}</>;
    return <>All questions have been answered. <br/>I/E: {IE},<br/> F/T: {FT}, <br/> C/N: {CN},<br/> result: {code} <br/> archetype: {archetypes[code]}</>;
  }

  let checkIE = (q) => q.axis < 3
  let checkFT = (q) => q.axis > 2 && q.axis < 5
  let checkCN = (q) => q.axis > 4

  let add = (acc, x) => acc + x
  let sum = arr => arr.reduce((prev, cur) => prev + cur.value, 0);

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <div className="home-head">
          <Spacer h="100px" />
          <h3>Climate Warriors</h3>
          <Spacer h="140px" />
        </div>

        <div className="quiz-con">
          <div onChange={onChangeValue} className="form">
            <>{ profile.map((q, index) => { return <Question key={index} content={profile[index].content} name={profile[index].id}/>; })}</>
          </div>

          <p>{result}</p>
          <ul>
            <>{ profile.map((q, index) => { return <li key={index}>{q.id} : {q.value}</li>; })}</>
          </ul>
        </div>

        <Spacer h="50px" />

      </div>
    </>
  )
}

export default Quiz
