import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>

        <Route path="/project" element={<Layout/>}>
        <Route index element={<Project/>}/>
        </Route>

        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
