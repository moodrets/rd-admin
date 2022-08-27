import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUpdatePageDto } from 'src/modules/page/dto/CreateUpdatePage.dto';
import { Page } from 'src/modules/page/entity/Page';
import { PAGE_NOT_FOUND, PAGE_URL_EXIST } from 'src/modules/page/messages/error-messages';
import { PAGE_CREATED, PAGE_DELETED, PAGE_UPDATED } from 'src/modules/page/messages/success-messages';
import { Repository } from 'typeorm';

@Injectable()
export class PageService {
	constructor(
		@InjectRepository(Page)
		private pageRepository: Repository<Page>
	) {}

	async getByPath(path: string): Promise<Page> {
		return await this.pageRepository.findOne({
			select: {
				title: true,
				page_title: true,
				page_description: true,
				path: true,
				template_filename: true,
				scripts: true,
				styles: true,
				json_data: true,
				redirect: true,
			},
			where: {
				path,
				hidden: false,
			},
		});
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
		const response = await this.getByPath(dto.path);
		if (response) {
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
