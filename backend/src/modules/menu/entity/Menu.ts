import { Page } from 'src/modules/page/entity/Page';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Menu {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToMany((type) => Page, (page) => page.id)
	page_ids: number[];

	@Column()
	name: string;

	@Column({ type: 'json', nullable: true, default: null })
	data_json: string;

	@Column({ type: 'boolean', default: false })
	global: boolean;
}
