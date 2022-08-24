import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreatePageDto {
	@IsOptional()
	@IsString()
	page_title?: string;

	@IsOptional()
	@IsString()
	page_description?: string;

	@IsString()
	path: string;

	@IsString()
	title: string;

	@IsOptional()
	@IsString()
	template_filename?: string;

	@IsOptional()
	@IsString()
	scripts?: string;

	@IsOptional()
	@IsString()
	styles?: string;

	@IsOptional()
	@IsBoolean()
	hidden?: boolean;
}
