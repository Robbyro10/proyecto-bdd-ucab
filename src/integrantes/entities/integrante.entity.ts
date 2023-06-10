import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Hist_Int } from "./hist_int.entity";
import { Habilidad } from "./habilidad.entity";

enum Genero {
    Masculino = "M",
    Femenino = "F",
}

@Entity({ name: 'Integrantes' })
export class Integrante {
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

    @Column({
        type: "enum",
        enum: Genero
    })
    genero: string;

    @Column({
        type: 'text',
        nullable: true
    })
    apodo: string;

    @Column('text')
    nacionalidad: string;

    @OneToMany(
        ()=> Hist_Int,
        (hist) => hist.integrante
    )
    hist_int: Hist_Int[];

    @ManyToMany(() => Habilidad, (habilidad) => habilidad.integrantes)
    @JoinTable({
        name: 'Int_hab'
    })
    habilidades: Habilidad[];
}
