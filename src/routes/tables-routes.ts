import { TableController } from "@/controller/tables-controller";
import { Router } from "express";

const tableController = new TableController()
const tableRoutes = Router()

tableRoutes.get("/", tableController.getAllTables)
tableRoutes.post("/", tableController.create)
tableRoutes.delete("/:id", tableController.delete)
tableRoutes.put("/:id", tableController.update)

export {tableRoutes}