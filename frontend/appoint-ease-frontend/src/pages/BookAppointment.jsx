import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
    ArrowLeft,
    CalendarDays,
    Clock,
    IndianRupee,
    UserRound,
} from "lucide-react";
import { services } from "../data/services";

function BookAppointment() {
    const { id } = useParams();

    const service = services.find(
        (service) => service.id === Number(id)
    );

    const availableSlots = [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
    ];

    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirmAppointment = () => {
        const newAppointment = {
            id: Date.now(),
            serviceId: service.id,
            serviceName: service.name,
            category: service.category,
            provider: service.provider,
            date: selectedDate,
            time: selectedTime,
            duration: service.duration,
            price: service.price,
            status: "PENDING",
        };

        const existingAppointments = 
           JSON.parse(localStorage.getItem("appointments")) || [];

        const updatedAppointments = [
            ...existingAppointments,
            newAppointment,
        ];

        localStorage.setItem(
            "appointments",
            JSON.stringify(updatedAppointments)
        );

        setIsConfirmed(true);
    };

    if(!service) {
        return(
            <div className="min-h-screen bg-slate-50 px-6 py-16">
                <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 text-center shadow-sm">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Service Not Found
                    </h1>
                    <p className="mt-3 text-slate-500">
                        The service you are trying to book does not exist.
                    </p>
                    <Link
                       to="/services"
                       className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                        <ArrowLeft size={18} />
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return(
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <Link
                  to={`/services/${service.id}`}
                  className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600"
                >
                    <ArrowLeft size={18} />
                    Back to Service
                </Link>
                <div className="mb-10">
                    <p className="mb-2 text-sm font-semibold text-blue-600">
                        BOOK APPOINTMENT
                    </p>
                    <h1 className="text-4xl font-bold text-slate-900">
                        Schedule Your Appointment
                    </h1>
                    <p className="mt-3 text-slate-600">
                        Choose a convenient date and time for your appointment.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-1">
                        <p className="text-sm font-medium text-blue-600">
                            {service.category}
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-slate-900">
                            {service.name}
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                            {service.description}
                        </p>
                        <div className="mt-6 space-y-4 border-t border-slate-200 pt-6">
                            <div className="flex items-center gap-3">
                                <UserRound size={19} className="text-blue-600" />
                                <div>
                                    <p className="text-xs text-slate-500">
                                        Provider
                                    </p>
                                    <p className="text-sm font-medium text-slate-900">
                                        {service.provider}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <IndianRupee size={19} className="text-blue-600" />
                                <div>
                                    <p className="text-xs text-slate-500">
                                        Price
                                    </p>
                                    <p className="text-sm font-medium text-slate-900">
                                        {service.price}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={19} className="text-blue-600" />
                                <div>
                                    <p className="text-xs text-slate-500">
                                        Duration
                                    </p>
                                    <p className="text-sm font-medium text-slate-900">
                                        {service.duration} minutes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <CalendarDays size={20} className="text-blue-600" />
                                <h2 className="text-lg font-semibold text-slate-900">
                                    Select a Date
                                </h2>
                            </div>
                            <input 
                               type="date"
                               value={selectedDate}
                               onChange={(e) => setSelectedDate(e.target.value)}
                               min={new Date().toISOString().split("T")[0]}
                               className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:max-w-sm"
                            />
                        </div>
                        <div className="mt-10 border-t border-slate-200 pt-8">
                            <div className="mb-4 flex items-center gap-2">
                                <Clock size={20} className="text-blue-600" />
                                <h2 className="text-lg font-semibold text-slate-900">
                                    Available Time Slots
                                </h2>
                            </div>
                            {!selectedDate ? (
                                <p className="text-sm text-slate-500">
                                    Select a date to see available appointment slots.
                                </p>
                            ):(
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                    {availableSlots.map((slot) => (
                                        <button
                                           key={slot}
                                           onClick={() => setSelectedTime(slot)}
                                           className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                                             selectedTime === slot
                                               ? "border-blue-600 bg-blue-600 text-white"
                                               : "border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50"
                                           }`}
                                        >
                                            {slot}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {selectedDate && selectedTime && (
                                <div className="mt-10 border-t border-slate-200 pt-8">
                                    {isConfirmed ? (
                                        <div className="rounded-2xl bg-green-50 p-8 text-center">
                                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                                                <span className="text-2xl text-green-600">✓</span>
                                            </div>
                                            <h2 className="mt-5 text-2xl font-bold text-slate-900">
                                                Booking Confirmed!
                                            </h2>
                                            <p className="mt-2 text-sm text-slate-600">
                                                Your appointment has been successfully booked.
                                            </p>
                                            <div className="mt-6 rounded-2xl bg-white p-5 text-left">
                                                <p className="font-semibold text-slate-900">
                                                    {service.name}
                                                </p>
                                                <p className="mt-1 text-sm text-slate-500">
                                                    {service.provider}
                                                </p>
                                                <div className="mt-4 space-y-2 text-sm text-slate-600">
                                                    <p>
                                                        Date:{" "}
                                                        <span className="font-medium text-slate-900">
                                                            {selectedDate}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        Time:{" "}
                                                        <span className="font-medium text-slate-900">
                                                            {selectedTime}
                                                        </span>
                                                    </p>
                                                    <p>
                                                        Total:{" "}
                                                        <span className="font-semibold text-blue-600">
                                                            {service.price}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <Link
                                               to="/my-appointments"
                                               className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                                            > 
                                               View My Appointments
                                            </Link>
                                        </div>
                                    ):(
                                        <div>
                                    <h2 className="text-lg font-semibold text-slate-900">
                                        Booking Summary
                                    </h2>
                                    <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                                        <div className="space-y-4">
                                            <div className="flex justify-between gap-4">
                                                <span className="text-sm text-slate-500">
                                                    Service
                                                </span>
                                                <span className="text-right text-sm font-medium text-slate-900">
                                                    {service.name}
                                                </span>
                                            </div>
                                            <div className="flex justify-between gap-4">
                                                <span className="text-sm text-slate-500">
                                                    Provider
                                                </span>
                                                <span className="text-right text-sm font-medium text-slate-900">
                                                    {service.provider}
                                                </span>
                                            </div>
                                            <div className="flex justify-between gap-4">
                                                <span className="text-sm text-slate-500">
                                                    Date
                                                </span>
                                                <span className="text-right text-sm font-medium text-slate-900">
                                                    {selectedDate}
                                                </span>
                                            </div>
                                            <div className="flex justify-between gap-4">
                                                <span className="text-sm text-slate-500">
                                                    Time
                                                </span>
                                                <span className="text-right text-sm font-medium text-slate-900">
                                                    {selectedTime}
                                                </span>
                                            </div>
                                            <div className="flex justify-between gap-4">
                                                <span className="text-sm text-slate-500">
                                                    Duration
                                                </span>
                                                <span className="text-right text-sm font-medium text-slate-900">
                                                    {service.duration} minutes
                                                </span>
                                            </div>
                                            <div className="border-t border-slate-200 pt-4">
                                                <div className="flex justify-between gap-4">
                                                    <span className="font-semibold text-slate-900">
                                                        Total
                                                    </span>
                                                    <span className="font-bold text-blue-600">
                                                        ₹{service.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={handleConfirmAppointment}
                                      className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                                    >
                                        Confirm Appointment
                                    </button>
                                    </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookAppointment;