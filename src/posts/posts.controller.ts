import { Get, Post, Delete, Param, Controller, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Posts } from '@prisma/client';
import { PostsService } from './posts.service';
import { PostsDto } from './dto/posts-dto';

@ApiResponse({
  status: 501,
  description: 'The method is not implemented.',
})
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  //////////CREATE POST////////////////////////////////////////////////////////////////////////
  @ApiOperation({
    summary: 'Create post',
  })
  @ApiResponse({
    status: 201,
    description: 'Post Created!',
  })
  @Post('create')
  async createPost(@Body() postsDto: PostsDto): Promise<Posts> {
    return await this.postsService.createPost(postsDto);
  }

  //////////GET POSTS////////////////////////////////////////////////////////////////////////

  @ApiOperation({
    summary: 'Get All Posts',
  })
  @Get()
  async getPosts(): Promise<Posts[]> {
    return await this.postsService.getPosts();
  }

  //////////GET POST by ID////////////////////////////////////////////////////////////////////////
  @ApiOperation({
    summary: 'Get post by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Get(':id')
  async getPost(@Param('id') id: number): Promise<Posts> {
    return await this.postsService.getPost(id);
  }

  //////////DELETE POST by ID////////////////////////////////////////////////////////////////////////
  @ApiOperation({
    summary: 'Delete post by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Delete(':id/delete')
  async deleteArticle(@Param('id') id: number): Promise<void> {
    return await this.postsService.deletePost(id);
  }
}
