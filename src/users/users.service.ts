import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<User | undefined> {
    const users = await User.find();

    return users.find((user) => user.name === username);
  }

  async create(createUserDto: CreateUserDto) {
    const password = bcrypt.hashSync(createUserDto.password, 8);
    const newuser = User.create({ ...createUserDto, password });
    await newuser.save();
    return newuser;
  }
}
