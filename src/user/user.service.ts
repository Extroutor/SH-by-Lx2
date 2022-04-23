import { Injectable, NotImplementedException } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  async findUser(id: number, username: string): Promise<User> {
    throw new NotImplementedException();
  }

  async createUser(email: string, username: string): Promise<User> {
    throw new NotImplementedException();
  }

  async deleteUser(id: number, username: string): Promise<User> {
    throw new NotImplementedException();
  }
}
