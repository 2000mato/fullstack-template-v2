import { useState } from 'react'
import '../styles/Header.css'


function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className='header'>
         <h1 className='header-text'>Header</h1>
    </div>
  )
}

export default Header