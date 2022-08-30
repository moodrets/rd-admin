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
	page: Page[];

	@Column()
	name: string;

	@Column({ type: 'json', nullable: true, default: null })
	data_json: string;

	@Column({ type: 'boolean', default: false })
	global: boolean;
}

/*
menu    
    id
    parent_id
    created_at
    updated_at
    page
    name
    data_json
    global
*/
