import {
    Search,
    UserRound,
    CalendarDays,
    CheckCircle2,
    icons,
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Find a Service",
        description: "Browse through a wide range of services and find exactly what you need.",
        icon: Search,
    },
    {
        id: 2,
        title: "Choose a Provider",
        description: "Explore trusted service providers and choose the one that works best for you.",
        icon: UserRound,
    },
    {
        id: 3,
        title: "Pick a Time",
        description: "Check real-time availability and select a date and time that fits your schedule.",
        icon: CalendarDays,
    },
    {
        id: 4,
        title: "Book & Relax",
        description: "Confirm your appointment and let AppointEase take care of the rest.",
        icon: CheckCircle2,
    },
];

function HowItWorks() {
    return(
        <section className="bg-sky-50 px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                        Simple Process
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        How AppointEase Works
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-500">
                        Booking a service shouldn't be complicated. Find what you need, choose a convenient time, and you're all set.
                    </p>
                </div>
                <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-sky-200 lg:block" />
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return(
                            <div key={step.id} className="relative flex flex-col items-center text-center">
                                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-sky-50 bg-white shadow-sm">
                                    <Icon className="h-6 w-6 text-sky-600" /> 
                                </div>
                                <span className="mt-5 text-xs font-bold uppercase tracking-widest text-sky-600">
                                    Step {step.id}
                                </span>
                                <h3 className="mt-2 text-lg font-bold text-slate-900">
                                    {step.title}
                                </h3>
                                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;