export default function Features() {
    const features = [
      {
        id: 1,
        title: 'AI & ML for Processing',
        description: 'Utilizing cutting-edge models to analyze and label content.',
      },
      {
        id: 2,
        title: '32 Models Running',
        description: 'High-performance classification, detection, and segmentation.',
      },
      {
        id: 3,
        title: 'Real-Time Analysis',
        description: 'Get instant insights for both images and videos.',
      },
      {
        id: 4,
        title: 'High-Quality Results',
        description: 'Accurate detection and classification for any media type.',
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  }
  