import { IsArray, IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';

export class CreateUpdateMenuDto {
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

    @IsOptional()
    @IsArray()
    pages: number[];
}
