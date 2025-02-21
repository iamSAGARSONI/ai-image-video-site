const Dashboard = () => {
  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">Widget 1</h3>
          <p className="text-gray-300">Sample data for widget 1.</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">Widget 2</h3>
          <p className="text-gray-300">Sample data for widget 2.</p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">Widget 3</h3>
          <p className="text-gray-300">Sample data for widget 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
