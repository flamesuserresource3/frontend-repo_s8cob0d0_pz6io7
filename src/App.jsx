import Nav from './components/Nav';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} BIYOM — Model Portfolio. Built with care.
        </footer>
      </main>
    </div>
  );
}

export default App;
