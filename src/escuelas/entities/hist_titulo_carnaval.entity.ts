import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Escuela_Samba } from "./escuela_samba.entity";

enum Grupo {
    Acceso = "A",
    Femenino = "Ac",
    Especiales = "E",
    Uno = "1",
}

@Entity({ name: 'Hist_Título_Carnaval' })
export class Hist_Titulo_Carnaval {
    @PrimaryGeneratedColumn()
    año: number;

    @Column({
        type: 'enum',
        enum: Grupo
    })
    grupo: string;

    @Column('int')
    monto_ganado: number;

    @ManyToOne(
        () => Escuela_Samba,
        (escuela) => escuela.hist_titulo_carnaval)
    escuela: Escuela_Samba;
}
