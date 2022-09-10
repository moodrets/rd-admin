import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menu } from 'src/modules/menu/entity/Menu';
import { MenuService } from 'src/modules/menu/menu.service';
import { Page } from 'src/modules/page/entity/Page';
import { PageController } from './page.controller';
import { PageService } from './page.service';

@Module({
	imports: [TypeOrmModule.forFeature([Page, Menu])],
	controllers: [PageController],
	providers: [PageService, MenuService],
})
export class PageModule {}
