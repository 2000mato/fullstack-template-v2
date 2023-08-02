import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
  const [count, setCount] = useState(0)

  return (
    <div className='footer'>
      <h1 className='footer-text'>Footer</h1>
    </div>
  )
}

export default Footer