import { Router, Request, Response } from "express";

class PostController {

  public index = async (request: Request, response: Response) => {
    response.send('Index');
  }

  public create(request: Request, response: Response) {
    response.send('Create');
  }

  public update(request: Request, response: Response) {
    response.send('Update');
  }

  public delete(request: Request, response: Response) {
    response.send('Delete');
  }
}

export {
  PostController
}
