import Url from '../models/Url.js';
import Click from '../models/Click.js';

/**
 * Redirect short code to the original URL and log the visit.
 * @route GET /:shortCode
 */
export const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    // Find the URL document by the short code
    const url = await Url.findOne({ shortCode });
    if (!url) {
      // Return a clean, styled HTML 404 response for the browser
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
      return res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Link Not Found | ShortLink</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              background-color: #f8fafc;
              color: #0f172a;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              margin: 0;
            }
            .container {
              text-align: center;
              padding: 2.5rem;
              background: white;
              border-radius: 1rem;
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
              max-width: 450px;
              width: 90%;
            }
            h1 {
              font-size: 5rem;
              margin: 0 0 0.5rem;
              color: #4f46e5;
              font-weight: 800;
              line-height: 1;
            }
            h2 {
              font-size: 1.5rem;
              margin: 0 0 1rem;
              color: #1e293b;
              font-weight: 700;
            }
            p {
              margin: 0 0 2rem;
              color: #64748b;
              line-height: 1.6;
              font-size: 0.95rem;
            }
            .btn {
              display: inline-block;
              background-color: #4f46e5;
              color: white;
              padding: 0.75rem 1.5rem;
              border-radius: 0.5rem;
              text-decoration: none;
              font-weight: 600;
              transition: all 0.2s;
              box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);
            }
            .btn:hover {
              background-color: #4338ca;
              transform: translateY(-1px);
            }
            .btn:active {
              transform: translateY(0);
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>404</h1>
            <h2>Link Not Found</h2>
            <p>The link you're trying to visit doesn't exist, is incorrect, or has been removed.</p>
            <a href="${frontendUrl}" class="btn">Back to Dashboard</a>
          </div>
        </body>
        </html>
      `);
    }

    // Record the click in parallel or sequentially (sequential ensures integrity before redirecting)
    const click = new Click({ urlId: url._id });
    await click.save();

    // Increment the clickCount in the URL document
    url.clickCount += 1;
    await url.save();

    // Redirect the user immediately
    return res.redirect(url.originalUrl);
  } catch (error) {
    console.error('Error during redirection:', error);
    return res.status(500).json({ message: 'Server error during redirection' });
  }
};
