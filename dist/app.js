import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route.js';
const app = express();
// parsers
app.use(express.json());
app.use(cors());
// application routes
app.use('/api/v1/students', StudentRoutes);
const getAController = (req, res) => {
    const a = 19;
    res.send(a);
};
app.get('/', getAController);
export default app;
//# sourceMappingURL=app.js.map