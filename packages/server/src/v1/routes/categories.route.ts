import express from "express";

import { controller } from "../controllers/categories.controller";

export const router = express.Router();

router.get('/', controller.getAllHandler);

router.get('/:id', controller.getByPkHandler);

router.post('/', controller.createHandler);

router.put('/:id', controller.updateHandler);

router.delete('/:id', controller.deleteHandler);
