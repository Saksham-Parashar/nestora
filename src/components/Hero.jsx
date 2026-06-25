function Hero({ searchTerm, onSearchChange, onSearch }) {
  const handleChange = (e) => {
    onSearchChange?.(e.target.value);
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter a destination.");
      return;
    }

    onSearch?.();
  };

  return (
    <section className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden bg-slate-950 px-4 sm:px-6 lg:min-h-[600px] lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1920&auto=format&fit=crop"
          alt="Premium Luxury Villa Stay"
          className="h-full w-full scale-105 object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/55 backdrop-blur-[0.5px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md">
          ✨ Find your next adventure
        </span>

        <h1 className="mb-6 text-4xl font-black leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
          Discover Your Next <br />
          <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-amber-300 bg-clip-text text-transparent">
            Perfect Stay
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-base font-medium leading-relaxed text-slate-200 drop-shadow-sm sm:text-lg md:text-xl">
          Explore unique homes, luxury villas, and cozy retreats around the
          globe.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-2xl items-center rounded-full border border-white/10 bg-white/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-md">
          {/* Search Input */}
          <div className="flex-1 px-5">
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-rose-500">
              Where
            </label>

            <input
              type="text"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={handleChange}
              className="w-full border-none bg-transparent p-0 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            onClick={handleSearch}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all duration-200 hover:from-rose-600 hover:to-rose-700 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z"
              />
            </svg>
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
