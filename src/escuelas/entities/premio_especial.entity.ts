import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ganador } from "./ganador.entity";
import { Lugar } from "./lugar.entity";

@Entity({ name: 'agjpremio_especial' })
export class Premio_especial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('text')
    descripcion: string;

    @Column('text')
    tipo: string;

    @ManyToOne(
        ()=> Lugar,
        (lugar)=> lugar.premio_especial 
    )
    lugar: Lugar;

    @OneToMany(
        ()=> Ganador,
        (ganador) => ganador.premio
    )
    ganadores: Ganador[];

}