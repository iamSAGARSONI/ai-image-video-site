const Dashboard = () => {
  const features = [
    {
      id: 1,
      title: 'Image & Video Classification',
      description: 'Images ya videos ko alag-alag categories mein label karo.',
    },
    {
      id: 2,
      title: 'Object Detection',
      description: 'Image ya video mein objects ko identify aur locate karo.',
    },
    {
      id: 3,
      title: 'Image & Video Search',
      description: 'Users ko similar content search karne do.',
    },
    {
      id: 4,
      title: 'Segmentation',
      description: 'Image/video ke specific parts (jaise foreground/background) ko extract karo.',
    },
  ];

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="p-4 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-300 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
