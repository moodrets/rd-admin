import { Body, Controller, Delete, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { CreateUpdatePageDto } from 'src/modules/page/dto/CreateUpdatePage.dto';
import { PageService } from 'src/modules/page/page.service';

@Controller('page')
export class PageController {
	constructor(private readonly pageService: PageService) {}

	@HttpCode(200)
	@Get('byPath')
	async getByPath(@Query('path') path: string) {
		return await this.pageService.getByPath(path);
	}

	@HttpCode(200)
	@Get('byId/:id')
	async getPageById(@Param('id') id: number) {
		return await this.pageService.getPageById(id);
	}

	@HttpCode(200)
	@Delete('byId/:id')
	async delete(@Param('id') id: number) {
		return await this.pageService.delete(id);
	}

	@HttpCode(200)
	@Get('list')
	async getList() {
		return await this.pageService.getList();
	}

	@HttpCode(200)
	@Post('create')
	async createPage(@Body() dto: CreateUpdatePageDto) {
		return await this.pageService.create(dto);
	}
}
