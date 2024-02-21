import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500).json({ error: err.message });
}

export default errorHandler;