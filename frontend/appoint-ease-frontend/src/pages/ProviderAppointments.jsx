import { CalendarDays, Clock, IndianRupee, UserRound } from "lucide-react";
import { useState, useEffect } from "react";
import {
    getAppointmentsByProvider,
    confirmAppointment,
    completeAppointment,
    cancelAppointment,
} from "../api/appointmentApi";

function ProviderAppointments() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const loadAppointments = async () => {
            try {
                const data = await getAppointmentsByProvider(2);
                setAppointments(data);
            } catch (error) {
                console.error("Failed to load provider appointments:", error);
            }
        };
        loadAppointments();
    }, []);

    const upcomingAppointments = appointments.filter(
        (appointment) =>
            appointment.status === "PENDING" ||
            appointment.status === "CONFIRMED"
    );

    const pastAppointments = appointments.filter(
        (appointment) =>
            appointment.status === "COMPLETED" ||
            appointment.status === "CANCELLED"
    );

    const handleConfirm = async (id) => {
        try {
            const updatedAppointment = await confirmAppointment(id);

            setAppointments((currentAppointments) =>
                currentAppointments.map((appointment) =>
                    appointment.id === id
                        ? updatedAppointment
                        : appointment
                )
            );
        } catch (error) {
            console.error("Failed to confirm appointment:", error);
        }
    };

    const handleComplete = async (id) => {
        try {
            const updatedAppointment = await completeAppointment(id);

            setAppointments((currentAppointments) =>
                currentAppointments.map((appointment) =>
                    appointment.id === id
                        ? updatedAppointment
                        : appointment
                )
            );
        } catch (error) {
            console.error("Failed to complete appointment:", error);
        }
    };

    const handleCancel = async (id) => {

        const confirmed = window.confirm(
            "Are you sure you want to cancel this appointment?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const updatedAppointment = await cancelAppointment(id);

            setAppointments((currentAppointments) =>
                currentAppointments.map((appointment) =>
                    appointment.id === id
                        ? updatedAppointment
                        : appointment
                )
            );
        } catch (error) {
            console.error("Failed to cancel appointment:", error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div>
                    <p className="text-sm font-medium text-blue-600">
                        Provider Dashboard
                    </p>
                    <h1 className="mt-1 text-3xl font-bold text-slate-900">
                        Appointments
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Manage appointments booked by your customers.
                    </p>
                </div>
                {/* */}
                <div className="mt-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-slate-500">
                                Upcoming Appointments
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Manage your upcoming customer bookings.
                            </p>
                        </div>
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                            {upcomingAppointments.length}
                        </span>
                    </div>
                    {upcomingAppointments.length === 0 ? (
                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                            <CalendarDays
                                size={40}
                                className="mx-auto text-slate-400"
                            />
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                No upcoming appointments
                            </h3>
                            <p className="mt-2 text-sm text-slate-500">
                                New customer bookings will appear here.
                            </p>
                        </div>
                    ) : (
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {upcomingAppointments.map((appointment) => (
                                <div key={appointment.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-medium text-blue-600">
                                                {appointment.category}
                                            </p>
                                            <h3 className="mt-1 text-xl font-semibold text-slate-900">
                                                {appointment.serviceName}
                                            </h3>
                                        </div>
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${appointment.status === "CONFIRMED" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}
                                        >
                                            {appointment.status}
                                        </span>
                                    </div>
                                    <div className="mt-6 flex items-center gap-3">
                                        <UserRound size={18} className="text-slate-500" />
                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Customer
                                            </p>
                                            <p className="text-sm font-medium text-slate-800">
                                                Customer
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                        <div className="flex items-center gap-3">
                                            <CalendarDays size={18} className="text-slate-500" />
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Date
                                                </p>
                                                <p className="text-sm font-medium text-slate-800">
                                                    {appointment.appointmentDate}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock size={18} className="text-slate-500" />
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Time
                                                </p>
                                                <p className="text-sm font-medium text-slate-800">
                                                    {appointment.startTime}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex items-center gap-6 border-t border-slate-100 pt-5">
                                        <div className="flex items-center gap-2">
                                            <IndianRupee size={17} className="text-slate-500" />
                                            <span className="text-sm font-medium text-slate-700">
                                                {appointment.price}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={17} className="text-slate-500" />
                                            <span className="text-sm font-medium text-slate-700">
                                                {appointment.duration} min
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-3">
                                        <button
                                            onClick={() => {
                                                if (appointment.status === "PENDING") {
                                                    handleConfirm(appointment.id);
                                                } else if (appointment.status === "CONFIRMED") {
                                                    handleComplete(appointment.id);
                                                }
                                            }}
                                            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                                        >
                                            {
                                                appointment.status === "PENDING"
                                                    ? "Confirm"
                                                    : "Complete"
                                            }
                                        </button>
                                        <button
                                            onClick={() => handleCancel(appointment.id)}
                                            className="rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="mt-12">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-slate-900">
                                Past Appointments
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                View your completed and cancelled appointments
                            </p>

                        </div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                            {pastAppointments.length}
                        </span>
                    </div>
                    {pastAppointments.length === 0 ? (
                        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                            <CalendarDays size={40} className="mx-auto text-slate-400" />
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                No past appointments
                            </h3>
                            <p className="mt-2 text-sm text-slate-500">
                                Completed and cancelled appointments will appear here.
                            </p>
                        </div>
                    ) : (
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {pastAppointments.map((appointment) => (
                                <div key={appointment.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-medium text-blue-600">
                                                {appointment.category}
                                            </p>
                                            <h3 className="mt-1 text-xl font-semibold text-slate-900">
                                                {appointment.serviceName}
                                            </h3>
                                        </div>
                                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${appointment.status === "COMPLETED"
                                            ? "bg-green-50 text-green-600"
                                            : "bg-red-50 text-red-600"
                                            }`}>
                                            {appointment.status}
                                        </span>
                                    </div>
                                    <div className="mt-6 flex items-center gap-3">
                                        <UserRound size={18} className="text-slate-500" />
                                        <div>
                                            <p className="text-xs text-slate-500">
                                                Customer
                                            </p>
                                            <p className="text-sm font-medium text-slate-800">
                                                Customer
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                        <div className="flex items-center gap-3">
                                            <CalendarDays
                                                size={18}
                                                className="text-slate-500"
                                            />
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Date
                                                </p>
                                                <p className="text-sm font-medium text-slate-800">
                                                    {appointment.appointmentDate}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock size={18} className="text-slate-500" />
                                            <div>
                                                <p className="text-xs text-slate-500">
                                                    Time
                                                </p>
                                                <p className="text-sm font-medium text-slate-800">
                                                    {appointment.startTime}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex items-center gap-6 border-t border-slate-100 pt-5">
                                        <div className="flex items-center gap-2">
                                            <IndianRupee size={17} className="text-slate-500" />
                                            <span className="text-sm font-medium text-slate-700">
                                                {appointment.price}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={17} className="text-slate-500" />
                                            <span className="text-sm font-medium text-slate-700">
                                                {appointment.duration} min
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default ProviderAppointments;