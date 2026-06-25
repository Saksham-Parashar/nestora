import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyCard";
import {
  getWishlist,
  removeFromWishlist,
  clearWishlist,
} from "../utils/wishlist";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(getWishlist());
  }, []);

  const handleRemove = (id) => {
    const updatedWishlist = removeFromWishlist(id);
    setWishlist(updatedWishlist);
  };

  const handleClearWishlist = () => {
    clearWishlist();
    setWishlist([]);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500 shadow-sm border border-rose-100">
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                My Wishlist
              </h1>

              <p className="text-sm font-semibold text-slate-500">
                {wishlist.length}{" "}
                {wishlist.length === 1 ? "property" : "properties"} saved
              </p>
            </div>
          </div>

          {wishlist.length > 0 && (
            <button
              onClick={handleClearWishlist}
              className="self-start rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-100"
            >
              Clear Wishlist
            </button>
          )}
        </div>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="text-center py-20 px-4 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-md mx-auto">
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-50 text-rose-500 mb-6">
              <svg
                className="w-10 h-10 fill-current"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-2">
              Your wishlist is empty
            </h3>

            <p className="text-slate-500 text-sm mb-8 max-w-xs mx-auto font-medium">
              Save your favourite stays and they'll appear here.
            </p>

            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-sm shadow-md transition-all duration-200"
            >
              Explore Properties
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {wishlist.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  showRemoveButton={true}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
