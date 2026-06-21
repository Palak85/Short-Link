import express from 'express';
import { createShortUrl, getAllUrls, getUrlAnalytics } from '../controllers/urlController.js';

const router = express.Router();

// Route to create a shortened URL
router.post('/', createShortUrl);

// Route to retrieve all shortened URLs
router.get('/', getAllUrls);

// Route to retrieve analytics details for a specific URL ID
router.get('/:id', getUrlAnalytics);

export default router;
