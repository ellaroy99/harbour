import React from "react"

const Question = ({ name, content }) => {
  return (
    <div className="question">
        <p>{name}. {content}</p>
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
                    <p>Disagree</p>
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
                    <p>Agree</p>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Question
