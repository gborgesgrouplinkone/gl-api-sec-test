import { Module } from '@nestjs/common';
import { GLService } from './services/gl.service';

@Module({
  providers: [GLService],
  exports: [GLService],
})
export class AppModule {}