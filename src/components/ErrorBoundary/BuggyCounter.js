import React, { useState } from "react"

export default function BuggyCounter() {
  const [count, setCount] = useState(0)
  if (count === 5) throw Error("Integer overflow")

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
