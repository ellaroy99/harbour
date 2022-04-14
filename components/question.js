import React from "react"

const Question = ({ name, content }) => {
  return (
    <div className="question">
        <p>{name}. {content}</p>
        <div className="radio">
            <input type="radio" value={1} name={name} id={name + "1"} />
            <input type="radio" value={2} name={name} id={name + "2"} />
            <input type="radio" value={3} name={name} id={name + "3"} />
            <input type="radio" value={4} name={name} id={name + "4"} />
            <input type="radio" value={5} name={name} id={name + "5"} />

            <div className="labels">
                <label htmlFor={name + "1"}>
                    <span className="checkmark"/>
                    Strongly Disagree
                </label>
                <label htmlFor={name + "2"}>
                    <span className="checkmark"/>
                    Disagree
                </label>
                <label htmlFor={name + "3"}>
                    <span className="checkmark"/>
                    Neutral
                </label>
                <label htmlFor={name + "4"}>
                    <span className="checkmark"/>
                    Agree
                </label>
                <label htmlFor={name + "5"}>
                    <span className="checkmark"/>
                    Strongly Agree
                </label>
            </div>
        </div>
    </div>
  )
}

export default Question
