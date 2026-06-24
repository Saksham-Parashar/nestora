import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import properties from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find((item) => item.id === Number(id));

  const addToWishlist = () => {
    const existing = JSON.parse(localStorage.getItem("wishlist")) || [];

    const alreadyExists = existing.find((item) => item.id === property.id);

    if (!alreadyExists) {
      existing.push(property);

      localStorage.setItem("wishlist", JSON.stringify(existing));
    }

    alert("Added to Wishlist ❤️");
  };

  if (!property) {
    return <div className="text-center mt-20">Property Not Found</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-[500px] object-cover rounded-2xl"
        />

        <h1 className="text-4xl font-bold mt-8">{property.title}</h1>

        <p className="text-gray-500 text-lg mt-2">{property.location}</p>

        <p className="text-rose-500 font-bold text-2xl mt-4">
          ₹{property.price}/night
        </p>

        <button
          onClick={addToWishlist}
          className="mt-4 bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600"
        >
          ❤️ Add to Wishlist
        </button>

        <p className="mt-6 text-lg">{property.description}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Amenities</h2>

          <ul className="space-y-2">
            <li>✓ Free WiFi</li>
            <li>✓ Swimming Pool</li>
            <li>✓ Free Parking</li>
            <li>✓ Fully Equipped Kitchen</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
