import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Scanner } from './components/Scanner';
import { TechSpecs } from './components/TechSpecs';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <Hero />
      <Features />
      <Scanner />
      <TechSpecs />
      <Footer />
    </div>
  );
}

export default App;
