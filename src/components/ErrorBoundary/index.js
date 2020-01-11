import React from "react"
import ErrorHandler from "./ErrorHandler"
import BuggyCounter from "./BuggyCounter"

export default function ErrorBoundary() {
  return (
    <div>
      <ErrorHandler>
        <h2>Error handled</h2>
        <BuggyCounter />
      </ErrorHandler>
      <h2>Error unhandled</h2>
      <BuggyCounter />
    </div>
  )
}
