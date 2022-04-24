import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Posts, PrismaClient } from '@prisma/client';
import { PostsDto } from './dto/posts-dto';

const prisma = new PrismaClient();

@Injectable()
export class PostsService {
  //////////CREATE POST////////////////////////////////////////////////////////////////////////
  async createPost(postsDto: PostsDto): Promise<Posts> {
    const { title, content, authorId } = postsDto;
    if (!+authorId)
      throw new HttpException('Author ID Provided is not a number!', 400);
    return await prisma.posts.create({
      data: {
        title: title,
        content: content,
        authorId: +authorId,
      },
    });
  }

  //////////GET POSTS////////////////////////////////////////////////////////////////////////
  async getPosts(): Promise<Posts[]> {
    const post = await prisma.posts.findMany();
    return post;
  }

  //////////GET POST by ID////////////////////////////////////////////////////////////////////////
  async getPost(id: number): Promise<Posts> {
    if (!+id) throw new HttpException('Post ID Provided is not a number!', 400);
    const article = await prisma.posts.findUnique({
      where: {
        id: +id, // +id is a hack to convert id from string to number
      },
    });
    if (article) {
      return article;
    }
    throw new NotFoundException("Post doesn't exist!");
  }

  //////////DELETE POST by ID////////////////////////////////////////////////////////////////////////
  async deletePost(id: number): Promise<void> {
    const post = await this.getPost(id);
    if (post) {
      await prisma.posts.delete({ where: { id: +id } });
    }
  }
}
