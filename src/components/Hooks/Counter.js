import React, { useState, useEffect } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
