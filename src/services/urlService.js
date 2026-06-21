import axios from 'axios';

const API_BASE = '/api/urls';

/**
 * Service to handle all HTTP API integration calls to the MERN backend.
 */
const urlService = {
  /**
   * Request to shorten a long URL.
   * @param {string} originalUrl 
   * @returns {Promise<Object>} The created/existing Url document
   */
  shorten: async (originalUrl) => {
    const response = await axios.post(API_BASE, { originalUrl });
    return response.data;
  },

  /**
   * Request to retrieve all shortened URLs.
   * @returns {Promise<Array>} List of shortened URL documents
   */
  getAll: async () => {
    const response = await axios.get(API_BASE);
    return response.data;
  },

  /**
   * Request to retrieve click statistics details for a single URL.
   * @param {string} id The URL's MongoDB ID
   * @returns {Promise<Object>} Contains URL details and visits click logs
   */
  getAnalytics: async (id) => {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
  }
};

export default urlService;
