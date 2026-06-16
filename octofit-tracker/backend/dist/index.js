import express from 'express';
const app = express();
const PORT = 8000;
app.use(express.json());
// Basic API route
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'OctoFit Tracker backend is running' });
});
app.listen(PORT, () => {
    console.log(`OctoFit Tracker backend running on port ${PORT}`);
});
