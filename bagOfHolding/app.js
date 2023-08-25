import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';

const app = express();
const port = '2222';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

ViteExpress.config({ printViteDevServerHost: true });

// Routes go here











ViteExpress.listen(app, port, () => console.log(`Investigation Check successful. You found http://localhost:${port}`));