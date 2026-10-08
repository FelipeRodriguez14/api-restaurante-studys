import { ProductController } from "@/controller/products-controller";
import { Router } from "express";

const productsController = new ProductController
const productsRoutes = Router()

productsRoutes.get("/", productsController.getAllProducts)
productsRoutes.post("/", productsController.create)
productsRoutes.put("/:id", productsController.updateProduct)
productsRoutes.delete("/:id", productsController.deleteProduct)

export {productsRoutes}