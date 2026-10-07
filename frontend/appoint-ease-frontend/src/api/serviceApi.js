import axios from "axios";

const API_URL = "http://localhost:8080/api/services";

export const getServices = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getService = async (serviceId) => {
    const response = await axios.get(`${API_URL}/${serviceId}`);
    return response.data;
};

export const createService = async (serviceData) => {
    const response = await axios.post(API_URL, serviceData);
    return response.data;
};

export const getServicesByProvider = async (providerId) => {
    const response = await axios.get(
        `${API_URL}/provider/${providerId}`
    );
    return response.data;
}

export const updateService = async (serviceId, serviceData) => {
    const response = await axios.put(
        `${API_URL}/${serviceId}`,
        serviceData
    );
    return response.data;
}

export const deleteService = async (serviceId) => {
    const response = await axios.delete(
        `${API_URL}/${serviceId}`
    );
    return response.data;
}