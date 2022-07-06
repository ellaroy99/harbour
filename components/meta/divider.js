import React from "react"

export const Divider = (t, b, w) => {
  return (
    <svg style={{ top: t.t, bottom: t.b, width: t.w }} className="divider" width="100%" height="2" viewBox="0 0 1740 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1" x2="1740" y2="1" stroke="black" strokeWidth=".5"/>
      </svg>
  )
}
