import { Clock, IndianRupee, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

function ServiceListingCard({service}) {
    return(
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="mb-2 text-sm font-medium text-blue-600">
                {service.category}
            </p>
            <h2 className="text-xl font-semibold text-slate-900">
                {service.name}
            </h2>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                {service.description}
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                <UserRound size={17} />
                <span>{service.provider}</span>
            </div>
            <div className="mt-4 flex items-center gap-5 text-sm font-medium text-slate-700">
                <div className="flex items-center gap-1">
                    <IndianRupee size={16} />
                    <span>{service.price}</span>
                </div>

                <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{service.duration} min</span>
                </div>
            </div>

            <Link
               to={`/services/${service.id}`}
               className="mt-6 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700" 
            >
                View Details
            </Link>
        </div>
    );
}

export default ServiceListingCard;