import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [PrismaModule, UserModule, ConfigModule.forRoot(), RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
