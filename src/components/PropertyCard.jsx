import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`} className="group block">
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm hover:shadow-xl hover:border-slate-200/60 transition-all duration-300 cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3] rounded-xl bg-slate-50">
          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-850 text-xs font-bold shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5 text-amber-500"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.6 3.1-.219 4.674c-.041.83.85 1.478 1.571 1.028L10 15.685l4.002 2.433c.722.45 1.612-.2 1.57-1.029l-.218-4.674 3.6-3.1c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <span>{property.rating || "4.9"}</span>
          </div>
        </div>

        {/* Details Container */}
        <div className="px-1 pb-1">
          <div className="flex flex-col gap-1">
            {/* Title */}
            <h2 className="text-base font-bold text-slate-850 line-clamp-1 group-hover:text-rose-500 transition-colors duration-200">
              {property.title}
            </h2>

            {/* Location */}
            <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5 text-slate-400"
              >
                <path
                  fillRule="evenodd"
                  d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                  clipRule="evenodd"
                />
              </svg>
              {property.location}
            </p>

            {/* Price / Night */}
            <div className="mt-2 pt-2 border-t border-slate-50 flex items-baseline gap-1">
              <span className="text-lg font-extrabold text-rose-500">
                ₹{property.price}
              </span>
              <span className="text-xs font-medium text-slate-500">
                / night
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
