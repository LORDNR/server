import { Request, Response } from "express";

const products = async (req: Request, res: Response) => {
  res.status(200).json("products");
};

export { products };
