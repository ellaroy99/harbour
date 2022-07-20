import React from "react"

import { Divider } from "./meta/divider"
import { Spacer } from "./meta/spacer"

const Question = ({ name, content }) => {

  if (name % 5 == 0) var divLine = <></>;
  else var divLine = <>
        <Divider b={0} />
        <Spacer h={90} />
                     </>;

  return (
    <div className="question">
        <h4>{name}. {content}</h4>
        <Spacer h={1} />
        <div className="radio">
            <input type="radio" value={-3} name={name} id={name + "-3"} />
            <input type="radio" value={-2} name={name} id={name + "-2"} />
            <input type="radio" value={-1} name={name} id={name + "-1"} />
            <input type="radio" value={0} name={name} id={name + "0"} />
            <input type="radio" value={1} name={name} id={name + "1"} />
            <input type="radio" value={2} name={name} id={name + "2"} />
            <input type="radio" value={3} name={name} id={name + "3"} />

            <div className="labels">
                <label htmlFor={name + "-3"}>
                    <span className="checkmark"/>
                    <h4>Disagree</h4>
                </label>
                <label htmlFor={name + "-2"}>
                    <span className="checkmark"/>
                </label>
                <label htmlFor={name + "-1"}>
                    <span className="checkmark"/>
                </label>
                <label htmlFor={name + "0"}>
                    <span className="checkmark"/>
                </label>
                <label htmlFor={name + "1"}>
                    <span className="checkmark"/>
                </label>
                <label htmlFor={name + "2"}>
                    <span className="checkmark"/>
                </label>
                <label htmlFor={name + "3"}>
                    <span className="checkmark"/>
                    <h4>Agree</h4>
                </label>
            </div>
        </div>
        <Spacer h={10} />
        {divLine}
    </div>
  )
}

export default Question
