import express from 'express';
import weatherRouter from './routes/weather';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (_req, res) => { 
  res.send('<h1>Hello World!</h1>')
})

app.use('/weather', weatherRouter)

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});