import React, { useState } from 'react'

export default function Switch() {
  const [status, setStatus] = useState(false)

  const handleClick = () => {
    console.log('Before click:', status)
    setStatus(!status)
    console.log('After click:', status)
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {status ? 'Turn off' : 'Turn On'}
      </button>
      <br></br>
      <br></br>
      <p>Status: {status ? 'On' : 'Off'}</p>
    </div>
  )
}
