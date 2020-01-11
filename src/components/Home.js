import React from "react"
import RenderProp from "./RenderProp"
import Counter from "./Hooks/Counter"
import ErrorBoundary from "./ErrorBoundary"

export default function Home() {
  return (
    <div>
      <h1>Render prop example</h1>
      <RenderProp />
      <h1>Hook counter</h1>
      <Counter />
      <h1>Error boundary</h1>
      <ErrorBoundary />
    </div>
  )
}
