import { Escuela_Samba } from "src/escuelas/entities/escuela_samba.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Patrocinante_empresa } from "./patrocinante_empresa.entity";
import { Patrocinante_persona } from "./patrocinante_persona.entity";
import { Donacion } from "./donacion.entity";

@Entity({ name: 'agjhist_patrocinio' })
export class Hist_Patrocinio {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn('int')
    agjid_escuela:number;

    @ManyToOne(
        ()=> Escuela_Samba,
        (escuela) => escuela.hist_patrocinio,
    )
    @JoinColumn({name:"agjid_escuela"})
    escuela: Escuela_Samba

    @ManyToOne(
        () => Patrocinante_empresa,
        (empresa) => empresa.hist_patrocinio)
    empresa: Patrocinante_empresa;

    @ManyToOne(
        () => Patrocinante_persona,
        (persona) => persona.hist_patrocinio)
    persona: Patrocinante_persona;

    @Column('date')
    fecha_ini: string;
    
    @Column({
        type: 'date',
        nullable: true
    })
    fecha_fin: number;

    
    @OneToMany(
        ()=> Donacion,
        (donacion) => donacion.hist_patrocinio
    )
    donaciones: Donacion[];
}


