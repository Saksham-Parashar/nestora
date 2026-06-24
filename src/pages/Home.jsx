import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/properties";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Footer from "../components/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Navbar />

      <Hero />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <FeaturedDestinations />

      <div className="max-w-7xl mx-auto px-6 pb-12">
        {filteredProperties.length === 0 ? (
          <p className="text-center text-gray-500">No properties found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
