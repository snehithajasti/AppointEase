function ServiceCard({ service }) {
    const Icon = service.icon;

    return(
        <div className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-600">
                <Icon className="h-6 w-6 text-sky-600 transition group-hover:text-white" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-900">
                {service.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
                {service.description}
            </p>
            <button className="mt-5 text-sm font-semibold text-sky-600 transition hover:text-sky-700">
                Explore services
            </button>
        </div>
    );
}

export default ServiceCard;