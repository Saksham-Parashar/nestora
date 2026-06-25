import { Link } from "react-router-dom";

function PropertyCard({ property, showRemoveButton = false, onRemove }) {
  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (onRemove) {
      onRemove(property.id);
    }
  };

  return (
    <Link to={`/property/${property.id}`} className="group block">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm hover:shadow-xl hover:border-slate-200/60 transition-all duration-300 cursor-pointer">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3] rounded-xl bg-slate-50">
          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Rating */}
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-slate-900 shadow-md backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.1-.219 4.674c-.041.83.85 1.478 1.571 1.028L10 15.685l4.002 2.433c.722.45 1.612-.2 1.57-1.029l-.218-4.674 3.6-3.1c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>

            {property.rating}
          </div>
        </div>

        {/* Details */}
        <div className="px-1 pb-1">
          <h2 className="line-clamp-1 text-base font-bold text-slate-900 transition-colors group-hover:text-rose-500">
            {property.title}
          </h2>

          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
            📍 {property.location}
          </p>

          <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
            <div>
              <span className="text-lg font-extrabold text-rose-500">
                ₹{Number(property.price).toLocaleString("en-IN")}
              </span>

              <span className="ml-1 text-xs text-slate-500">/ night</span>
            </div>

            {showRemoveButton && (
              <button
                onClick={handleRemove}
                className="rounded-lg bg-red-50 px-3 py-1 text-xs font-bold text-red-600 transition hover:bg-red-100"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
