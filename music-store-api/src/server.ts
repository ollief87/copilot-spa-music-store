import express from 'express';
import homeRoutes from './routes/home.routes';
import storeRoutes from './routes/store.routes';

const app = express();

app.use("/api", homeRoutes);
app.use("/api/store", storeRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

export default app;