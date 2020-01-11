import React from "react"
import RenderProp from "./RenderProp"
import Counter from "./Hooks/Counter"

export default function Home() {
  return (
    <div>
      <h1>Render prop example</h1>
      <RenderProp />
      <h1>Hook counter</h1>
      <Counter />
    </div>
  )
}
