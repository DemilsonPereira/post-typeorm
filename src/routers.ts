import { Router } from "express";
const router = Router();

import { PostController } from "./controllers/post.controller";

const postController = new PostController();

router.get('/api/posts', postController.index);
router.post('/api/posts', postController.create);
router.put('/api/posts/:id', postController.update);
router.delete('/api/posts/:id', postController.delete);

export {
  router
}
