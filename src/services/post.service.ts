import { getConnection, getCustomRepository } from 'typeorm'
import { PostsRepositories } from '../repositories/PostsRepositories';

class PostService {
  private postRepository: PostsRepositories;

  constructor() {
    this.postRepository = getConnection("blog").getCustomRepository(PostsRepositories)
  }

  public index = () => {
    return "Index From Service";
  }

  public create = () => {
    return "Create From Service";
  }

  public update = () => {
    return "Update From Service";
  }

  public delete = () => {
    return "Delete From Service";
  }
}

export {
  PostService
}
