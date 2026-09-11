import { ArrowRight, CalendarCheck } from "lucide-react";

function FinalCTA() {
    return (
        <section className="bg-white px-6 py-60 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-sky-600 px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
                    <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10" />
                    <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/10" />
                    <div className="relative flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white">
                                <CalendarCheck className="h-4 w-4" />
                                Your next appointment is just a few clicks away
                            </div>
                            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Ready to Book Your Next Appointment?
                            </h2>
                            <p className="mt-4 text-base leading-7 text-sky-50">
                                Discover trusted services, find a convenient time, and book your appointment without the hassle.
                            </p>
                        </div>
                        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
                            <button className="inline-flex items-center justufy-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-50">
                                Get Started
                                <ArrowRight className="h-4 w-4" />
                            </button>
                            <button className="rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                                Explore Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FinalCTA;