'use client';

import { useEffect, useState } from 'react';

type Result = {
  id: number;
  title: string;
  description: string;
};

export default function Results() {
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate an API call
    const timer = setTimeout(() => {
      try {
        const data: Result[] = [
          {
            id: 1,
            title: 'Classification Result',
            description: 'Classified under Category A',
          },
          {
            id: 2,
            title: 'Object Detection',
            description: 'Found multiple objects in the frame',
          },
          {
            id: 3,
            title: 'Segmentation',
            description: 'Foreground successfully separated from background',
          },
        ];
        setResults(data);
      } catch (err) {
        setError('Failed to fetch results.');
      } finally {
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Loading results...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {results && results.length > 0 ? (
        results.map((result) => (
          <div
            key={result.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
            <p className="text-gray-300">{result.description}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400 w-full">
          No results to display.
        </p>
      )}
    </div>
  );
}
