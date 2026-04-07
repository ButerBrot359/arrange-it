import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma/client';
import { UserUpdateInput } from 'generated/prisma/models';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  async findById(id: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  async update(id: string, data: UserUpdateInput): Promise<User> {
    return this.prismaService.user.update({ data, where: { id } });
  }

  async remove(id: string): Promise<User> {
    return this.prismaService.user.delete({ where: { id } });
  }
}
