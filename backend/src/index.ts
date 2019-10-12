import server from './server';
import { createConnection } from 'typeorm';

const PORT = 4000;
createConnection().then(() => {
  server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
});
