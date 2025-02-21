import ResultsDisplay from './components/ResultsDisplay';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">AI Image & Video Processing</h1>
        <ResultsDisplay />
        <Dashboard />
      </main>
    </div>
  );
}
