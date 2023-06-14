import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Escuela_Samba } from "./escuela_samba.entity";

@Entity({ name: 'agjevento_anual_sem' })
export class Evento_Anual_Sem {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn('int')
    agjid_escuela:number;

    @ManyToOne(
        () => Escuela_Samba,
        (escuela) => escuela.eventos
    )
    @JoinColumn({name:"agjid_escuela"})
    escuela: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('date')
    fecha_ini: string;

    @Column('date')
    fecha_fin: string;

    @Column('text')
    tipo: string;

    @Column('int')
    total_asistentes: number;

    @Column('int')
    costo_unitario_r$: number;

    @Column({
        type: 'text',
        nullable: true
    })
    descripcion: string;
}
