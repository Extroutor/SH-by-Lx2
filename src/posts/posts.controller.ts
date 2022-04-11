import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Posts } from '@prisma/client';
import { PostsService } from './posts.service';

@ApiResponse({
  status: 501,
  description: 'The method is not implemented.',
})
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Finding a post by ID and title' })
  @Get(':post')
  async getPost(@Param('Post id') id: number, title: string): Promise<Posts> {
    return await this.postsService.findPost(id, title);
  }

  @Post('create')
  async createPost(title: string, content: string): Promise<Posts> {
    return await this.postsService.createPost(title, content);
  }

  @Delete(':post/delete')
  async deletePost(
    @Param('Post id') id: number,
    title: string,
  ): Promise<Posts> {
    return await this.postsService.deletePost(id, title);
  }
}
