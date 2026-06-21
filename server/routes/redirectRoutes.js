import express from 'express';
import { redirectUrl } from '../controllers/redirectController.js';

const router = express.Router();

// Route to handle URL redirection for a specific shortCode
router.get('/:shortCode', redirectUrl);

export default router;
