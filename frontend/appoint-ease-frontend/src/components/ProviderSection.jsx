import {
    ArrowRight,
    CalendarDays,
    BriefcaseBusiness,
    UsersRound,
    Settings2,
} from "lucide-react";

const providerFeatures = [
    {
        icon: BriefcaseBusiness,
        title: "Manage Services",
        description: "Create and manage the services you offer.",
    },
    {
        icon: CalendarDays,
        title: "Set Your Schedule",
        description: "Define your availability and working hours."
    },
    {
        icon: UsersRound,
        title: "Get More Clients",
        description: "Connect with customers looking for your services.",
    },
];

function ProviderSection() {
    return (
        <section className="bg-white px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-sky-50 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100/80" />
                    <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-blue-100/60" />
                    <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                                <Settings2 className="h-4 w-4" />
                                For Service Providers
                            </div>
                            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                                Grow Your Business.
                                <span className="block text-sky-600">
                                    We Handle the Bookings.
                                </span>
                            </h2>
                            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
                                Join AppointEase and make it easier for customers to discover your services, check your availability, and book appointments with you.
                            </p>
                            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700">
                                Join as a Provider
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="relative mx-auto w-full max-w-md">
                            <div className="rounded-3xl border border-white bg-white p-6 shadow-xl shadow-sky-100/70">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-slate-400">
                                            Provider Profile
                                        </p>
                                        <h3 className="mt-1 text-xl font-bold text-slate-900">
                                            Your Services
                                        </h3>
                                    </div>
                                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100">
                                        <BriefcaseBusiness className="h-5 w-5 text-sky-600" />
                                    </div>
                                </div>
                                <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-semibold text-slate-900">
                                                Laptop Repair
                                            </p>
                                            <p className="mt-1 text-xs text-slate-400">
                                                60 min . Available
                                            </p>
                                        </div>
                                        <p className="font-bold text-sky-600">
                                            Rs. 800
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-semibold text-slate-900">
                                            Today's Availability
                                        </p>
                                        <span className="text-xs font-medium text-emerald-600">
                                            Available
                                        </span>
                                    </div>
                                    <div className="mt-3 flex gap-2">
                                        <span className="rounded-xl bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700">
                                            10.00
                                        </span>
                                        <span className="rounded-xl bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700">
                                            11.00
                                        </span>
                                        <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400">
                                            12.00
                                        </span>
                                        <span className="rounded-xl bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700">
                                            2.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="relative mt-12 grid gap-4 border-t border-sky-100 pt-8 sm:grid-cols-3">
                        {providerFeatures.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="flex gap-4 rounded-2xl bg-white/70 p-4"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                                        <Icon className="h-5 w-5 text-sky-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-slate-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProviderSection;