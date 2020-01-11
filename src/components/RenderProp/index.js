import React from "react"
import WindowWidth from "./WindowWidth"

function RenderProp(props) {
  return <WindowWidth>{width => <p>Your width is {width}px</p>}</WindowWidth>
}

export default RenderProp
