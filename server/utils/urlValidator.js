/**
 * Validates whether a string is a well-formed HTTP or HTTPS URL.
 * @param {string} urlString 
 * @returns {boolean}
 */
export const isValidUrl = (urlString) => {
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (err) {
    return false;
  }
};
