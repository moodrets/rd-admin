import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from 'src/modules/page/entity/Page';
import { PageModule } from './modules/page/page.module';
import { MenuModule } from './modules/menu/menu.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3308,
			username: 'root',
			password: 'root',
			database: 'rd_admin',
			entities: [Page],
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
