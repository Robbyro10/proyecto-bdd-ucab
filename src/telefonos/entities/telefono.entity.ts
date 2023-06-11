import { Escuela_Samba } from "src/escuelas/entities/escuela_samba.entity";
import { Patrocinante_empresa } from "src/patrocinantes/entities/patrocinante_empresa.entity";
import { Patrocinante_persona } from "src/patrocinantes/entities/patrocinante_persona.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({ name: 'Telefono' })
export class Telefono {
    @PrimaryColumn('int')
    cod_int: number;

    @PrimaryColumn('int')
    cod_area: number;

    @PrimaryColumn('int')
    numero: number;

    @ManyToOne(
        ()=> Escuela_Samba,
        (escuela) => escuela.telefono
    )
    escuela: Escuela_Samba

    @ManyToOne(
        ()=> Patrocinante_empresa,
        (empresa) => empresa.telefonos
    )
    empresa: Patrocinante_empresa;

    @ManyToOne(
        ()=> Patrocinante_persona,
        (persona) => persona.telefonos
    )
    @JoinColumn({ name: 'personaId' })
    persona: Patrocinante_persona;

}