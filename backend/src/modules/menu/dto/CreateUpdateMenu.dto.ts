import { Type } from 'class-transformer';
import { IsJSON, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateUpdatePageDto } from 'src/modules/page/dto/CreateUpdatePage.dto';

export class CreateUpdateMenuDto {
	@Type(() => CreateUpdatePageDto)
	pages: number[];

	@IsString()
	title: string;

	@IsString()
	name: string;

	@IsOptional()
	@IsJSON()
	data_json: string;

	@IsOptional()
	@IsJSON()
	global: boolean;

	@IsOptional()
	@IsJSON()
	hidden: boolean;
}
