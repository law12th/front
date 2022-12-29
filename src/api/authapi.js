import axios from 'axios';
import { BACKEND_URL } from '../constants';

const authApi = axios.create({
    baseURL: BACKEND_URL,
  });
  
  export const createUser = async (data) => {
    const response = await authApi.post("/register", data);
  
    return response.data;
  };
  
  export const loginUser = async (data) => {
    const response = await authApi.post("/login", data);
  
    return response.data;
  };