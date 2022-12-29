import { BACKEND_URL } from "../constants";
import axios from "axios";

const appointmentApi = axios.create({
    baseURL: BACKEND_URL
})

export const getAllAppointments = async () => {
    const response = await appointmentApi.get("doctor/get-appointments")

    return response.data;
}
