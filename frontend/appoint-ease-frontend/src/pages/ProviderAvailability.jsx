import { useState, useEffect } from "react";
import { createAvailability, deleteAvailability, getAvailabilityByProvider, updateAvailability } from "../api/availabilityApi";

function ProviderAvailability() {

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const [availability, setAvailability] = useState(
        days.map((day) => ({
            day,
            enabled: false,
            startTime: "09:00",
            endTime: "17:00",
            id: null,
        }))
    );

    useEffect(() => {
        const loadAvailability = async () => {
            try {
                const data = await getAvailabilityByProvider(2);

                setAvailability(currentAvailability =>
                    currentAvailability.map(dayItem => {
                        const backenditem = data.find(
                            item => 
                                item.dayOfWeek.toLowerCase() ===
                                dayItem.day.toLowerCase()
                        );

                        if(backenditem) {
                            return {
                                day : dayItem.day,
                                enabled: true,
                                startTime: backenditem.startTime.slice(0, 5),
                                endTime: backenditem.endTime.slice(0, 5),
                                id: backenditem.id,
                            };
                        }

                        return dayItem;
                    })
                );
            } catch (error) {
                console.error(
                    "Error loading availability:", error
                );
            }
        };
        loadAvailability();
    },[]);
    
    const isValidTime = (startTime, endTime) => {
        return startTime < endTime;
    }

    const handleSaveAvailability = async () => {
        const invalidDay = availability.find(
            (item) =>
                item.enabled &&
                !isValidTime(item.startTime, item.endTime)
        );
        if (invalidDay) {
            alert(
                `${invalidDay.day}: End time must be later than start time.`
            );
            return;
        }

        try {
            for (const item of availability){
                if(item.enabled) {
                    const availabilityData = {
                        dayOfWeek: item.day.toUpperCase(),
                        startTime: item.startTime + ":00",
                        endTime: item.endTime + ":00",
                        provider: { id: 2 }
                    };

                    if(item.id) {
                        const updatedAvailability = 
                            await updateAvailability(
                                item.id,
                                availabilityData
                            );

                        setAvailability(currentAvailability =>
                            currentAvailability.map(dayItem =>
                                dayItem.day === item.day
                                ? {
                                    ...dayItem,
                                    id: updatedAvailability.id
                                }
                                : dayItem
                            )
                        );
                    } else {
                        const newAvailability = 
                            await createAvailability(
                                availabilityData
                            );

                        setAvailability(currentAvailability =>
                            currentAvailability.map(dayItem =>
                                dayItem.day === item.day
                                ? {
                                    ...dayItem,
                                    id: newAvailability.id
                                }
                                : dayItem
                            )
                        );
                    }
                } else if (item.id) {
                    await deleteAvailability(item.id);

                    setAvailability(currentAvailability =>
                        currentAvailability.map(dayItem =>
                            dayItem.day === item.day
                            ? {
                                ...dayItem,
                                id: null
                            }
                            : dayItem
                        )
                    );
                }
            }
            alert("Availability saved successfully.")
        } catch (error) {
            console.error("Error saving availability:", error);
            alert("Failed to save availability.");
        }
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div>
                    <p className="text-sm font-medium text-blue-600">
                        Provider Dashboard
                    </p>
                    <h1 className="mt-1 text-3xl font-bold text-slate-900">
                        Availability
                    </h1>
                    <p className="mt-2 text-slate-600">
                        Set your working days and hours so customers know when they can book your services.
                    </p>
                </div>
                {/* */}
                <div className="mt-10 space-y-4">
                    {availability.map((item, index) => (
                        <div key={item.day} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                <div className="flex items-center gap-4 lg:w-48">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-sm font-semibold text-blue-600">
                                        {item.day.slice(0, 2)}
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-slate-900">
                                            {item.day}
                                        </h2>
                                        <p className="text-sm text-slate-500">
                                            {item.enabled ? "Available" : "Unavailable"}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => {
                                    const updatedAvailability = [...availability];
                                    updatedAvailability[index].enabled =
                                        !updatedAvailability[index].enabled;

                                    setAvailability(updatedAvailability);
                                }}
                                    className={`relative h-6 w-11 rounded-full transition ${item.enabled
                                        ? "bg-blue-600"
                                        : "bg-slate-300"
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${item.enabled
                                            ? "left-6"
                                            : "left-1"
                                            }`}
                                    />
                                </button>
                                <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
                                    <div className="w-full sm:w-auto">
                                        <label className="text-xs font-medium text-slate-500">
                                            Start Time
                                        </label>
                                        <input
                                            type="time"
                                            value={item.startTime}
                                            disabled={!item.enabled}
                                            onChange={(e) => {
                                                const updatedAvailability = [
                                                    ...availability,
                                                ];

                                                updatedAvailability[index].startTime =
                                                    e.target.value;

                                                setAvailability(updatedAvailability);
                                            }}
                                            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                                        />
                                    </div>
                                    <span className="hidden text-slate-400 sm:block">
                                        →
                                    </span>
                                    <div className="w-full sm:w-auto">
                                        <label className="text-xs font-medium text-slate-500">
                                            End Time
                                        </label>
                                        <input
                                            type="time"
                                            value={item.endTime}
                                            disabled={!item.enabled}
                                            onChange={(e) => {
                                                const updatedAvailability = [
                                                    ...availability,
                                                ];
                                                updatedAvailability[index].endTime =
                                                    e.target.value;
                                                setAvailability(updatedAvailability);
                                            }}
                                            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex justify-end">
                    <button
                        onClick={handleSaveAvailability}
                        className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >Save Availability</button>
                </div>
            </div>

        </div>
    );
}

export default ProviderAvailability;