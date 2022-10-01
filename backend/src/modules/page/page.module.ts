import { Module } from '@nestjs/common';
import { MenuService } from 'src/modules/menu/menu.service';
import { PageController } from './page.controller';
import { PageService } from './page.service';

@Module({
    imports: [],
    controllers: [PageController],
    providers: [PageService, MenuService],
})
export class PageModule {}
