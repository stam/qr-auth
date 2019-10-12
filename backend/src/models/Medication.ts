import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Medication {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ type: 'datetime', nullable: true })
    scanned_at: Date;
}
