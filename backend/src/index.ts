import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoute';
import questionRoutes from './routes/questionRoute';
import answerRoutes from './routes/answerRoute';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', questionRoutes);
app.use('/api', answerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
