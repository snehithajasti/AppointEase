import axios from "axios";

const API_URL = "http://localhost:8080/api/appointments";

export const createAppointment = async (appointmentData) => {
    const response = await axios.post(API_URL, appointmentData);
    return response.data;
};

export const getAppointmentsByCustomer = async (customerId) => {
    const response = await axios.get(`${API_URL}/customer/${customerId}`);
    return response.data;
};

export const getAppointmentsByProvider = async (providerId) => {
    const response = await axios.get(`${API_URL}/provider/${providerId}`);
    return response.data;
};

export const cancelAppointment = async (appointmentId) => {
    const response = await axios.put(
        `${API_URL}/${appointmentId}/cancel`
    );
    return response.data;
}

export const confirmAppointment = async (appointmentId) => {
    const response = await axios.put(
        `${API_URL}/${appointmentId}/confirm`
    );
    return response.data;
};

export const completeAppointment = async (appointmentId) => {
    const response = await axios.put(
        `${API_URL}/${appointmentId}/complete`
    );
    return response.data;
}