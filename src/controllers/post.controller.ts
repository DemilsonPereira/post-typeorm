import { Request, Response } from "express";
import { PostService } from "../services/post.service";
class PostController {
  private postService: PostService;

  constructor() {
    this.postService = new PostService();
  }

  public index = async (request: Request, response: Response) => {
    response.send(this.postService.index());
  }

  public create = async (request: Request, response: Response) => {
    response.send(this.postService.create());
  }

  public update = async (request: Request, response: Response) => {
    response.send(this.postService.update());
  }

  public delete = async (request: Request, response: Response) => {
    response.send(this.postService.delete());
  }
}

export {
  PostController
}
