import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
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

function RandomQuote() {
  const quotes = [
    "\"I'm schizophrenic, and so am I\" - Terry Davis",
    "\"If I was a dog, I would bark\" - Terry Davis",
    "\"Intelligence is the ability to avoid doing work, yet getting the work done\" - Linus Torvalds",
    "\"If you're not scared, you're not going fast enough\" - Ken Block",
    "\"I'm gonna dip this potato in some crushed up Vicodin, and there's nobody who can stop me\" - Matt Damon (as Mark Watney)",
    "\"The fentanyl got me moving like a claymation figure\" - Dracula Flow 5",
    "\"SCHLOPSCHLOPSCHLOPSCHLOPSCHLOPSCHLOP\" - Dog drinking water"
  ];

  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const reRollQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote); // Prevent picking the same quote
    setQuote(newQuote);
  };

  return (
    <div className="p-4 w-full max-w-md bg-opacity-10 rounded-lg border border-white border-opacity-30 shadow-md transition bg-primary card">
      <div className="flex flex-col">
        <p className="ml-0">{quote.split(" - ")[0].trim()}</p>
        <p className="ml-4">- {quote.split(" - ")[1].trim()}</p>
      </div>
      <span className="flex mt-auto w-full h-fit flex-start">
        <button 
          className="btn btn-xs btn-ghost w-fit"
          onClick={reRollQuote}
        >
          Re-roll
        </button>
      </span>
    </div>
  );
}
function RandomSong() {
  const songs = [
    { name: "Bayside (Radio Edit)", artist: "Obskur", genre: "House", songlinkId: "1563909564" },
    { name: "YYZ", artist: "Rush", genre: "Rock", songlinkId: "1440798890"},
    { name: "Wax Wings", artist: "Periphery", genre: "Metal", songlinkId: "1657054035"},
    { name: "Vanish Canvas", artist: "Erra, Courtney LaPlante", genre: "Metal", songlinkId: "1761398338"},
    { name: "Landmine", artist: "Polaris", genre: "Metal", songlinkId: "1488455420"},
    { name: "Aerials", artist: "System of a Down", genre: "Metal", songlinkId: "273714765"},
    { name: "Hoe Cakes", artist: "MF DOOM", genre: "Rap", songlinkId: "1558162299"},
    { name: "One Beer", artist: "MF DOOM", genre: "Rap", songlinkId: "1516751166"},
    { name: "dashstar* - VIP", artist: "Knock2", genre: "EDM", songlinkId: "1662738341"},
    { name: "REWiND", artist: "Knock2", genre: "EDM", songlinkId: "1663929812"},
    { name: "Livin on a Prayer", artist: "Bon Jovi", genre: "Rock", songlinkId: "1422955211"},
    { name: "Black Hole Sun", artist: "Soundgarden", genre: "Rock", songlinkId: "1440811686"},
    { name: "Sultans of Swing (Live)", artist: "Dire Straits", genre: "Rock", songlinkId: "1724864067"},
    { name: "Money for Nothing (Single Edit)", artist: "Dire Straits", genre: "Rock", songlinkId: "1623501116"},
    { name: "Hail to the King", artist: "Avenged Sevenfold", genre: "Metal", songlinkId: "672046422"},
    { name: "When I'm Gone", artist: "3 Doors Down", genre: "Rock", songlinkId: "1440739780"},
    { name: "Youngest Daughter", artist: "Superheaven", genre: "Rock", songlinkId: "1493034241"},
    { name: "Couple Guinness", artist: "Selecta J-Man, Sukuward", genre: "DnB", songlinkId: "1555061163"},
    { name: "My Coffee (Radio Edit)", artist: "Noah Loco", genre: "House", songlinkId: "1786133403"},
    { name: "Out The Fire", artist: "Franky Rizardo, Ros T, Eunice Collins", genre: "House", songlinkId: "1567564958"},

  ];
  
  const [song, setSong] = useState(songs[Math.floor(Math.random() * songs.length)]);

  const reRollSong = () => {
    let newSong;
    do {
      newSong = songs[Math.floor(Math.random() * songs.length)];
    } while (newSong.songlinkId === song.songlinkId);
    setSong(newSong);
  };

  return (
    <div className="p-4 pb-2 w-full max-w-md bg-opacity-10 rounded-lg border border-white border-opacity-30 shadow-md transition bg-primary card">
      <a
        href={`https://song.link/i/${song.songlinkId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <svg
          height="70px"
          width="70px"
          viewBox="0 0 56 56"
          stroke="#ffffff"
          fill="#00000000"
          className="pr-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g> 
            <circle cx="27.667" cy="27.667" r="3.618" /> 
            <path d="M27.667,0C12.387,0,0,12.387,0,27.667s12.387,27.667,27.667,27.667s27.667-12.387,27.667-27.667 S42.947,0,27.667,0z M17.118,6.881c3.167-1.61,6.752-2.518,10.549-2.518c0.223,0,0.444,0.003,0.665,0.009 c0.367,0.01,0.619,0.922,0.564,2.025l-0.282,5.677c-0.055,1.103-0.289,1.986-0.523,1.979c-0.141-0.004-0.282-0.006-0.424-0.006 c-1.997,0-3.894,0.43-5.603,1.202c-1.007,0.455-2.212,0.184-2.774-0.767l-2.896-4.897C15.832,8.634,16.133,7.382,17.118,6.881z M15.986,17.295l-4.278-3.742c-0.832-0.727-0.918-1.994-0.119-2.756c0.019-0.018,0.037-0.035,0.057-0.053 c0.802-0.76,2.059-0.605,2.737,0.266l3.494,4.484c0.679,0.871,0.837,1.889,0.391,2.314C17.821,18.235,16.818,18.022,15.986,17.295 z M17.877,27.667c0-5.407,4.383-9.79,9.79-9.79s9.79,4.383,9.79,9.79s-4.383,9.79-9.79,9.79S17.877,33.074,17.877,27.667z M38.17,48.476c-3.156,1.596-6.725,2.495-10.503,2.495c-0.248,0-0.495-0.004-0.741-0.011c-0.409-0.013-0.692-0.929-0.632-2.032 l0.31-5.676c0.061-1.103,0.322-1.981,0.586-1.972c0.158,0.005,0.317,0.008,0.477,0.008c1.834,0,3.582-0.362,5.179-1.018 c1.022-0.42,2.275-0.144,2.877,0.782l3.101,4.77C39.426,46.747,39.156,47.977,38.17,48.476z M43.619,44.656 c-0.766,0.72-2.005,0.551-2.703-0.305l-3.59-4.407c-0.698-0.856-0.876-1.848-0.435-2.255c0.442-0.407,1.443-0.179,2.274,0.549 l4.28,3.744C44.277,42.709,44.386,43.936,43.619,44.656z" />
          </g>
        </svg>
        <div>
          <p className="text-lg font-bold">{song.name}</p>
          <p className="text-gray-300 text-md">{song.artist}</p>
          <p className="text-sm text-gray-400">{song.genre}</p>
        </div>
      </a>
      <span className="flex w-full h-fit flex-start">
        <button 
          className="btn btn-xs btn-ghost w-fit"
          onClick={reRollSong}
        >
          Re-roll
        </button>
      </span>
    </div>
  );
}  


function Home() {
  return (
    <div className="flex flex-col items-center p-6 px-12 w-full h-full">
      <h1 className="text-xl font-bold">Home</h1>
      <p className="text-lg">Welcome! Take a look around, play with the worm, or check out some quotes and songs I like</p>
      <div className="flex flex-row p-12 pb-6 space-x-4 w-full">
          <RandomQuote />
          <RandomSong />
      </div>
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
