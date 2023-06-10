import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Escuela_Samba } from "./escuela_samba.entity";

@Entity({ name: 'Lugar' })
export class Lugar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('text')
    tipo: string;

    @ManyToOne(() => Lugar, (lugar) => lugar.lugar_hijo)
    id_lugar_padre: Lugar

    @OneToMany(() => Lugar, (lugar) => lugar.id_lugar_padre)
    lugar_hijo: Lugar[]

    @OneToMany(
        () => Escuela_Samba,
        (escuela) => escuela.lugar)
    escuela_samba: Escuela_Samba[]
}
