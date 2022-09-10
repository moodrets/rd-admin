import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUpdateMenuDto } from 'src/modules/menu/dto/CreateUpdateMenu.dto';
import { Menu } from 'src/modules/menu/entity/Menu';
import { Repository } from 'typeorm';
import { MENU_NAME_EXIST } from 'src/modules/menu/messages/messages';

@Injectable()
export class MenuService {
	constructor(
		@InjectRepository(Menu)
		private menuRepository: Repository<Menu>
	) {}

	async create(dto: CreateUpdateMenuDto) {
		const existMenu = await this.getByName(dto.name);
		if (existMenu) {
			throw new HttpException(MENU_NAME_EXIST, HttpStatus.CONFLICT);
		}
		return await this.menuRepository.save(dto);
	}

	async getByName(name: string): Promise<Menu> {
		return await this.menuRepository.findOne({
			where: {
				name,
			},
		});
	}

	async getGlobalMenus(): Promise<{ [key: string]: Menu }> {
		const response = {};
		const menus = await this.menuRepository.find({
			select: {
				id: true,
				title: true,
				name: true,
				global: true,
			},
			where: {
				global: true,
				hidden: false,
			},
		});
		menus.forEach((menu: Menu) => {
			response[menu.name] = menu;
		});
		return response;
	}

	async getMenusByPage(id: number): Promise<{ [key: string]: Menu }> {
		const response = {};
		// const menus = await this.menuRepository.find({
		// 	select: {
		// 		id: true,
		// 		title: true,
		// 		name: true,
		// 		global: true,
		// 	},
		// 	where: {
		// 		global: true,
		// 		hidden: false,
		// 	},
		// });
		// menus.forEach((menu: Menu) => {
		// 	response[menu.name] = menu;
		// });
		return response;
	}
}
