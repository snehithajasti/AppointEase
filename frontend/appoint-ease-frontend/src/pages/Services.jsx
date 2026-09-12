import { useState } from "react";
import { Search } from "lucide-react";
import { services } from "../data/services";
import ServiceListingCard from "../components/ServiceListingCard";
import { Link } from "react-router-dom";

function Services() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(services.map((service) => service.category)),
    ];

    const filteredServices = services.filter((service) => {

        const search = searchTerm.toLowerCase();

        const matchesSearch = 
           service.name.toLowerCase().includes(search) ||
           service.category.toLowerCase().includes(search) ||
           service.provider.toLowerCase().includes(search);

        const matchesCategory = 
          selectedCategory === "All" ||
          service.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return(
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-10">
                    <p className="mb-2 text-sm font-semibold text-blue-600">
                        APPOINTEASE SERVICES
                    </p>

                    <h1 className="text-4xl font-bold text-slate-900">
                        Find the Right Service
                    </h1>

                    <p className="mt-3 max-w-2xl text-slate-600">
                        Explore services from trusted professionals and book an appointment at a time that works for you.
                    </p>
                </div>
                <div className="mb-8">
                    <div className="relative max-w-xl">
                        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                           type="text" 
                           placeholder="Search for a service..."
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                </div>
                <div className="mb-10 flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                           key={category}
                           onClick={() => setSelectedCategory(category)}
                           className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                            selectedCategory === category
                              ? "bg-blue-600 text-white shadow-sm"
                              : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                           }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="mb-5">
                    <p className="text-sm text-slate-500">
                        Showing {filteredServices.length} service
                        {filteredServices.length !== 1 && "s"}
                    </p>
                </div>

                {filteredServices.length > 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredServices.map((service) => (
                            <ServiceListingCard key={service.id} service={service} />
                        ))}
                    </div>
                ):(
                    <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
                        <h2 className="text-xl font-semibold text-slate-900">
                            No services found
                        </h2>
                        <p className="mt-2 text-slate-500">
                            Try searching for a different service or category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Services;