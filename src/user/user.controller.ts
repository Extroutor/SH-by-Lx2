import { Get, Post, Delete, Param, Controller, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { UserDto } from './dto/user-dto';

@ApiResponse({
  status: 501,
  description: 'The method is not implemented.',
})
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //////////CREATE USER////////////////////////////////////////////////////////////////////////
  @ApiOperation({
    summary: 'Create user',
  })
  @ApiResponse({
    status: 201,
    description: 'User Created!',
  })
  @Post('create')
  async createUser(@Body() CreateUserDto: UserDto): Promise<User> {
    return await this.userService.createUser(CreateUserDto);
  }

  //////////GET USERS////////////////////////////////////////////////////////////////////////
  @ApiOperation({
    summary: 'Get All Users',
  })
  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  //////////GET USER by ID////////////////////////////////////////////////////////////////////////
  @ApiOperation({
    summary: 'Get user by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invlaid ID format',
  })
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return await this.userService.getUser(id);
  }

  //////////DELETE USER////////////////////////////////////////////////////////////////////////
  @ApiOperation({
    summary: 'Delete user by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Delete(':id/delete')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
