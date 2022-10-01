import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PageModule } from './modules/page/page.module';
import { KnexModule } from 'nest-knexjs';
import { MenuModule } from 'src/modules/menu/menu.module';

@Module({
    imports: [
        KnexModule.forRoot({
            config: {
                client: 'mysql2',
                version: '8.0.30',
                connection: {
                    host: 'localhost',
                    user: 'root',
                    password: 'root',
                    database: 'rd_admin',
                    port: 3308,
                },
            },
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
