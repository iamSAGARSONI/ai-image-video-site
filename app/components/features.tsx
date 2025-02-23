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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col justify-center text-center items-center  bg-gray-800 p-6 rounded-lg shadow-lg h-[300px] hover:shadow-xl transition-shadow "
          >
            <div className="col-12">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            </div>
            
            <div className="col-12">
            <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  