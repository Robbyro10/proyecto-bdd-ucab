import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Integrante } from "./integrante.entity";

@Entity({ name: 'agjhabilidad' })
export class Habilidad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombre: string;

    @ManyToMany(() => Integrante, (integrante) => integrante.habilidades)
    integrantes: Integrante[];
}
