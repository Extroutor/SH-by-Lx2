import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UserDto } from './dto/user-dto';

const prisma = new PrismaClient();
@Injectable()
export class UserService {
  //////////CREATE USER////////////////////////////////////////////////////////////////////////
  async createUser(CreateUserDto: UserDto): Promise<User> {
    const { email, name } = CreateUserDto;
    return await prisma.user.create({
      data: {
        email: email,
        name: name,
      },
    });
  }

  //////////GET USERS////////////////////////////////////////////////////////////////////////
  async getUsers(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  //////////GET USER by ID////////////////////////////////////////////////////////////////////////
  async getUser(id: number): Promise<User> {
    if (!+id) throw new HttpException('User ID Provided is not a number!', 400);
    const user = await prisma.user.findUnique({
      where: {
        id: +id, // +id is a hack to convert id from string to number
      },
    });
    if (user) {
      return user;
    }
    throw new NotFoundException("User doesn't exist!");
  }

  //////////DELETE USER////////////////////////////////////////////////////////////////////////
  async deleteUser(id: number): Promise<void> {
    const user = await this.getUser(id);
    if (user) {
      await prisma.user.delete({ where: { id: +id } });
    }
  }
}
