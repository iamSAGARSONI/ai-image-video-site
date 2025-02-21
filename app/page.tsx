import Hero from './components/hero';
import Features from './components/features';
import Results from './components/results';


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-wider">
          Core Features
        </h2>
        <Features />
      </section>

      {/* Results Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase tracking-wider">
          Latest Results
        </h2>
        <Results />
      </section>
    </main>
  );
}
