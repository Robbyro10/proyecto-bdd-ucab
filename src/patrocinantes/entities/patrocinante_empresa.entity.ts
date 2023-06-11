import { Telefono } from "src/telefonos/entities/telefono.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hist_Patrocinio } from "./hist_patrocinio.entity";

@Entity({ name: 'Patrocinante_empresa' })
export class Patrocinante_empresa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('text')
    email_contacto: string;

    @Column('text')
    mision: string;

    @OneToMany(
        () => Hist_Patrocinio,
        (hist_patrocinio) => hist_patrocinio.empresa
    )
    hist_patrocinio: Hist_Patrocinio[];

    @OneToMany(
        () => Telefono,
        (telefono) => telefono.empresa
    )
    telefonos: Telefono[];
}

