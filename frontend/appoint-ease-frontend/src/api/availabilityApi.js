import axios from "axios";

const API_URL = "http://localhost:8080/api/availability";

export const getAvailabilityByProvider = async (providerId) => {
    const response = await axios.get(
        `${API_URL}/provider/${providerId}`
    );
    return response.data;
};

export const createAvailability = async (availabilityData) => {
    const response = await axios.post(
        API_URL,
        availabilityData
    );
    return response.data;
};

export const updateAvailability = async (
    availabilityId,
    availabilityData
) => {
    const response = await axios.put(
        `${API_URL}/${availabilityId}`,
        availabilityData
    );
    return response.data;
}

export const deleteAvailability = async (availabilityId) => {
    const response = await axios.delete(
        `${API_URL}/${availabilityId}`
    );
    return response.data;
}