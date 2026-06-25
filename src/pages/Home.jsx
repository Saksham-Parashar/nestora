import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PropertyCard from "../components/PropertyCard";
import properties from "../data/temp";
import FeaturedDestinations from "../components/FeaturedDestinations";
import Footer from "../components/Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties.filter((property) => {
    const search = searchTerm.toLowerCase();

    return (
      property.location.toLowerCase().includes(search) ||
      property.title.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />

      {/* Hero section now manages search state integration */}
      <Hero
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearch={() => {
          document
            .getElementById("property-list")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <FeaturedDestinations />

      {/* Main properties listing */}
      <div
        id="property-list"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Places to Stay
            </h2>
            <p className="text-slate-500 font-semibold mt-1">
              Explore premium rentals handpicked for your next stay.
            </p>
          </div>

          {/* Active search indicator / Clear button */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="self-start sm:self-auto text-sm font-bold text-rose-500 hover:text-rose-600 flex items-center gap-1.5 transition-colors duration-200"
            >
              Clear search
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-50 text-xs">
                ✕
              </span>
            </button>
          )}
        </div>

        {/* Listings Display */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-md mx-auto">
            <svg
              className="w-16 h-16 text-slate-300 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-bold text-slate-800 mb-1">
              No stays match your search
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Try searching for a different destination or resetting your
              filters.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-5 py-2.5 rounded-full bg-rose-500 text-white text-sm font-bold shadow-md shadow-rose-500/10 hover:bg-rose-600 transition-all duration-200 active:scale-95"
            >
              Show all properties
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
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
