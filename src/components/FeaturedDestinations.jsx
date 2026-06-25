function FeaturedDestinations() {
  const destinations = [
    {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop",
      count: "80+ Stays",
    },
    {
      name: "Manali",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
      count: "120+ Stays",
    },
    {
      name: "Nainital",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      count: "45+ Stays",
    },
    {
      name: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      count: "95+ Stays",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Explore Popular Destinations
        </h2>

        <p className="mt-1 font-semibold text-slate-500">
          Vibrant cities, beach retreats, and mountain getaways.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((destination) => (
          <button
            key={destination.name}
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group relative h-72 overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-rose-400">
                {destination.count}
              </span>

              <h3 className="text-xl font-extrabold">{destination.name}</h3>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDestinations;
