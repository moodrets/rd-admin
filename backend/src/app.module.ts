import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PageModule } from './modules/page/page.module';
import { MenuModule } from './modules/menu/menu.module';

// db tables
import { Page } from 'src/modules/page/entity/Page';
import { Menu } from 'src/modules/menu/entity/Menu';
import { MenuItem } from 'src/modules/menu/entity/MenuItem';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3308,
			username: 'root',
			password: 'root',
			database: 'rd_admin',
			entities: [Page, Menu, MenuItem],
			synchronize: true,
		}),
		ConfigModule.forRoot({
			envFilePath: '../../.env',
		}),
		PageModule,
		MenuModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
