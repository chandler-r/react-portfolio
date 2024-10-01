import { Link } from 'react-router-dom'
import Headshot from '../../assets/images/headshot.jpg'
import './index.scss'

const About = () =>{
    return (
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            Who is Chandler Reyes?
          </h1>
          <img src={Headshot} alt="developer" />
        </div>
      </div>
    )
}

export default About