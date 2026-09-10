import { CalendarDays } from "lucide-react";

function Navbar(){
    return(
        <nav className="w-full border-b border-slate-100 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100">
                        <CalendarDays className="h-5 w-5 text-sky-600" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900">
                        AppointEase
                    </span>
                </div>
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#" className="text-sm font-medium text-slate-900">Home</a>
                    <a href="#" className="text-sm font-medium text-slate-500 hover:text-sky-600">Services</a>
                    <a href="#" className="text-sm font-medium text-slate-500 hover:text-sky-600">How It Works</a>
                    <a href="#" className="text-sm font-medium text-slate-500 hover:text-sky-600">For Providers</a>
                    <a href="#" className="text-sm font-medium text-slate-500 hover:text-sky-600">About</a>
                </div>
                <div className="flex items-center gap-3">
                    <button className="hidden rounded-full border border-sky-200 px-5 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50 sm:block">
                        Sign In
                    </button>
                    <button className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-sky-700">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;