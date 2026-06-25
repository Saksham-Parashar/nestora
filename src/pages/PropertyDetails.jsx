import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import properties from "../data/properties";
import { addToWishlist } from "../utils/wishlist";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find((item) => item.id === Number(id));

  const handleWishlist = () => {
    const result = addToWishlist(property);
    alert(result.message);
  };

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="text-center p-8 rounded-2xl bg-white shadow-sm border border-slate-100 max-w-sm">
            <svg
              className="w-16 h-16 text-rose-500 mx-auto mb-4"
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
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Property Not Found
            </h2>
            <p className="text-slate-500 mb-6">
              The property you are looking for might have been removed or
              doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Title and Location Header */}
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2">
            {property.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-amber-500 fill-amber-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {property.rating || "4.9"} (124 reviews)
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 hover:underline cursor-pointer">
              <svg
                className="w-4 h-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {property.location}
            </span>
          </div>
        </div>

        {/* Premium Image Presentation */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-md mb-10">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Two-Column Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Description & Amenities */}
          <div className="lg:col-span-2 space-y-8">
            {/* Host Details */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200/70">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  Entire rental unit hosted by Nestora
                </h2>
                <p className="text-sm text-slate-500 font-semibold mt-1">
                  4 guests • 2 bedrooms • 2 beds • 1 bath
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-rose-500 to-rose-600 text-white font-bold text-lg flex items-center justify-center shadow-md">
                N
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                About this space
              </h3>
              <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line font-medium">
                {property.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="pt-8 border-t border-slate-200/70">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                What this place offers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WiFi */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10.5 10.5 0 0114.14 0M1.344 8.072a16.5 16.5 0 0121.312 0"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Free WiFi
                    </p>
                    <p className="text-xs text-slate-400 font-semibold">
                      Fast 150 Mbps speed
                    </p>
                  </div>
                </div>

                {/* Pool */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Swimming Pool
                    </p>
                    <p className="text-xs text-slate-400 font-semibold">
                      Shared outdoor pool
                    </p>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Free Parking
                    </p>
                    <p className="text-xs text-slate-400 font-semibold">
                      On premises parking
                    </p>
                  </div>
                </div>

                {/* Kitchen */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Equipped Kitchen
                    </p>
                    <p className="text-xs text-slate-400 font-semibold">
                      Cook your own meals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-100/50">
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <span className="text-2xl font-extrabold text-slate-900">
                    ₹{Number(property.price).toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-slate-500 font-semibold">
                    {" "}
                    / night
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
                  <svg
                    className="w-4 h-4 text-amber-500 fill-amber-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>{property.rating || "4.9"}</span>
                </div>
              </div>

              {/* Aesthetic Dates Section */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6 bg-slate-50">
                <div className="grid grid-cols-2 border-b border-slate-200">
                  <div className="p-3 border-r border-slate-200">
                    <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                      Check-in
                    </label>
                    <span className="text-sm font-semibold text-slate-800">
                      12/07/2026
                    </span>
                  </div>
                  <div className="p-3">
                    <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                      Checkout
                    </label>
                    <span className="text-sm font-semibold text-slate-800">
                      19/07/2026
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-0.5">
                    Guests
                  </label>
                  <span className="text-sm font-semibold text-slate-800">
                    2 guests
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleWishlist}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-base shadow-md shadow-rose-500/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4 fill-current text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add to Wishlist
                </button>

                <button className="w-full py-3.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-sm transition-all duration-200">
                  Reserve Property
                </button>
              </div>

              <p className="text-center text-xs text-slate-400 font-medium mt-4">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
