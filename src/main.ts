import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GLService } from './services/gl.service';

(async () =>  {
  
    const context = await NestFactory.createApplicationContext(AppModule, {
      logger: ['error', 'log'],
    });

    await context.get(GLService).test({ 
        url: '[PREENCHER COM O ENDPOINT AQUI]'
    });
    
    await context.close();
})();

