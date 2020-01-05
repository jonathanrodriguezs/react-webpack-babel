import React from "react"
import WindowWidth from "./WindowWidth"

function RenderProp(props) {
  return (
    <WindowWidth>
      {width =>
        width > 900
          ? <p>Your width is more than 900px</p>
          : <p>What a small screen :P</p>
      }
    </WindowWidth>
  )
}

export default RenderProp
