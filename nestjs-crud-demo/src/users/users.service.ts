import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CreateUserData {
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Sangeetha',
      email: 'sangeetha@example.com',
    },
  ];

  private nextId = 2;

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} was not found`);
    }

    return user;
  }

  create(data: CreateUserData): User {
    const newUser: User = {
      id: this.nextId,
      name: data.name,
      email: data.email,
    };

    this.nextId += 1;
    this.users.push(newUser);

    return newUser;
  }

  update(id: number, data: Partial<CreateUserData>): User {
    const user = this.findOne(id);

    if (data.name !== undefined) {
      user.name = data.name;
    }

    if (data.email !== undefined) {
      user.email = data.email;
    }

    return user;
  }

  remove(id: number): User {
    const user = this.findOne(id);
    this.users = this.users.filter((item) => item.id !== id);

    return user;
  }
}
