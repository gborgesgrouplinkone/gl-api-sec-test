import { Injectable, Logger } from '@nestjs/common';
import { IGLService } from './igl.service';
import { GLPaylaod } from './gl.payload';
import autocannon from 'autocannon';

@Injectable()
export class GLService implements IGLService{
  private readonly logger = new Logger(GLService.name);

  async test(payload: GLPaylaod): Promise<void> {
    this.logger.log(`Teste iniciado no URL: ${payload.url}`);

    const instance = autocannon(
      {
        url: payload.url,
        connections: 200,  
        duration: 60,     
        pipelining: 10
      },
      (err, result) => {
        if (err) {
          this.logger.error('Erro durante o teste:', err);
        } else {
          this.logger.log(`Teste concluído:`);
          this.logger.log(`Requisições/segundo: ${result.requests.average}`);
          this.logger.log(`Latência média: ${result.latency.average} ms`);
          this.logger.log(`Erros: ${result.errors}`);
        }
      },
    );

  
    autocannon.track(instance, {
      renderProgressBar: true,
      renderResultsTable: true,
      renderLatencyTable: true,
    });
  }
}
