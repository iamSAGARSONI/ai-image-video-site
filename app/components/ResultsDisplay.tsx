'use client';

import { useEffect, useState } from 'react';

const ResultsDisplay = () => {
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    // TODO: Fetch results from backend API
  }, []);

  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      {results ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Display results here */}
        </div>
      ) : (
        <p className="text-gray-400">No results to display.</p>
      )}
    </div>
  );
};

export default ResultsDisplay;