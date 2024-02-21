import { Request, Response } from "express";

export const sampleController = async (_req: Request, res: Response) => {
    return res.status(200).json({ message: 'Hello World!' });
}
