import { Module } from '@nestjs/common';
import { MenuController } from 'src/modules/menu/menu.controller';
import { MenuService } from 'src/modules/menu/menu.service';
@Module({
    imports: [],
    controllers: [MenuController],
    providers: [MenuService],
})
export class MenuModule {}
