import { NextFunction, Request, Response } from "express";
import catchAsync from "../helpers/catchAsync.js";

export const protectedController = catchAsync(
    async (req: Request, res: Response, _next: NextFunction) => {
        if (req.body) {
            throw new Error("Some cool error")
        }
        return res.status(200).json({ message: 'Hello Protected route!' });
    })
