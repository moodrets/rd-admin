import { Type } from 'class-transformer';
import { IsBoolean, IsJSON, IsOptional, IsString } from 'class-validator';
import { CreateUpdatePageDto } from 'src/modules/page/dto/CreateUpdatePage.dto';

export class CreateUpdateMenuDto {
	@Type(() => CreateUpdatePageDto)
	pages: number[];

	@IsString()
	title: string;

	@IsString()
	name: string;

	@IsOptional()
	@IsBoolean()
	global: boolean;

	@IsOptional()
	@IsBoolean()
	hidden: boolean;
}
