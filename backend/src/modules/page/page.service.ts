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

	async getRoutes(): Promise<Page[]> {
		return await this.pageRepository.find({
			select: {
				path: true,
				template_filename: true,
				title: true,
				page_title: true,
				page_description: true,
			},
			where: {
				hidden: false,
			},
		});
	}

	async getAll() {
		return await this.pageRepository.find();
	}

	async findPageByUrl(path: string): Promise<Page> {
		return await this.pageRepository.findOneBy({ path });
	}

	async create(dto: CreatePageDto): Promise<Page> {
		const existPage = await this.findPageByUrl(dto.path);
		if (existPage) {
			throw new HttpException(PAGE_URL_EXIST, HttpStatus.CONFLICT);
		}
		return await this.pageRepository.save(dto);
	}
}
