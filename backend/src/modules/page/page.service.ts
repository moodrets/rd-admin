import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePageDto } from 'src/modules/page/dto/CreatePage.dto';
import { Page } from 'src/modules/page/entity/Page';
import { PAGE_URL_EXIST } from 'src/modules/page/messages/error-messages';
import { Repository } from 'typeorm';

@Injectable()
export class PageService {
	constructor(
		@InjectRepository(Page)
		private pageRepository: Repository<Page>
	) {}

	async getAll() {
		return await this.pageRepository.find({
			take: 10,
		});
	}

	async getPageByUrlApp(path: string): Promise<Page> {
		return await this.pageRepository.findOne({
			select: {
				title: true,
				page_title: true,
				page_description: true,
				path: true,
				template_filename: true,
				scripts: true,
				styles: true,
				settings_json: true,
			},
			where: {
				path,
			},
		});
	}

	async getPageByUrlAdmin(path: string): Promise<Page> {
		return await this.pageRepository.findOneBy({ path });
	}

	async create(dto: CreatePageDto): Promise<Page> {
		const existPage = await this.getPageByUrlAdmin(dto.path);
		if (existPage) {
			throw new HttpException(PAGE_URL_EXIST, HttpStatus.CONFLICT);
		}
		return await this.pageRepository.save(dto);
	}
}
