import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Hist_Patrocinio } from "./hist_patrocinio.entity";

@Entity({ name: 'Donacion' })
export class Donacion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    fecha: string;

    @Column('int')
    montoR$: number;

    @ManyToOne(
        ()=> Hist_Patrocinio,
        (hist_patrocinio) => hist_patrocinio.donaciones,
    )
    hist_patrocinio: Hist_Patrocinio
}

