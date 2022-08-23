import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('/pages')
	getAllPages(): any[] {
		return [
			{ url: '/', page_title: 'Главная', layout: 'SimplePage' },
			{ url: '/about', page_title: 'О нас', layout: 'SimplePage' },
			{ url: '/contacts', page_title: 'Контакты', layout: 'SimplePage' },
		];
	}
}
