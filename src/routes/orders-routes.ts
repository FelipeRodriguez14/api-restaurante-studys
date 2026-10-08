import { OrderController } from "@/controller/order-controller";
import { Router } from "express";

const orderController = new OrderController()
const orderRoutes = Router()

orderRoutes.get("/", orderController.getAllOrders)
orderRoutes.get("/:id", orderController.getById)
orderRoutes.post("/", orderController.create)
orderRoutes.delete("/", orderController.delete)
orderRoutes.post("/:id/products", orderController.insertProduct)
export {orderRoutes}