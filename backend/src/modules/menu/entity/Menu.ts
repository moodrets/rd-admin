import { Page } from 'src/modules/page/entity/Page';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Menu {
	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@ManyToMany(() => Page, (page) => page.id)
	@JoinTable()
	pages: number[];

	@Column()
	title: string;

	@Column({ unique: true })
	name: string;

	@Column({ type: 'boolean', default: false })
	global: boolean;

	@Column({ type: 'boolean', default: false })
	hidden: boolean;
}
