import { nanoid } from 'nanoid';
import Url from '../models/Url.js';
import Click from '../models/Click.js';
import { isValidUrl } from '../utils/urlValidator.js';

/**
 * Create a shortened URL from a long URL.
 * If the original URL already exists, return the existing URL document.
 * @route POST /api/urls
 */
export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({ message: 'Original URL is required.' });
    }

    if (!isValidUrl(originalUrl)) {
      return res.status(400).json({ message: 'Invalid URL. Please enter a valid HTTP/HTTPS URL.' });
    }

    // Check if the original URL already exists in the database
    let existingUrl = await Url.findOne({ originalUrl });
    if (existingUrl) {
      return res.status(200).json(existingUrl);
    }

    // Generate unique short code
    const shortCode = nanoid(6);
    
    // Construct the short URL using BASE_URL env variable or dynamic host
    const baseUrl = process.env.BASE_URL || `${req.protocol}://${req.get('host')}`;
    const shortUrl = `${baseUrl}/${shortCode}`;

    const newUrl = new Url({
      originalUrl,
      shortCode,
      shortUrl,
    });

    await newUrl.save();
    return res.status(201).json(newUrl);
  } catch (error) {
    console.error('Error in createShortUrl:', error);
    return res.status(500).json({ message: 'Server error. Failed to shorten URL.' });
  }
};

/**
 * Retrieve all shortened URLs, sorted newest first.
 * @route GET /api/urls
 */
export const getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find().sort({ createdAt: -1 });
    return res.status(200).json(urls);
  } catch (error) {
    console.error('Error in getAllUrls:', error);
    return res.status(500).json({ message: 'Server error. Failed to retrieve URLs.' });
  }
};

/**
 * Retrieve detailed analytics for a specific shortened URL.
 * Returns the URL metadata and click log history sorted newest first.
 * @route GET /api/urls/:id
 */
export const getUrlAnalytics = async (req, res) => {
  try {
    const { id } = req.params;

    const url = await Url.findById(id);
    if (!url) {
      return res.status(404).json({ message: 'URL not found.' });
    }

    // Retrieve click logs sorted newest first
    const clicks = await Click.find({ urlId: id }).sort({ timestamp: -1 });

    return res.status(200).json({
      url,
      clicks,
    });
  } catch (error) {
    console.error('Error in getUrlAnalytics:', error);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ message: 'Invalid URL ID format.' });
    }
    return res.status(500).json({ message: 'Server error. Failed to retrieve analytics.' });
  }
};
