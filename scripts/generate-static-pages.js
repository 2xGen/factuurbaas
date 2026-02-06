import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { articles } from '../src/lib/blogData.jsx';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, '../dist');

const createHtmlDocument = (title, description, url, imageUrl, keywords, content) => `
  <!DOCTYPE html>
  <html lang="nl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <meta name="description" content="${description}">
      <meta name="keywords" content="${keywords}">
      <link rel="canonical" href="${url}">
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="article">
      <meta property="og:url" content="${url}">
      <meta property="og:title" content="${title}">
      <meta property="og:description" content="${description}">
      <meta property="og:image" content="${imageUrl}">
      
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="${url}">
      <meta property="twitter:title" content="${title}">
      <meta property="twitter:description" content="${description}">
      <meta property="twitter:image" content="${imageUrl}">

      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 2rem auto; padding: 0 1rem; background-color: #fdfdfd; }
        h1 { color: #1e3a8a; }
        img { max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 1rem; }
        a { color: #ea580c; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .prose { max-width: 100%; }
        .prose p, .prose ul, .prose ol { margin-bottom: 1em; }
        .prose h2, .prose h3 { margin-top: 1.5em; margin-bottom: 0.5em; color: #1e3a8a; }
        .prose li { margin-left: 1.5em; }
        .back-link { display: inline-block; margin-bottom: 2rem; font-weight: bold; }
      </style>
    </head>
    <body>
      <main>
        ${content}
      </main>
    </body>
  </html>
`;

const generateBlogPages = () => {
  articles.forEach(article => {
    const articleUrl = `https://factuurbaas.nl/blogs/${article.slug}`;
    
    const contentHtml = ReactDOMServer.renderToString(article.content);

    const fullContent = `
      <a href="https://factuurbaas.nl/blogs" class="back-link">&larr; Terug naar alle blogs</a>
      <h1>${article.title}</h1>
      <img src="${article.image.url}" alt="${article.image.alt}" />
      <div class="prose">${contentHtml}</div>
    `;

    const fullHtml = createHtmlDocument(
      `${article.title} | FactuurBaas`,
      article.excerpt.replace(/"/g, '&quot;'),
      articleUrl,
      article.image.url,
      article.keywords.replace(/"/g, '&quot;'),
      fullContent
    );
    
    const dirPath = path.join(distPath, 'blog-posts', article.slug);
    fs.ensureDirSync(dirPath);
    const filePath = path.join(dirPath, 'index.html');
    fs.writeFileSync(filePath, fullHtml);
    console.log(`Generated static page: ${filePath}`);
  });
};

const run = async () => {
  try {
    console.log('Starting static page generation...');
    generateBlogPages();
    console.log('All static pages generated successfully!');
  } catch (error) {
    console.error('Error generating static pages:', error);
    process.exit(1);
  }
};

run();