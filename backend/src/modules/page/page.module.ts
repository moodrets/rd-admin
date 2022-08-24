import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from 'src/modules/page/entity/Page';
import { PageController } from './page.controller';
import { PageService } from './page.service';

@Module({
	imports: [TypeOrmModule.forFeature([Page])],
	controllers: [PageController],
	providers: [PageService],
})
export class PageModule {}
