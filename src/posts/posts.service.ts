import { Injectable, NotImplementedException } from '@nestjs/common';
import { Posts } from '@prisma/client';

@Injectable()
export class PostsService {
  async findPost(id: number, title: string): Promise<Posts> {
    throw new NotImplementedException();
  }

  async createPost(title: string, content: string): Promise<Posts> {
    throw new NotImplementedException();
  }

  async deletePost(id: number, title: string): Promise<Posts> {
    throw new NotImplementedException();
  }
}
