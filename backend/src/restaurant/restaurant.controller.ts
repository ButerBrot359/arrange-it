import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Post()
  async create(@Body() data: { name: string; address: string }) {
    return this.restaurantService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { name?: string; address?: string },
  ) {
    return this.restaurantService.update(id, data);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.restaurantService.findById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }
}
