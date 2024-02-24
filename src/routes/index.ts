import express, { Request, Response } from 'express';
import { list, search, wipe } from '../controllers/search';

const router = express.Router();

router.get('/_health', (_req: Request, res: Response) => {
  res.send('OK');
});

router.get('/search', async (req: Request, res: Response) => {
  const { q } = req.query;
  const page = parseInt(req.query.page as string) || 1;
  const { data, pagination } = await search(q as string, page);

  const result: any = {
    data
  };

  const hasNext = pagination.count + pagination.offset < pagination.total_count;
  if (hasNext) {
    result.next = `/search?q=${q}&page=${page + 1}`;
  }

  if (page > 1) {
    result.previous = `/search?q=${q}&page=${page - 1}`;
  }

  res.status(200).json(result);
});

router.get('/searches', async (_req: Request, res: Response) => {
  const result = await list();

  res.status(200).json(result);
});

router.post('/clean', async (_req: Request, res: Response) => {
  await wipe();

  res.status(200).json({});
});

export default router;
