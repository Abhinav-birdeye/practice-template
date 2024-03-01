import { getApiAuthToken, getApiBaseURL } from "../utils/envHelper";
import axios, {type CreateAxiosDefaults} from "axios";

const BASE_URL = getApiBaseURL();

const DEFAULT_OPTIONS = {
  baseURL: BASE_URL
} satisfies CreateAxiosDefaults<unknown>;

export const api = axios.create(DEFAULT_OPTIONS);

api.interceptors.request.use((config)=>{
  const token = getApiAuthToken();
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config  
})

