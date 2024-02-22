import axios from 'axios';
import { Auth } from 'aws-amplify';
// config
import { HOST_API_KEY } from '../config-global';

const axiosInstance = axios.create({
  baseURL: HOST_API_KEY,
  timeout: 90000, // Increase timeout to 90 seconds
});

axiosInstance.interceptors.response.use(
  response => response, // On success, just return the response
  async (error) => {
    // Check if it's a 401 error and hasn't been retried yet
    if (error.response && error.response.status === 401 && !error.config._retry) {
      error.config._retry = true; // Mark the request as retried

      try {
        // Refresh the session and get new tokens
		console.log('Refreshing Token ⏳')
        await Auth.currentAuthenticatedUser({ bypassCache: true });
        const session = await Auth.currentSession();
        
        // Set the new token on the retry request's Authorization 
		const newToken = session.getIdToken().getJwtToken(); // Get the new token from the session
		axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        error.config.headers['Authorization'] = `Bearer ${newToken}`;

        // Retry the original request with the new token
		console.log('Retrying Request ⏳')
        return axiosInstance(error.config);
      } catch (refreshError) {
        // Log the error and redirect to the login page for re-authentication
        console.error('Unable to refresh token:', refreshError);
        window.location.href = '/dashboard/hr-helper/workspace/'; // Redirect to the workspace
        return Promise.reject(refreshError); // Reject the promise to stop processing
      }
    }

    // For all other errors or if the request has already been retried, log the error and reject
    console.error('Error details:', error);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    return Promise.reject((error.response && error.response.data) || 'An error occurred. Please try again later.');
  }
);

export default axiosInstance;
