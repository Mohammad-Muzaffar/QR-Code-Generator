import express from 'express';
import rootRouter from './routes/route';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 5000;

app.use(cors());  // Enable CORS
app.use(express.json());  // To parse JSON bodies if needed

// Set base path for routes
app.use('/api/v1', rootRouter);

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
