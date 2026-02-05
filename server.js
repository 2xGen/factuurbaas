import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import compression from 'compression';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const distPath = path.resolve(__dirname, 'dist');
const staticHtmlPath = path.resolve(distPath, 'static');

const crawlerUserAgents = [
  'googlebot',
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'sogou',
  'exabot',
  'facebot',
  'ia_archiver',
  'twitterbot',
  'linkedinbot',
  'pinterest',
  'developers.google.com',
];

app.use(compression());

// Serve robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.sendFile(path.join(__dirname, 'public', 'robots.txt'));
});

// Serve sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.sendFile(path.join(__dirname, 'public', 'sitemap.xml'));
});

app.use((req, res, next) => {
  const userAgent = req.headers['user-agent']?.toLowerCase() || '';
  const isCrawler = crawlerUserAgents.some(crawler => userAgent.includes(crawler));

  if (isCrawler) {
    let filePath = '';
    if (req.path === '/' || req.path === '/index.html') {
      filePath = path.join(staticHtmlPath, 'index.html');
    } else if (req.path.startsWith('/blogs/')) {
      const slug = req.path.substring('/blogs/'.length);
      filePath = path.join(staticHtmlPath, 'blogs', `${slug}.html`);
    } else {
      // For other pages, let them pass to the standard handler
      return next();
    }

    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    } else {
      // If static file doesn't exist, serve the SPA for crawlers too
      console.log(`Static file not found for crawler: ${filePath}, serving SPA instead`);
      return res.sendFile(path.join(distPath, 'index.html'));
    }
  }

  // For non-crawlers, serve the SPA
  next();
});

// Serve static files from the 'dist' directory
app.use(express.static(distPath));

// SPA fallback: for any other request, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});