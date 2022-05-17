import './App.css';
import Header from './components/header/Header';
import Hero from './pages/hero/Hero';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import { useState } from 'react';

function App() {
  const [focus, setFocus] = useState(true);

  const contentFocus = () => {
    setFocus(true);
  };

  return (
    <div className='App'>
      <Header focus={focus} setFocus={setFocus} />
      <main onClick={contentFocus} className='content blur'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
