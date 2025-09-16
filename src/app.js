import express from 'express';
import filmes from './routes/filmes.js';

const app = express();

app.use(express.json());
app.use(filmes.filmesRouter);

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});