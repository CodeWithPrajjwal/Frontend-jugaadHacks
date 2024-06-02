const getApiBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:5000'; // Dev environment
    }
    return ''; // Production environment, assume same origin
  };
  
  export const API_BASE_URL = getApiBaseUrl();
  