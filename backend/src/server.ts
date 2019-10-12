import * as express from 'express';

import MedicationController from './controllers/Medication'

const app = express();
const router = express.Router();

app.use(express.json());
app.use('/api', router);
router.get('/', (req, res) => res.send('Hello World!'));
router.post('/medication', MedicationController.post);

export default app;
