import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { CreatePageDto } from 'src/modules/page/dto/CreatePage.dto';
import { PageService } from 'src/modules/page/page.service';

@Controller('page')
export class PageController {
	constructor(private readonly pageService: PageService) {}

	@HttpCode(200)
	@Get('get')
	async getPageByUrlApp(@Query('path') path: string) {
		return await this.pageService.getPageByUrlApp(path);
	}

	@HttpCode(200)
	@Get('get-all')
	async getAll() {
		return await this.pageService.getAll();
	}

	@HttpCode(200)
	@Post('create')
	async createPage(@Body() dto: CreatePageDto) {
		return await this.pageService.create(dto);
	}
}
