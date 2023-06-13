import { Escuela_Samba } from "src/escuelas/entities/escuela_samba.entity";
import { Ganador } from "src/escuelas/entities/ganador.entity";
import { Samba } from "src/samba/entities/samba.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Integrante } from "./integrante.entity";
import { Org_carnaval } from "./org_carnaval.entity";

@Entity({ name: 'agjhist_int' })
export class Hist_Int {

    @PrimaryColumn('date')
    fecha_ini: number;
    
    @ManyToOne(
        () => Escuela_Samba,
        (escuela) => escuela.hist_int)
    escuela: Escuela_Samba;

    @ManyToOne(
        () => Integrante,
        (integrante) => integrante.hist_int)
    @JoinColumn({ name: 'agjid_integrante' })
    integrante: Integrante;

    @Column('text')
    autoridad: string;

    @Column({
        type: 'date',
        nullable: true
    })
    fecha_fin: number;

    @ManyToMany(()=> Samba, (samba)=> samba.hist_int)
    samba: Samba[];

    @OneToMany(
        ()=> Org_carnaval,
        (org) => org.hist_int
    )
    org_carnaval: Org_carnaval[];

    @OneToMany(
        ()=> Ganador,
        (ganador) => ganador.hist_int
    )
    ganadores: Ganador[];
}
