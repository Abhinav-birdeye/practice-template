export function getApiKey(){
    return import.meta.env.VITE_API_KEY;
}

export function getApiAuthToken(){
    return import.meta.env.VITE_API_AUTH_TOKEN;
}

export function getApiBaseURL(){
    return import.meta.env.VITE_API_BASE_URL;
}