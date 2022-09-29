import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<User | undefined> {
    const users = await User.find();

    return users.find((user) => user.name === username);
  }
}
