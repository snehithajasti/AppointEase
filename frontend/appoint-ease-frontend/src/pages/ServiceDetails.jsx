import { useParams, Link } from "react-router-dom";
import { Clock, IndianRupee, UserRound, ArrowLeft } from "lucide-react";
import { services } from "../data/services";

function ServiceDetails() {
    const { id } = useParams();
    
    const service = services.find(
        (service) => service.id === Number(id)
    );

    if(!service){
        return(
            <div className="min-h-screen bg-slate-50 px-6 py-16">
                <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 text-center shadow-sm">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Service Not Found
                    </h1>
                    <p className="mt-3 text-slate-500">
                        The service you are looking for does not exist.
                    </p>
                    <Link to="/services" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                      <ArrowLeft size={18} />
                      Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return(
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-5xl px-6 py-16">
                <Link
                   to="/services"
                   className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600"
                >
                   <ArrowLeft size={18} />
                   Back to Services
                </Link>
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-12 text-white">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-100">
                            {service.category}
                        </p>
                        <h1 className="text-4xl font-bold">
                            {service.name}
                        </h1>
                        <p className="mt-4 max-w-2xl text-blue-100">
                            {service.description}
                        </p>
                    </div>
                    <div className="px-8 py-10">
                        <div className="grid gap-6 sm:grid-cols-3">
                            <div className="rounded-2xl bg-slate-50 p-5">
                                <UserRound className="mb-3 text-blue-600" size={24} />
                                <p className="text-sm text-slate-500">
                                    Provider
                                </p>
                                <p className="mt-1 font-semibold text-slate-900">
                                    {service.provider}
                                </p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-5">
                                <IndianRupee className="mb-3 text-blue-600" size={24} />
                                <p className="text-sm text-slate-500">
                                    Price
                                </p>
                                <p className="mt-1 font-semibold text-slate-900">
                                    {service.price}
                                </p>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-5">
                                <Clock className="mb-3 text-blue-600" size={24} />
                                <p className="text-sm text-slate-500">
                                    Duration
                                </p>
                                <p className="mt-1 font-semibold text-slate-900">
                                    {service.duration} minutes
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 border-t border-slate-200 pt-8">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-slate-900">
                                        Ready to book?
                                    </h2>
                                    <p className="mt-1 text-sm text-slate-500">
                                        Choose a convenient date and time for your appointment.
                                    </p>
                                </div>
                                <Link 
                                   to={`/services/${service.id}/book`}
                                   className="rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                                >
                                    Book Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceDetails;