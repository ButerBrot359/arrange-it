import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() data: { email: string; name: string }) {
    return this.userService.create(data);
  }
}
