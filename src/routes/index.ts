import { Router } from "express";
import { productsRoutes } from "./products-routes";
import { tableRoutes } from "./tables-routes";
import { orderRoutes } from "./orders-routes";
const routes = Router()

routes.use("/products", productsRoutes)
routes.use("/tables", tableRoutes)
routes.use("/orders", orderRoutes)

export {routes}