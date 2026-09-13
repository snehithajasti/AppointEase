import { Plus, X } from "lucide-react";
import { services } from "../data/services";
import { useState } from "react";

function ProviderServices() {

    const [showForm, setShowForm] = useState(false);

    const [providerServices, setProviderServices] = useState(() => {
        const storedServices = localStorage.getItem("providerServices");

        return storedServices
            ? JSON.parse(storedServices)
            : services;
    });

    const [editingServiceId, setEditingServiceId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        price: "",
        duration: "",
    });

    const handleAddService = () => {
        if (
            !formData.name ||
            !formData.category ||
            !formData.description ||
            !formData.price ||
            !formData.duration
        ) {
            alert("Please fill in all fields.");
            return;
        }

        const newService = {
            id: Date.now(),
            name: formData.name,
            category: formData.category,
            description: formData.description,
            price: Number(formData.price),
            duration: Number(formData.duration),
            provider: "My Business",
        };

        const updatedServices = [...providerServices, newService];

        setProviderServices(updatedServices);

        localStorage.setItem(
            "providerServices",
            JSON.stringify(updatedServices)
        );

        setFormData({
            name: "",
            category: "",
            description: "",
            price: "",
            duration: "",
        });

        setShowForm(false);
    }

    const handleEditService = (service) => {
        setEditingServiceId(service.id);

        setFormData({
            name: service.name,
            category: service.category,
            description: service.description,
            price: service.price,
            duration: service.duration,
        });

        setShowForm(true);
    }

    const handleUpdateService = () => {
        if (
            !formData.name ||
            !formData.category ||
            !formData.description ||
            !formData.price ||
            !formData.duration
        ) {
            alert("Please fill in all fields.");
            return;
        }

        const updatedServices = providerServices.map((service) =>
            service.id === editingServiceId
                ? {
                    ...service,
                    name: formData.name,
                    category: formData.category,
                    description: formData.description,
                    price: Number(formData.price),
                    duration: Number(formData.duration),
                }
                : service
        );

        setProviderServices(updatedServices);

        localStorage.setItem(
            "providerServices",
            JSON.stringify(updatedServices)
        );

        setFormData({
            name: "",
            category: "",
            description: "",
            price: "",
            duration: "",
        });

        setEditingServiceId(null);
        setShowForm(false);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setEditingServiceId(null);

        setFormData({
            name: "",
            category: "",
            description: "",
            price: "",
            duration: "",
        });
    };

    const handleDeleteService = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this service?"
        );

        if(!confirmDelete){
            return;
        }

        const updatedServices = providerServices.filter(
            (service) => service.id !== id
        );

        setProviderServices(updatedServices);

        localStorage.setItem(
            "providerServices",
            JSON.stringify(updatedServices)
        );
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/*  Header  */}
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-medium text-blue-600">
                            Provider Dashboard
                        </p>
                        <h1 className="mt-1 text-3xl font-bold text-slate-900">
                            My Services
                        </h1>
                        <p className="mt-2 text-slate-600">
                            Manage the services you offer to customers.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowForm(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        <Plus size={18} />
                        Add Service
                    </button>
                </div>
                {showForm && (
                    <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">
                                    {editingServiceId ? "Edit Service" : "Add New Service"}
                                </h2>
                                <p className="mt-1 text-sm text-slate-600">
                                    Add a service that customers can book.
                                </p>
                            </div>
                            <button
                                onClick={handleCloseForm}
                                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="mt-6 grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="text-sm font-medium text-slate-700">
                                    Service Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g. Dental Consultation"
                                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">Category</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Health & Wellness">Health & Wellness</option>
                                    <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                                    <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                                    <option value="Fitness & Training">Fitness & Training</option>
                                    <option value="Home Services">Home Services</option>
                                    <option value="Automotive">Automotive</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    placeholder="e.g. 500"
                                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-slate-700">
                                    Duration (minutes)
                                </label>
                                <input
                                    type="number"
                                    value={formData.duration}
                                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                    placeholder="e.g. 60"
                                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="text-sm font-medium text-slate-700">
                                    Description
                                </label>
                                <textarea
                                    rows="4"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value, })}
                                    placeholder="Describe your service..."
                                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={handleCloseForm}
                                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                Cancel
                            </button>
                            <button onClick={editingServiceId ? handleUpdateService : handleAddService} className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                                {editingServiceId ? "Update Service" : "Add Service"}
                            </button>
                        </div>
                    </div>
                )}
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {providerServices.map((service) => (
                        <div key={service.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <p className="text-sm font-medium text-blue-600">
                                {service.category}
                            </p>
                            <h2 className="mt-2 text-xl font-semibold text-slate-900">
                                {service.name}
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {service.description}
                            </p>
                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500">Price</p>
                                    <p className="mt-1 text-lg font-semibold text-slate-900">
                                        {service.price}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Duration</p>
                                    <p className="mt-1 text-lg font-semibold text-slate-900">
                                        {service.duration} min
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <button onClick={() => handleEditService(service)} className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                                    Edit
                                </button>
                                <button 
                                   onClick={() => handleDeleteService(service.id)}
                                   className="flex-1 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProviderServices;