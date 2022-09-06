import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUpdateMenuDto } from 'src/modules/menu/dto/CreateUpdateMenu.dto';
import { Menu } from 'src/modules/menu/entity/Menu';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
	constructor(
		@InjectRepository(Menu)
		private menuRepository: Repository<Menu>
	) {}

	async create(dto: CreateUpdateMenuDto) {
		return await this.menuRepository.save(dto);
	}
}
