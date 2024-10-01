import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/lett_C.png'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          handler
          <br />
          Software Developer
        </h1>

        <h2>Backend Dev / Python Expert / Music Producer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
