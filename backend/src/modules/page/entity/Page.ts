import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Page {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@Column({ type: 'text', nullable: true, default: null })
	page_title;

	@Column({ type: 'text', nullable: true, default: null })
	page_description;

	@Column({ unique: true })
	path: string;

	@Column({ nullable: true, default: null })
	redirect: string;

	@Column()
	title: string;

	@Column({ type: 'longtext', nullable: true, default: null })
	content: string;

	@Column({ default: 'default' })
	layout_filename: string;

	@Column({ type: 'longtext', nullable: true, default: null })
	scripts: string;

	@Column({ type: 'longtext', nullable: true, default: null })
	styles: string;

	@Column({ type: 'boolean', default: false })
	hidden: boolean;
}
