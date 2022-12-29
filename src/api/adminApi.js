import { BACKEND_URL } from "../constants";
import axios from "axios";

const adminApi = axios.create({
    baseURL: BACKEND_URL
})

export const addDoctor = async (data) => {
    const response = await adminApi.post("admin/add-doctor", data);
  
    return response.data;
};