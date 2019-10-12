import * as express from 'express';

import MedicationController from './controllers/Medication'

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api', router);
app.use('/api/static', express.static('static'));
router.get('/', (req, res) => res.send('Hello World!'));
router.get('/medication', MedicationController.get);
router.post('/medication', MedicationController.post);
router.post('/medication/:id/verify', MedicationController.verify);

export default app;
