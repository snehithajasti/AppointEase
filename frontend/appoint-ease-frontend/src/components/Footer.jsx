import {
    CalendarDays,
    Globe,
    Mail,
    Share2,
} from "lucide-react";

function Footer() {
    return(
        <footer className="border-t border-slate-100 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100">
                                <CalendarDays className="h-5 w-5 text-sky-600" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">
                                AppointEase
                            </span>
                        </div>
                        <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                            A simple way to discover trusted services, find available time slots, and book appointments without the hassle.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-sky-100 hover:text-sky-600">
                                <Globe className="h-4 w-4" />
                            </button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-sky-100 hover:text-sky-600">
                                <Mail className="h-4 w-4" />
                            </button>
                            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-sky-100 hover:text-sky-600">
                                <Share2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">
                            Platform
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm text-slate-500">
                            <li>
                                <a href="#" className="transition hover:text-sky-600">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-sky-600">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-sky-600">
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-sky-600">
                                    For Providers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-slate-900">
                            Support
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm text-slate-500">
                            <li>
                                <a href="#" className="transition hover:text-sky-600">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-sky-600">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-sky-600">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="transition hover:text-sky-600">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <p>2026 AppointEase. All rights reserved.</p>
                    <p>Built for simpler scheduling.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;