import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Hist_Patrocinio } from './hist_patrocinio.entity';

@Entity({ name: 'agjdonacion' })
export class Donacion {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        ()=> Hist_Patrocinio,
        (hist_patrocinio) => hist_patrocinio.donaciones,
    )
    hist_patrocinio: Hist_Patrocinio

    @Column('date')
    fecha: string;

    @Column('int')
    montoR$: number;
}

