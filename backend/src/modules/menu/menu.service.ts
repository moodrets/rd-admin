import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { CreateUpdateMenuDto } from 'src/modules/menu/dto/CreateUpdateMenu.dto';
import { MENU_NAME_EXIST, MENU_CREATED } from 'src/modules/menu/messages/messages';
import { MenuModel } from 'src/modules/menu/models/MenuModel';

@Injectable()
export class MenuService {
    constructor(@InjectConnection() private readonly knex: Knex) {}

    async create(dto: CreateUpdateMenuDto) {
        const existMenu = await this.getByName(dto.name);
        if (existMenu) {
            throw new HttpException(MENU_NAME_EXIST, HttpStatus.CONFLICT);
        }
        const createMenuData = {
            title: dto.title,
            name: dto.name,
            global: dto.global,
            hidden: dto.hidden,
        };

        const createMenu = await this.knex('menus').insert(createMenuData);

        if (dto.pages && dto.pages.length) {
            let getCreatedMenu = await this.getByName(dto.name);
            if (getCreatedMenu) {
                dto.pages.forEach(async (page_id) => {
                    await this.knex('pages_menus').insert({
                        menu_id: getCreatedMenu.id,
                        page_id,
                    });
                });
            }
        }

        if (createMenu) {
            throw new HttpException(MENU_CREATED, HttpStatus.OK);
        }
    }

    async getByName(name: string) {
        let res = await this.knex('menus').select('*').where({ name });
        let menu = res[0];
        return menu;
    }

    async getGlobalMenus() {
        return this.knex('menus').select('*').where({ global: true });
    }
}
