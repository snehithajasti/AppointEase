import { ArrowRight, CalendarCheck, Clock3, Sparkles } from "lucide-react";

function Hero() {
    return (
        <section className="overflow-hidden bg-sky-50">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
                <div className="max-w-2xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                        <Sparkles className="h-4 w-4" />
                        Simple booking. Better experiences.
                    </div>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Your Time Matters.
                        <span className="block text-sky-600">
                            We Make It Easy.
                        </span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                        Discover trusted services, check availability, and book your appointment in just a few clicks. No calls, no waiting, no hassle.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700">
                            Book an Appointment
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        <button className="rounded-full border border-sky-200 bg-white px-6 py-3.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-50">
                            Explore Services
                        </button>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <CalendarCheck className="h-4 w-4 text-sky-600" />
                            Easy online booking
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 text-sky-600" />
                            Flexible time slots
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-200/50 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />

                    <div className="relative rounded-3xl border border-white bg-white p-6 shadow-xl shadow-sky-100/70 sm:p-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Upcoming appointment
                                </p>
                                <h2 className="mt-1 text-xl font-bold text-slate-900">
                                    Hair & beauty
                                </h2>
                            </div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100">
                                <CalendarCheck className="h-5 w-5 text-sky-600" />
                            </div>
                        </div>
                        <div className="mt-7 rounded-2xl bg-sky-50 p-4">
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                                Service
                            </p>
                            <div className="mt-2 flex items-center justify-between">
                                <p className="font-semibold text-slate-900">
                                    Hair Styling
                                </p>
                                <p className="font-semibold text-sky-600">
                                    Rs.800
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-slate-100 p-4">
                                <p className="text-xs font-medium text-slate-400">
                                    Date
                                </p>
                                <p className="mt-2 font-semibold text-slate-900">
                                    Sep 15, 2026
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-100 p-4">
                                <p className="text-xs font-medium text-slate-400">
                                    Time
                                </p>
                                <p className="mt-2 font-semibold text-slate-900">
                                    10.00 AM
                                </p>
                            </div>
                        </div>
                        <button className="mt-5 w-full rounded-2xl bg-sky-600 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-700">
                            Confirm Appointment
                        </button>
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                            <span className="h-2 w-2 rounded-full bg-green-400" />
                            Slot available
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;