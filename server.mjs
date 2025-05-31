import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import history from 'connect-history-api-fallback';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(compression());
app.use(helmet());
app.use(history());

// Static files
app.use(express.static(path.join(__dirname, 'dist'), {
    maxAge: '1y',
    etag: false
}));

// SPA fallback
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Vue app running in production mode on port ${port}`);
});