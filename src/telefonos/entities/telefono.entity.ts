import { Column, Entity, PrimaryColumn,  } from "typeorm";

@Entity({ name: 'Telefono' })
export class Telefono {
    @PrimaryColumn('int')
    cod_int: number;

    @PrimaryColumn('int')
    cod_area: number;

    @PrimaryColumn('int')
    numero: number;

    // Id_escuela

    //Id_Patrocinante_empresa

    // Id_patrocinante_persona

}