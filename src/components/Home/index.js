import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LogoTitle from '../../assets/images/lett_C.png'
import './index.scss'

const Home = () => {
  const [role, setRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = ['Software Developer', 'Python Enthusiast', 'Music Producer']
  const text = roles[loopNum % roles.length]

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && role === text) {
        // Pause before deletion
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }

      if (isDeleting && role === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        return
      }

      const dx = isDeleting ? -1 : 1
      const newRole = text.substring(0, role.length + dx)
      setRole(newRole)
      setTypingSpeed(isDeleting ? 50 : 150)
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [role, isDeleting, loopNum, text, typingSpeed])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Chandler Reyes
          <br />
        </h1>

        <h2>
          <span className="wrap">{role}</span>
          <span className="cursor">|</span>
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
