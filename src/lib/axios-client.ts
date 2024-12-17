import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Base URL for the API
  timeout: 10000, // Timeout for requests
  withCredentials: true, // This option allows sending HTTP-only cookies
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Handle successful responses here
    return response;
  },
  (error) => {
    // Handling errors, e.g., when a session expires or user is unauthorized
    if (error.response) {
      if (error.response.status === 401) {
        // If the user is unauthorized (session token expired or invalid)
        console.warn('Unauthorized request, possibly an invalid session.');
        // Maybe redirect the user to the login page or refresh the session
      }
    } else {
      console.error('Network Error:', error);
    }

    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Add additional headers if necessary (not needed for HTTP-only cookies)
    // For example, add custom headers for a specific route here if required
    config.headers['Accept-Language'] = 'en';
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosClient };
