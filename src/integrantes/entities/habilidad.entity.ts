import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Integrante } from "./integrante.entity";

@Entity({ name: 'Habilidad' })
export class Habilidad {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @ManyToMany(() => Integrante, (integrante) => integrante.habilidades)
    integrantes: Integrante[];
}
