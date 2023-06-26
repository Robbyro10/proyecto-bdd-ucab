import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Escuela_Samba } from "./escuela_samba.entity";

enum Grupo {
    Acceso = "A",
    B = "B",
    C = "C",
    Femenino = "Ac",
    Especiales = "E",
    Uno = "1",
    Dos = "2",
    Tres = "3",
}

@Entity({ name: 'agjhist_título_carnaval' })
export class Hist_Titulo_Carnaval {
    @PrimaryColumn('int')
    año: number;

    @PrimaryColumn('int')
    agjid_escuela:number;

    @ManyToOne(
        () => Escuela_Samba,
        (escuela) => escuela.hist_titulo_carnaval)
    @JoinColumn({name:'agjid_escuela'})
    escuela: Escuela_Samba;

    @Column({
        type: 'enum',
        enum: Grupo,
        nullable: true
    })
    grupo: string;

    @Column({
        type: 'int',
        nullable: true
    })
    monto_ganado: number;
}
