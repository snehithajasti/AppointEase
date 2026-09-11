import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sneha R.",
        role: "Verified Customer",
        review: "AppointEase made booking a service so easy. I found a great professional, booked in minutes, and the service was excellent.",
    },
    {
        id: 2,
        name: "Arjun M.",
        role: "Verified Provider",
        review: "As a service provider, AppointEase helps me reach more customers and manage my schedule without the usual hassle.",
    },
    {
        id: 3,
        name: "Priya K.",
        role: "Verified Customer",
        review: "I love being able to see available time slots before booking. It saves so much time and makes planning much easier.",
    },
];

function Testimonials() {
    return(
        <section className="bg-white px-6 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                        Testimonials
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        What Our Users Say
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-500">
                        Real people. Real experiences. See why customers and service providers choose AppointEase.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100">
                                <Quote className="h-5 w-5 text-sky-600" />
                            </div>
                            <p className="mt-6 text-sm leading-7 text-slate-600">
                                "{testimonial.review}"
                            </p>
                            <div className="mt-6 flex gap-1">
                                {[1,2,3,4,5].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-current text-amber-400" />
                                ))}
                            </div>

                            <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="mt-0.5 text-xs text-slate-400">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;