import { Router } from "express";
import { products } from "../controllers/product.controller";

export const productRouter = Router();

productRouter.get("/", products);
