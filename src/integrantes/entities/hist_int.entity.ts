import { Escuela_Samba } from "src/escuelas/entities/escuela_samba.entity";
import { Ganador } from "src/escuelas/entities/ganador.entity";
import { Samba } from "src/samba/entities/samba.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Integrante } from "./integrante.entity";
import { Org_carnaval } from "./org_carnaval.entity";

@Entity({ name: 'Hist_Int' })
export class Hist_Int {

    //todo: must be date
    @PrimaryGeneratedColumn()
    fecha_ini: number;
    
    @Column({
        type: 'date',
        nullable: true
    })
    fecha_fin: number;

    @Column('text')
    autoridad: string;

    @ManyToOne(
        () => Escuela_Samba,
        (escuela) => escuela.hist_int)
    escuela: Escuela_Samba;

    @ManyToOne(
        () => Integrante,
        (integrante) => integrante.hist_int)
    @JoinColumn({ name: 'Id_Integrante' })
    integrante: Integrante;

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
