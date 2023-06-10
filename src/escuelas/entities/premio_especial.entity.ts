import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Lugar } from "./lugar.entity";

@Entity({ name: 'Premio_especial' })
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

}