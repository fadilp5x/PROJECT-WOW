const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.cjs': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

// In-memory memory cache for ultra-fast asset delivery
const memoryCache = new Map();

function getFileFromCache(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const key = `${filePath}:${stats.mtimeMs}:${stats.size}`;
    if (memoryCache.has(key)) {
      return { ...memoryCache.get(key), stats };
    }
    const buffer = fs.readFileSync(filePath);
    const item = { buffer, stats, mtime: stats.mtime.toUTCString(), etag: `W/"${stats.size.toString(16)}-${stats.mtimeMs.toString(16)}"` };
    memoryCache.set(key, item);
    // Keep cache bounded
    if (memoryCache.size > 100) {
      const firstKey = memoryCache.keys().next().value;
      memoryCache.delete(firstKey);
    }
    return item;
  } catch (err) {
    return null;
  }
}

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';

  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  let cached = getFileFromCache(filePath);

  // SPA Route Fallback: if URL has no file extension or file not found, serve index.html
  if (!cached || !cached.stats.isFile()) {
    const ext = path.extname(reqPath);
    if (!ext || ext === '.html') {
      filePath = path.join(PUBLIC_DIR, 'index.html');
      cached = getFileFromCache(filePath);
    }
  }

  if (!cached) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // 304 Not Modified validation via ETag or Last-Modified
  const ifNoneMatch = req.headers['if-none-match'];
  const ifModifiedSince = req.headers['if-modified-since'];
  if (ifNoneMatch === cached.etag || (ifModifiedSince && new Date(ifModifiedSince) >= cached.stats.mtime)) {
    res.writeHead(304, {
      'ETag': cached.etag,
      'Last-Modified': cached.mtime,
      'Cache-Control': ext === '.html' ? 'public, max-age=0, must-revalidate' : 'public, max-age=31536000, immutable',
    });
    res.end();
    return;
  }

  // Response headers
  const headers = {
    'Content-Type': contentType,
    'ETag': cached.etag,
    'Last-Modified': cached.mtime,
    'Access-Control-Allow-Origin': '*',
    'X-Content-Type-Options': 'nosniff',
    'Vary': 'Accept-Encoding',
  };

  if (ext === '.html') {
    headers['Cache-Control'] = 'public, max-age=0, must-revalidate';
  } else {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  }

  // Gzip / Deflate compression for text/code/svg formats
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const isCompressible = /^(text\/|application\/javascript|application\/json|image\/svg\+xml)/.test(contentType);

  if (isCompressible && /\bgzip\b/.test(acceptEncoding)) {
    headers['Content-Encoding'] = 'gzip';
    res.writeHead(200, headers);
    zlib.gzip(cached.buffer, (err, compressed) => {
      if (err) {
        res.end(cached.buffer);
      } else {
        res.end(compressed);
      }
    });
  } else if (isCompressible && /\bdeflate\b/.test(acceptEncoding)) {
    headers['Content-Encoding'] = 'deflate';
    res.writeHead(200, headers);
    zlib.deflate(cached.buffer, (err, compressed) => {
      if (err) {
        res.end(cached.buffer);
      } else {
        res.end(compressed);
      }
    });
  } else {
    headers['Content-Length'] = cached.buffer.length;
    res.writeHead(200, headers);
    res.end(cached.buffer);
  }
});

server.keepAliveTimeout = 65000;
server.headersTimeout = 66000;

server.listen(PORT, '0.0.0.0', () => {
  console.log(`UNSEEN multi-page platform (High Performance / Compressed) running at http://localhost:${PORT}`);
});
