import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-rose-600 shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-white"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            <span className="text-2xl font-black bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent tracking-tight">
              Nestora
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <Link
              to="/"
              className={`relative py-2 transition-colors duration-350 ${
                isActive("/")
                  ? "text-rose-500 font-bold"
                  : "text-slate-600 hover:text-rose-500"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 rounded-full" />
              )}
            </Link>

            <Link
              to="/wishlist"
              className={`relative py-2 transition-colors duration-350 ${
                isActive("/wishlist")
                  ? "text-rose-500 font-bold"
                  : "text-slate-600 hover:text-rose-500"
              }`}
            >
              Wishlist
              {isActive("/wishlist") && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 rounded-full" />
              )}
            </Link>
          </div>

          {/* User Options */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-bold text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-full transition-colors duration-250 cursor-pointer">
              Nestora your home
            </span>
            <div className="flex items-center gap-3 border border-slate-200 rounded-full p-2 pl-3 hover:shadow-md transition-shadow duration-300 cursor-pointer bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 text-slate-500"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-slate-200 to-slate-350 flex items-center justify-center text-xs font-bold text-slate-600 shadow-inner">
                N
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-64 opacity-100 border-t border-slate-100"
            : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
              isActive("/")
                ? "bg-rose-50 text-rose-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-rose-500"
            }`}
          >
            Home
          </Link>
          <Link
            to="/wishlist"
            onClick={() => setIsOpen(false)}
            className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
              isActive("/wishlist")
                ? "bg-rose-50 text-rose-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-rose-500"
            }`}
          >
            Wishlist
          </Link>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-4">
            <span className="text-sm font-semibold text-slate-600">
              Nestora your home
            </span>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">
              N
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
