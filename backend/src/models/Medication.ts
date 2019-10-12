import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Medication {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column({ type: 'datetime', nullable: true })
    scanned_at: Date;
}
