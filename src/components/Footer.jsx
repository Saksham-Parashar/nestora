import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-rose-500"
          >
            Nestora
          </Link>

          <p className="mt-2 text-sm font-semibold text-slate-500">
            Discover premium stays around the world.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-6 text-sm font-bold text-slate-600">
            <Link to="/" className="transition-colors hover:text-rose-500">
              Home
            </Link>

            <Link
              to="/wishlist"
              className="transition-colors hover:text-rose-500"
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-slate-200 py-6 text-center text-xs font-semibold text-slate-500">
        © 2026 Nestora. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}

export default Footer;
