import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LowTaperFade from './components/LowTaperFade'
import About from './components/content/About'
import Tech from './components/content/Tech'
import Skills from './components/content/Skills'
import Projects from './components/content/Projects'
import Worm from './components/Worm'
import Construction from './components/content/Construction'

function Nav() {
  return (
    <div className="flex flex-col items-center mx-auto w-fit">
       <Link to="/" className="flex w-full bg-base-200">
        {"beanfrog.xyz".split("").map((char, index) => (
          <p key={index} className="flex-1 text-center">{char}</p>
        ))}
      </Link>
      <div className="flex flex-row justify-center items-center">
        <Link to="/about" className="rounded-bl-lg btn">about</Link>
        <Link to="/tech" className="btn">tech</Link>
        <Link to="/skills" className="btn">skills</Link>
        <Link to="/projects" className="btn">projects</Link>
        <Link to="/blog" className="rounded-br-lg btn">blog</Link>
      </div>
    </div>
  );
}




function Home() {
  return (
    <div className="flex flex-col items-center p-6 px-12 w-full h-full">
      <h1 className="text-xl font-bold">Home</h1>
      <p className="text-lg">Welcome! Take a look around, or play with the worm (he likes chasing the cursor, but he has ADHD and will start to wander if you stop moving it)</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <span className="z-0">
        <Worm />
      </span>
      <span className="fixed w-screen h-fit">
        <Nav />
      </span>
      <LowTaperFade>
      <div className="z-20 p-6 h-3/5 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-30 transition lg:w-3/5 md:w-3/5 sm:w-screen">

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Construction />} />
        </Routes>
        </div>
      </LowTaperFade>
    </Router>
  )
}

export default App
