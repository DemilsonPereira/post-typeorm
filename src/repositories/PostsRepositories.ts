import { EntityRepository, Repository } from "typeorm";
import { Post } from "../entities/Post";

@EntityRepository(Post)
class PostsRepositories extends Repository<Post>{

}

export {
  PostsRepositories
}
