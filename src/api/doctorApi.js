import { BACKEND_URL } from "../constants";
import axios from "axios";

const doctorApi = axios.create({
    baseURL: BACKEND_URL
})

export const getAllDoctors = async () => {
    const response = await doctorApi.get("admin/get-doctors");
  
    return response.data;
  };

  
export const doctorView = async () => {
    const response = await doctorApi.get("doctor/doctor-view");
  
    return response.data;
  };