import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUpdatePageDto } from 'src/modules/page/dto/CreateUpdatePage.dto';
import { PageService } from 'src/modules/page/page.service';

@Controller('page')
export class PageController {
    constructor(private readonly pageService: PageService) {}

    @HttpCode(200)
    @Get('byPath')
    async getAppPage(@Query('path') path: string) {
        return await this.pageService.getAppPage(path);
    }

    @HttpCode(200)
    @Get('get/:id')
    async getPageById(@Param('id') id: number) {
        return await this.pageService.getPageById(id);
    }

    @HttpCode(200)
    @Get('list')
    async getList() {
        return await this.pageService.getList();
    }

    @HttpCode(200)
    @Delete('delete/:id')
    async delete(@Param('id') id: number) {
        return await this.pageService.delete(id);
    }

    @HttpCode(201)
    @Put('update/:id')
    async update(@Body() dto: CreateUpdatePageDto) {
        return await this.pageService.update(dto);
    }

    @HttpCode(201)
    @Post('create')
    async createPage(@Body() dto: CreateUpdatePageDto) {
        return await this.pageService.create(dto);
    }
}
