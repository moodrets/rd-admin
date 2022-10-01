import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateUpdatePageDto {
    @IsOptional()
    @IsString()
    page_title: string;

    @IsOptional()
    @IsString()
    page_description: string;

    @IsString()
    path: string;

    @IsOptional()
    @IsString()
    redirect: string;

    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    content: string;

    @IsOptional()
    @IsString()
    template_filename: string;

    @IsOptional()
    @IsString()
    scripts: string;

    @IsOptional()
    @IsString()
    styles: string;

    @IsOptional()
    @IsBoolean()
    hidden: boolean | 0 | 1;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    menus: number[];
}
