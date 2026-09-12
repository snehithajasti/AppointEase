import { CalendarDays, Clock, IndianRupee, UserRound } from "lucide-react";
import { useEffect,useState } from "react";

function MyAppointments() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const storedAppointments = 
           JSON.parse(localStorage.getItem("appointments")) || [];

        setAppointments(storedAppointments);
    },[]);

    const handleCancelAppointment = (id) => {
        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this appointment?"
        );

        if(!confirmCancel) {
            return;
        }

        const updatedAppointments = appointments.map((appointment) =>
           appointment.id === id
           ? {...appointment, status: "CANCELLED" }
           : appointment
        );

        localStorage.setItem("appointments",JSON.stringify(updatedAppointments));
        setAppointments(updatedAppointments);
    }

    const upcomingAppointments = appointments.filter(
        (appointment) =>
            appointment.status === "CONFIRMED" || 
            appointment.status === "PENDING"
    );

    const pastAppointments = appointments.filter(
        (appointment) => 
            appointment.status === "COMPLETED" ||
            appointment.status === "CANCELLED"
    );

    return(
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-10">
                    <p className="mb-2 text-sm font-semibold text-blue-600">
                        MY APPOINTMENTS
                    </p>
                    <h1 className="text-4xl font-bold text-slate-900">
                        Manage your Appointments
                    </h1>
                    <p className="mt-3 max-w-2xl text-slate-600">
                        View your upcoming appointments and keep track of your past bookings.
                    </p>
                </div>
                <section>
                    <div className="mb-5">
                        <h2 className="text-2xl font-semibold text-slate-900">
                            Upcoming Appointments
                        </h2>
                    </div>
                    {upcomingAppointments.length > 0 ? (
                        <div className="grid gap-5 lg:grid-cols-2">
                            {upcomingAppointments.map((appointment) => (
                                <AppointmentCard 
                                  key={appointment.id}
                                  appointment={appointment}
                                  onCancel={handleCancelAppointment}
                                />
                            ))}
                        </div>
                    ):(
                        <EmptyState message="You don't have an upcoming appointments." />
                    )}
                </section>

                <section className="mt-14">
                    <div className="mb-5">
                        <h2 className="text-2xl font-semibold text-slate-900">
                            Past Appointments
                        </h2>
                    </div>
                    {pastAppointments.length > 0 ? (
                        <div className="grid gap-5 lg:grid-cols-2">
                            {pastAppointments.map((appointment) => (
                                <AppointmentCard
                                   key={appointment.id}
                                   appointment={appointment} 
                                />
                            ))}
                        </div>
                    ):(
                        <EmptyState message="You don't have any past appointments." />
                    )}
                </section>
            </div>
        </div>
    );
}

function AppointmentCard({ appointment, onCancel}) {
    const statusStyles = {
        CONFIRMED: "bg-green-50 text-green-700",
        PENDING: "bg-yellow-50 text-yellow-700",
        COMPLETED: "bg-blue-50 text-blue-700",
        CANCELLED: "bg-red-50 text-red-700",
    };

    return(
        <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-blue-600">
                        {appointment.category}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-900">
                        {appointment.serviceName}
                    </h3>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[appointment.status]}`}>
                    {appointment.status}
                </span>
            </div>
            <div className="mt-6 flex items-center gap-3">
                <UserRound size={18} className="text-blue-600" />
                <div>
                    <p className="text-xs text-slate-500">
                        Provider
                    </p>
                    <p className="text-sm font-medium text-slate-900">
                        {appointment.provider}
                    </p>
                </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                    <CalendarDays size={18} className="text-blue-600" />
                    <div>
                        <p className="text-xs text-slate-500">
                            Date
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                            {appointment.date}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Clock size={18} className="text-blue-600" />
                    <div>
                        <p className="text-xs text-slate-500">
                            Time
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                            {appointment.time}
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex items-center gap-6 border-t border-slate-200 pt-5">
                <div className="flex items-center gap-2">
                    <IndianRupee size={17} className="text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">
                        {appointment.price}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={17} className="text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">
                        {appointment.duration} min
                    </span>
                </div>
            </div>
            {appointment.status === "CONFIRMED" ||
            appointment.status === "PENDING" ? (
                <button type="button" onClick={() => onCancel(appointment.id)} className="mt-5 w-full rounded-xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                    Cancel Appointment
                </button>
            ): null}
        </div>
    );
}

function EmptyState({message}) {
    return(
        <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
            <p className="text-slate-500">{message}</p>
        </div>
    );
}

export default MyAppointments;