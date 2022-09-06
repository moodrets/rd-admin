import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUpdateMenuDto } from 'src/modules/menu/dto/CreateUpdateMenu.dto';
import { MenuService } from 'src/modules/menu/menu.service';

@Controller('menu')
export class MenuController {
	constructor(private menuService: MenuService) {}

	@HttpCode(201)
	@Post('create')
	async create(@Body() dto: CreateUpdateMenuDto) {
		return this.menuService.create(dto);
	}
}
