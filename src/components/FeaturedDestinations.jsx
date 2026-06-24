function FeaturedDestinations() {
  const destinations = [
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    },
    {
      name: "Manali",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    },
    {
      name: "Nainital",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      name: "Mumbai",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.name}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="h-64 w-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-xl font-semibold">{destination.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDestinations;
