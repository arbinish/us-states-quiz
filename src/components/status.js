
import { useRef, useEffect } from 'react';

function Status({ prop }) {

  let renderCount = useRef(0)

  useEffect(() => {
    renderCount.current += 1
    console.log(`Status rendered ${renderCount.current} times`)
  })


  const className = prop === true  ? "status status_ok" : "status"

  if (prop === null) {
    return (
      <></>
    )
  }
  const logo = prop === true ? "✓" : "✗"
  return (
      <label className={className}>{logo}</label>
  )
}

export default Status;
