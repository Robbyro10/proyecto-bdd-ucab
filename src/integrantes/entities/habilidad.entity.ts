import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Habilidad' })
export class Habilidad {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;
}
