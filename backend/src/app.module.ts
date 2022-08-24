import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from 'src/modules/page/entity/Page';
import { PageModule } from './modules/page/page.module';

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
		PageModule,
		ConfigModule.forRoot({
			envFilePath: '../../.env',
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
