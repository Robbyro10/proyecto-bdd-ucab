import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lugar } from "./lugar.entity";
import { Hist_Titulo_Carnaval } from "./Hist_Titulo_Carnaval.entity";
import { Evento_Anual_Sem } from "./evento_anual_sem.entity";
import { Color } from "./color.entity";
import { Hist_Int } from "src/integrantes/entities/hist_int.entity";
import { Hist_Patrocinio } from "src/patrocinantes/entities/hist_patrocinio.entity";
import { Telefono } from "src/telefonos/entities/telefono.entity";
import { Ganador } from "./ganador.entity";

@Entity({ name: 'agjescuela_samba' })
export class Escuela_Samba {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('text')
    direccion_sede: string;

    @Column('text')
    resumen_hist: string;

    @ManyToOne(
        () => Lugar,
        (lugar) => lugar.escuelas)
    @JoinColumn({ name: 'id_lugar' })
    lugar: Lugar

    @OneToMany(
        () => Hist_Titulo_Carnaval,
        (hist_titulo_carnaval) => hist_titulo_carnaval.escuela
    )
    hist_titulo_carnaval: Hist_Titulo_Carnaval[];

    @OneToMany(
        () => Evento_Anual_Sem,
        (evento) => evento.escuela
    )
    eventos: Evento_Anual_Sem[]

    @OneToMany(
        () => Hist_Int,
        (hist) => hist.escuela
    )
    hist_int: Hist_Int[]

    @ManyToMany(() => Color, (color) => color.escuelas)
    @JoinTable({
        name: 'agje_c'
    })
    colores: Color[]

    @OneToMany(
        () => Hist_Patrocinio,
        (hist) => hist.escuela
    )
    hist_patrocinio: Hist_Patrocinio[]

    @OneToMany(
        () => Telefono,
        (telefono) => telefono.escuela
    )
    telefonos: Telefono[];

    @OneToMany(
        () => Telefono,
        (telefono) => telefono.escuela
    )
    ganadores: Ganador[];

}
