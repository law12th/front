import axios from "axios";

import { BACKEND_URL } from "../constants";

const PatientApi = axios.create({
  baseURL: BACKEND_URL,
});

export const addPatient = async (data) => {
  const response = await PatientApi.post("doctor/add-patient", data);

  return response.data;
};
export const getAllPatients = async () => {
  const response = await PatientApi.get("patient/get-patients");

  return response.data;
};
export const addAppointment = async (data) => {
  const response = await PatientApi.post("patient/add-appointment", data);

  return response.data;
};
