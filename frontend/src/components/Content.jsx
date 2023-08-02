import { useState } from 'react'
import '../styles/Content.css'


function Content() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <h1 className='text'>content</h1>
    </div>
  )
}

export default Content
