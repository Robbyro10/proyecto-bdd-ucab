import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Escuela_Samba } from "./escuela_samba.entity";

@Entity({ name: 'Evento_Anual_Sem' })
export class Evento_Anual_Sem {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        () => Escuela_Samba,
        (escuela) => escuela.eventos
    )
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
