import { Menu } from 'src/modules/menu/entity/Menu';
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class MenuItem {
	@PrimaryGeneratedColumn()
	id: number;
	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToOne((type) => Menu, (menu) => menu.id)
	menu_id: number;

	@Column()
	parent_id: number;

	@Column()
	url: string;

	@Column()
	title: string;

	@Column()
	icon: string;

	@Column({ type: 'json', nullable: true, default: null })
	data_json: string;
}
