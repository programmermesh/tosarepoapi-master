import {
  ExceptionFilter,
  Catch,
  HttpException,
  ArgumentsHost,
  Logger,
} from '@nestjs/common';

@Catch()
export class HttpErrorFIlter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    const errorResponse = {
      code: status,
      timestamp: new Date().toLocaleDateString(),
      path: request.url,
      method: request.method,
      message: exception['response'].error || exception.message || null,
    };

    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );

    response.status(status).json(errorResponse);
  }
}
