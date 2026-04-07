import { Injectable } from '@nestjs/common';
import { Prisma, Restaurant } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RestaurantService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.RestaurantCreateInput): Promise<Restaurant> {
    return this.prismaService.restaurant.create({ data });
  }

  async update(
    id: string,
    data: Prisma.RestaurantUpdateInput,
  ): Promise<Restaurant> {
    return this.prismaService.restaurant.update({ data, where: { id } });
  }

  async findById(id: string): Promise<Restaurant | null> {
    return this.prismaService.restaurant.findUnique({ where: { id } });
  }

  async remove(id: string): Promise<Restaurant> {
    return this.prismaService.restaurant.delete({ where: { id } });
  }
}
