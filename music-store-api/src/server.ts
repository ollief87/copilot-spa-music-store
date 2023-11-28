import express from 'express';
import homeRoutes from './routes/homeRoutes';
import storeRoutes from './routes/storeRoutes';

const app = express();

app.use("/", homeRoutes);
app.use("/api", storeRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

export default app;