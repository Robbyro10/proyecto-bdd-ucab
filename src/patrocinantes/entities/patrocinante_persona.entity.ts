import { Telefono } from "src/telefonos/entities/telefono.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hist_Patrocinio } from "./hist_patrocinio.entity";

@Entity({ name: 'Patrocinante_persona' })
export class Patrocinante_persona {
    @PrimaryGeneratedColumn()
    id_escuela: number;

    @Column({
        type: 'int',
        nullable: true,
        unique: true
    })
    doc_identidad: number;

    @Column('text')
    primer_nombre: string;

    @Column({
        type: 'text',
        nullable: true
    })
    segundo_nombre: string;

    @Column('text')
    primer_apellido: string;

    @Column('text')
    segundo_apellido: string;

    @Column('date')
    fecha_nac: string;

    @Column('text')
    email_contacto: string;

    @OneToMany(
        () => Hist_Patrocinio,
        (hist_patrocinio) => hist_patrocinio.persona
    )
    hist_patrocinio: Hist_Patrocinio[]

    @OneToMany(
        () => Telefono,
        (telefono) => telefono.persona
    )
    telefonos: Telefono[];
}

