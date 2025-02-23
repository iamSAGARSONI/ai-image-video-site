'use client';
import { useEffect, useState } from 'react';

type Result = {
  id: number;
  title: string;
  description: string;
};

const ResultsDisplay = () => {
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const data: Result[] = [
          { id: 1, title: 'Classification Result', description: 'Image classified under Category A.' },
          { id: 2, title: 'Object Detection', description: 'Detected an object in the image.' },
          { id: 3, title: 'Segmentation', description: 'Foreground and background separated.' },
        ];
        setResults(data);
      } catch (err) {
        setError('Failed to fetch results.');
      } finally {
        setLoading(false);
      }
    }, 1500);
  }, []);

  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg">
      {loading ? (
        <p className="text-gray-400">Loading results...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : results && results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((result) => (
            <div key={result.id} className="p-4 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">{result.title}</h3>
              <p className="text-gray-300">{result.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No results to display.</p>
      )}
    </div>
  );
};

export default ResultsDisplay;
