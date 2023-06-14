import { Hist_Int } from "src/integrantes/entities/hist_int.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Escuela_Samba } from "./escuela_samba.entity";
import { Premio_especial } from "./premio_especial.entity";

@Entity({ name: 'agjganador' })
export class Ganador {
    @PrimaryColumn('int')
    año: number;

    @ManyToOne(
        () => Escuela_Samba,
        (escuela) => escuela.ganadores
    )
    escuela: Escuela_Samba;

    @ManyToOne(
        () => Premio_especial,
        (premio) => premio.ganadores
    )
    premio: Premio_especial;

    @ManyToOne(
        () => Hist_Int,
        (hist) => hist.ganadores,
    )
    hist_int: Hist_Int;

}
