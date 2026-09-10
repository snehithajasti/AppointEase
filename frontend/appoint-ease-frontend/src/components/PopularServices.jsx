import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

function PopularServices() {
    return(
        <section className="bg-white px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                            Explore
                        </p>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Popular Services
                        </h2>
                        <p className="mt-4 text-base leading-7 text-slate-500">
                            Find the right service for your needs and book a convenient appointment with trusted providers.
                        </p>
                    </div>
                    <button className="inline-flex items-center gap-2 self-start text-sm font-semibold text-sky-600 transition hover:text-sky-700 sm:self-auto">
                        View all services
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard 
                           key={service.id}
                           service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PopularServices;