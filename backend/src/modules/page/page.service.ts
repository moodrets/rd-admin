import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { MenuService } from 'src/modules/menu/menu.service';
import { CreateUpdatePageDto } from 'src/modules/page/dto/CreateUpdatePage.dto';
import {
    PAGE_CREATED,
    PAGE_DELETED,
    PAGE_NOT_FOUND,
    PAGE_UPDATED,
    PAGE_URL_EXIST,
} from 'src/modules/page/messages/messages';

@Injectable()
export class PageService {
    constructor(@InjectConnection() private readonly knex: Knex, private menuService: MenuService) {}

    async getAppPage(path: string) {
        if (!path) {
            throw new NotFoundException(HttpStatus.NOT_FOUND, PAGE_NOT_FOUND);
        }

        let page = await this.knex('pages').select('*').where({ path, hidden: false });
        page = page[0];

        // const menus = [];
        // const globalMenus = await this.menuService.getGlobalMenus();
        // menus.push(...globalMenus);

        return {
            page,
            // menus,
        };
    }

    async getByPath(path: string): Promise<any> {
        let page = await this.knex('pages').select('*').where({ path });
        page = page[0];
        return page;
    }

    async getPageById(id: number) {
        let page = await this.knex('pages').select('*').where({ id });
        page = page[0];
        if (page) {
            return page;
        }
        throw new HttpException(PAGE_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    async getList() {
        return this.knex('pages').select('*').limit(10);
    }

    async create(dto: CreateUpdatePageDto) {
        const existPage = await this.getByPath(dto.path);
        if (existPage) {
            throw new HttpException(PAGE_URL_EXIST, HttpStatus.CONFLICT);
        }
        const createdPage = await this.knex('pages').insert(dto);
        if (createdPage) {
            throw new HttpException(PAGE_CREATED, HttpStatus.OK);
        }
    }

    async delete(id: number) {
        const response = await this.knex('pages').where({ id }).del();
        if (!response) {
            throw new HttpException(PAGE_NOT_FOUND, HttpStatus.NOT_FOUND);
        }
        throw new HttpException(PAGE_DELETED, HttpStatus.OK);
    }

    async update(dto: CreateUpdatePageDto) {
        const updatedPage = await this.knex('pages').update(dto).where({ path: dto.path });
        if (updatedPage) {
            throw new HttpException(PAGE_UPDATED, HttpStatus.OK);
        }
    }
}
