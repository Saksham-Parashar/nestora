import Navbar from "../components/Navbar";

function Wishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">My Wishlist ❤️</h1>

        {wishlist.length === 0 ? (
          <p>No properties saved yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((property) => (
              <div
                key={property.id}
                className="shadow-lg rounded-xl overflow-hidden"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-4">
                  <h2 className="text-xl font-semibold">{property.title}</h2>

                  <p>{property.location}</p>

                  <p className="text-rose-500 font-bold mt-2">
                    ₹{property.price}/night
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
  