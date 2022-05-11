import './App.css';
import Header from './components/header/Header';
import Hero from './pages/hero/Hero';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='content'>
        <Hero />
      </main>
    </div>
  );
}

export default App;
