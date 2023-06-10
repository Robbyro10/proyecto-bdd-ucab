import { Escuela_Samba } from "src/escuelas/entities/escuela_samba.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Integrante } from "./integrante.entity";

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
    integrante: Integrante;


}
