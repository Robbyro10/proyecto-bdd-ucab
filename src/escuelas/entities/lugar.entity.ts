import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Escuela_Samba } from "./escuela_samba.entity";
import { Premio_especial } from "./premio_especial.entity";

@Entity({ name: 'agjlugar' })
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
    escuelas: Escuela_Samba[]

    @OneToMany(
        () => Premio_especial,
        (premio) => premio.lugar)
    premio_especial: Premio_especial[]
}
