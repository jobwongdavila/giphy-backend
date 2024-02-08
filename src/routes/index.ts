import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/_health', (_req: Request, res: Response) => {
  res.send('OK');
});

export default router;
