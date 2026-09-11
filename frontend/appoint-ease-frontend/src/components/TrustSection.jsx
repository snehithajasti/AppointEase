import {
    UsersRound,
    ShieldCheck,
    CalendarCheck,
    Heart,
} from "lucide-react";

const trustStats = [
    {
        id: 1,
        value: "10K+",
        label: "Happy Customers",
        icon: UsersRound,
    },
    {
        id: 2,
        value: "500+",
        label: "Verified Professionals",
        icon: ShieldCheck,
    },
    {
        id: 3,
        value: "20+",
        label: "Service Categories",
        icon: CalendarCheck,
    },
    {
        id: 4,
        value: "4.8/5",
        label: "Average Rating",
        icon: Heart,
    },
];

function TrustSection() {
    return(
        <section className="bg-sky-50 px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                        Why AppointEase
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Trusted by Thousands
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
                        Join a growing community that values convenience, quality, and trusted services.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {trustStats.map((stat) => {
                        const Icon = stat.icon;

                        return(
                            <div key={stat.id} className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-sm">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100">
                                    <Icon className="h-6 w-6 text-sky-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-sm text-slate-500">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TrustSection;