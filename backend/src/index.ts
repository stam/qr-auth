import * as express from 'express';

const app = express();
const port = 4000;

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
