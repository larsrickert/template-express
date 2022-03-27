import { router } from '../server';

router.get('/', (_, res) => {
  res.status(200).send({ data: 'Hello from the node API.' });
});
