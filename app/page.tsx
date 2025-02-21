import ResultsDisplay from './components/ResultsDisplay';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">AI Image & Video Processing</h1>
          <p className="mt-4 text-lg">
            Explore our core features designed to enhance your media processing experience.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Core Features</h2>
          <Dashboard />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Results</h2>
          <ResultsDisplay />
        </section>
      </main>
    </div>
  );
}
