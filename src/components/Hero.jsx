import { useState } from "react";

function Hero({ searchTerm, onSearchChange, onSearch }) {
  const [localSearch, setLocalSearch] = useState("");
  const value = searchTerm !== undefined ? searchTerm : localSearch;

  const handleChange = (e) => {
    const val = e.target.value;
    setLocalSearch(val);
    if (onSearchChange) onSearchChange(val);
    if (onSearch) onSearch(val);
  };

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Premium Background Image with Subtle Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop"
          alt="Premium Luxury Villa Stay"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[0.5px] bg-gradient-to-b from-black/60 via-black/25 to-black/55" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-md mb-6 uppercase tracking-widest">
          ✨ Find your next adventure
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6">
          Discover Your Next <br />
          <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-amber-300 bg-clip-text text-transparent">
            Perfect Stay
          </span>
        </h1>

        <p className="max-w-2xl text-slate-200 text-base sm:text-lg md:text-xl font-medium mb-10 leading-relaxed drop-shadow-sm">
          Explore unique homes, luxury villas, and cozy retreats around the
          globe.
        </p>

        {/* Integrated Premium Search Bar */}
        <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl shadow-black/30 border border-white/10 flex flex-col md:flex-row items-center gap-2 md:gap-0 transition-all hover:bg-white duration-300">
          {/* Destination Search Input */}
          <div className="w-full md:w-5/12 px-4 py-2 text-left flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
            <label className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-0.5">
              Where
            </label>
            <input
              type="text"
              placeholder="Search destinations..."
              value={value}
              onChange={handleChange}
              className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-0 p-0 border-none"
            />
          </div>

          {/* Aesthetic Check In */}
          <div className="hidden md:flex w-full md:w-3/12 px-4 py-2 text-left flex-col justify-center border-r border-slate-100 cursor-pointer hover:bg-slate-50 rounded-full transition-colors duration-200">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
              Check in
            </label>
            <span className="text-sm font-semibold text-slate-700">
              Add dates
            </span>
          </div>

          {/* Aesthetic Guests */}
          <div className="hidden md:flex w-full md:w-3/12 px-4 py-2 text-left flex-col justify-center cursor-pointer hover:bg-slate-50 rounded-full transition-colors duration-200">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
              Who
            </label>
            <span className="text-sm font-semibold text-slate-700">
              Add guests
            </span>
          </div>

          {/* Search CTA Button */}
          <button className="w-full md:w-auto px-6 py-3.5 rounded-xl md:rounded-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 active:scale-95 transition-all duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z"
              />
            </svg>
            <span>Search</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
