import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}
  @Get('api/vi/health')
  async viHealth() {
    return '230614';
  }
  @Get('vi/health')
  async viHealth2() {
    return '230614';
  }

  @Get('/api/gitprovider')
  async gitprovider() {
    const data = await this.prisma.coverage.findFirst({
      where: {
        id: '1',
      },
    });

    // this.prisma.coverage.create({
    //   data: {
    //     buildID: '1',
    //     statementsTotal: 1,
    //   },
    // });

    return this.prisma.gitProvider.findMany({
      where: {
        name: 'gitlab',
        url: 'https://gitlab.com',
        disabled: false,
      },
    });
  }
}
