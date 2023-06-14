import { Entity, JoinColumn, JoinTable, ManyToOne, PrimaryColumn } from 'typeorm';
import { Hist_Int } from './hist_int.entity';
import { Rol } from './rol.entity';

@Entity({ name: 'agjorg_carnaval' })
export class Org_carnaval {
  
  @PrimaryColumn('int')
  año: number;

  @PrimaryColumn('int')
  agjid_rol:number;

  @PrimaryColumn('int')
  agjidhist_int:number;

  @ManyToOne(
    () => Rol, 
    (rol) => rol.org_carnaval)
  rol: Rol;

  @ManyToOne(
    () => Hist_Int, 
    (hist) => hist.org_carnaval)
  hist_int: Hist_Int;
}


/*-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."agjorg_carnaval" (
    "año" int4 NOT NULL,
    "id_rol" int4 NOT NULL,
    "histIntFechaIni" date NOT NULL,
    "histIntAgjidEscuela" int4 NOT NULL,
    "histIntAgjidIntegrante" int4 NOT NULL,
    CONSTRAINT "FK_8f1ab45d6384f942c35098b5536" FOREIGN KEY ("histIntFechaIni","histIntAgjidEscuela","histIntAgjidIntegrante") REFERENCES "public"."agjhist_int"("fecha_ini","agjid_escuela","agjid_integrante"),
    CONSTRAINT "FK_eae5e0de1a8504418bc543bca27" FOREIGN KEY ("id_rol") REFERENCES "public"."agjrol"("id"),
    PRIMARY KEY ("año","id_rol","histIntFechaIni","histIntAgjidEscuela","histIntAgjidIntegrante")
);*/