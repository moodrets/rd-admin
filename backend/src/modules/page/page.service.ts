import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuService } from 'src/modules/menu/menu.service';
import { CreateUpdatePageDto } from 'src/modules/page/dto/CreateUpdatePage.dto';
import { Page } from 'src/modules/page/entity/Page';
import {
	PAGE_CREATED,
	PAGE_DELETED,
	PAGE_NOT_FOUND,
	PAGE_UPDATED,
	PAGE_URL_EXIST,
} from 'src/modules/page/messages/messages';
import { Repository } from 'typeorm';

@Injectable()
export class PageService {
	constructor(
		@InjectRepository(Page)
		private pageRepository: Repository<Page>,
		private menuService: MenuService
	) {}

	async getAppPage(path: string) {
		const select = {
			title: true,
			page_title: true,
			page_description: true,
			path: true,
			layout_filename: true,
			scripts: true,
			styles: true,
			redirect: true,
			content: true,
		};

		let page = await this.pageRepository.findOne({
			select,
			where: {
				path,
				hidden: false,
			},
		});

		const globalMenus = await this.menuService.getGlobalMenus();

		const menus = {
			...globalMenus,
		};

		return {
			page,
			menus,
		};
	}

	async getByPath(path: string): Promise<any> {
		const page = await this.pageRepository.findOne({
			where: {
				path,
			},
		});
		return page;
	}

	async getPageById(id: number): Promise<Page> {
		const response = await this.pageRepository.findOneBy({ id });
		if (response) {
			return response;
		}
		throw new HttpException(PAGE_NOT_FOUND, HttpStatus.NOT_FOUND);
	}

	async getList() {
		return await this.pageRepository.find({
			take: 20,
		});
	}

	async create(dto: CreateUpdatePageDto) {
		const existPage = await this.getByPath(dto.path);

		if (existPage.page) {
			throw new HttpException(PAGE_URL_EXIST, HttpStatus.CONFLICT);
		}
		const createdPage = await this.pageRepository.save(dto);

		if (createdPage) {
			throw new HttpException(PAGE_CREATED, HttpStatus.OK);
		}
	}

	async delete(id: number) {
		const response = await this.pageRepository.delete({ id });
		if (!response.affected) {
			throw new HttpException(PAGE_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		throw new HttpException(PAGE_DELETED, HttpStatus.OK);
	}

	async update(dto: CreateUpdatePageDto) {
		const updatedPage = await this.pageRepository.save(dto);

		if (updatedPage) {
			throw new HttpException(PAGE_UPDATED, HttpStatus.OK);
		}
	}
}
