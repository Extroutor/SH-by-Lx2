import { Get, Post, Delete, Param, Controller } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@ApiResponse({
  status: 501,
  description: 'The method is not implemented.',
})
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Finding a user by ID and name' })
  @Get(':user')
  async getUser(@Param('User id') id: number, username: string): Promise<User> {
    return await this.userService.findUser(id, username);
  }

  @Post('create')
  async createUser(email: string, username: string): Promise<User> {
    return await this.userService.createUser(email, username);
  }

  @Delete(':user/delete')
  async deleteUser(
    @Param('User id') id: number,
    username: string,
  ): Promise<User> {
    return await this.userService.deleteUser(id, username);
  }
}
