import React from "react"
//import Seo from "../components/seo"
import { useRef, useEffect, useState } from 'react'

import { Nav, Footer, Layout, Spacer } from "../components/meta"
import Question from "../components/question"

import questions from "../assets/data/questions.json"
import archetypes from "../assets/data/archetypes.json"

const Quiz = ({ homepage }) => {

  // state that manages what the profile
  let [profile, profileUpdate] = useState(questions);
  // tracks what questions have been answered
  let [answered, answeredUpdate] = useState([]);
  // tracks current page of the quiz
  let [quizPg, quizPgUpdate] = useState(0);
  // tracks opactity of quiz for transition state
  let [quizOpac, quizOpacUpdate] = useState(1);
  // tracks the state of the next button at the bottom
  let [btnState, btnStateUpdate] = useState("greyed");

  // breaks questions list into blocks of 5
  let questionsArr = [];
  const questionsTemp = [].concat(...questions);
  for( var i = 0; i < 9; i++) {
    questionsArr.push(questionsTemp.splice(0, 5))
  }

  useEffect(() => {
    if(answered.length === quizPg*5 + 5) {
      btnStateUpdate("");
    }
  });

  // function to go to next page
  let nextPage = () => {
    // check if all the q's have been answered on this page
    if(answered.length === quizPg*5 + 5) {
      // scroll to top
      window.scrollTo(0, 0);
      //   fade to white
      quizOpacUpdate(0);
      setTimeout(function() {
        // change quizPg
        quizPgUpdate(prev => prev+1);
        // fade back in
        quizOpacUpdate(1);
        // grey out next btn
        btnStateUpdate("greyed");
        // unchecks all radio buttons
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.checked = false)
          );
      }, 500);
    }
    else {
      // display not all q's answered msg
    }
  }

  // keeps a running list of what questions have been answered, and what the answers were
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

    return archetypes[code];
  }

  let checkIE = (q) => q.axis < 3
  let checkFT = (q) => q.axis > 2 && q.axis < 5
  let checkCN = (q) => q.axis > 4

  let sum = arr => arr.reduce((prev, cur) => prev + cur.value, 0);

  return (
    <>
      <div id="main-content">
        {/*<Seo seo={homepage.attributes.seo} />*/}
        <Nav seo={{title:"Home", desc:""}} />
        <div className="home-head">
          <Spacer h="40px" />
          <h1>Climate Warriors</h1>
          <Spacer h="15px" />
          <div style={{ position:"relative" }}>
            <div className="progBarOuter"></div>
            <div className="progBarInner" style={{ width: (quizPg*11)+"%" }}></div>
          </div>
          <Spacer h="30px" />
        </div>

        <div className="quiz-con" style={{ transition: ".5s", opacity: quizOpac }}>
          <div onChange={onChangeValue} className="form">
            <>{ questionsArr[quizPg].map((q, index) => { return <Question key={index} content={profile[quizPg*5 + index].content} name={profile[quizPg*5 + index].id}/>; })}</>
            <Spacer h={50}/>
            {quizPg < 8 &&
             <>
              <Spacer h="20px" />
               <a onClick={nextPage} className={"arrow-link quizNext " + btnState}>Next</a>
              <Spacer h="50px" />
             </>
            }
            {quizPg == 8 &&
             <a href={"/" + calcResult().toLowerCase()} className="arrow-link quizNext">Get Your Result!</a>
            }
          </div>

        </div>

        <Spacer h="50px" />
        <Footer />

      </div>
    </>
  )
}

export default Quiz
