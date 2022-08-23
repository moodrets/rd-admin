import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Page {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@Column('text')
	page_title;

	@Column('text')
	page_description;

	@Column()
	url: string;

	@Column()
	name: string;

	@Column()
	layout: string;

	@Column('longtext')
	scripts: string;

	@Column('longtext')
	styles: string;
}
