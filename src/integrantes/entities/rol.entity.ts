import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Rol' })
export class Rol {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('text')
    descripcion: string;
}
