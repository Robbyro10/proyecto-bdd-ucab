export const createTablesQuery = `
CREATE TABLE persons (
PersonID int,
LastName varchar(255),
FirstName varchar(255)
);

CREATE SEQUENCE IF NOT EXISTS agjlugar_id_seq;

CREATE TABLE "public"."agjlugar" (
    "id" int4 NOT NULL DEFAULT nextval('agjlugar_id_seq'::regclass),
    "nombre" text NOT NULL,
    "tipo" text NOT NULL,
    "idLugarPadreId" int4,
    CONSTRAINT "FK" FOREIGN KEY ("idLugarPadreId") REFERENCES "public"."agjlugar"("id"),
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjescuela_samba_id_seq;

CREATE TABLE "public"."agjescuela_samba" (
    "id" int4 NOT NULL DEFAULT nextval('agjescuela_samba_id_seq'::regclass),
    "nombre" text NOT NULL,
    "direccion_sede" text NOT NULL,
    "resumen_hist" text NOT NULL,
    "id_lugar" int4,
    CONSTRAINT "FK" FOREIGN KEY ("id_lugar") REFERENCES "public"."agjlugar"("id"),
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjevento_anual_sem_id_seq;

CREATE TABLE "public"."agjevento_anual_sem" (
    "id" int4 NOT NULL DEFAULT nextval('agjevento_anual_sem_id_seq'::regclass),
    "agjid_escuela" int4 NOT NULL,
    "nombre" text NOT NULL,
    "fecha_ini" date NOT NULL,
    "fecha_fin" date NOT NULL,
    "tipo" text NOT NULL,
    "total_asistentes" int4 NOT NULL,
    "costo_unitario_r$" int4 NOT NULL,
    "descripcion" text,
    CONSTRAINT "FK" FOREIGN KEY ("agjid_escuela") REFERENCES "public"."agjescuela_samba"("id"),
    PRIMARY KEY ("id","agjid_escuela")
);

DROP TYPE IF EXISTS "public"."agjhist_título_carnaval_grupo_enum";
CREATE TYPE "public"."agjhist_título_carnaval_grupo_enum" AS ENUM ('A', 'Ac', 'E', '1');

CREATE TABLE "public"."agjhist_título_carnaval" (
    "año" int4 NOT NULL,
    "grupo" "public"."agjhist_título_carnaval_grupo_enum",
    "monto_ganado" int4,
    "agjid_escuela" int4 NOT NULL,
    CONSTRAINT "FK" FOREIGN KEY ("agjid_escuela") REFERENCES "public"."agjescuela_samba"("id"),
    PRIMARY KEY ("año","agjid_escuela")
);

CREATE SEQUENCE IF NOT EXISTS agjcolor_id_seq;

CREATE TABLE "public"."agjcolor" (
    "id" int4 NOT NULL DEFAULT nextval('agjcolor_id_seq'::regclass),
    "nombre" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "public"."agje_c" (
    "agjescuelaSambaId" int4 NOT NULL,
    "agjcolorId" int4 NOT NULL
    PRIMARY KEY ("agjcolorId","agjescuelaSambaId")
);

CREATE SEQUENCE IF NOT EXISTS agjsamba_id_seq;

CREATE TABLE "public"."agjsamba" (
    "id" int4 NOT NULL DEFAULT nextval('agjsamba_id_seq'::regclass),
    "titulo" text NOT NULL,
    "letra" text NOT NULL,
    "año_carnaval" date NOT NULL,
    "tipo" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjintegrantes_id_seq;
DROP TYPE IF EXISTS "public"."agjintegrantes_genero_enum";
CREATE TYPE "public"."agjintegrantes_genero_enum" AS ENUM ('M', 'F');

CREATE TABLE "public"."agjintegrantes" (
    "id" int4 NOT NULL DEFAULT nextval('agjintegrantes_id_seq'::regclass),
    "primer_nombre" text NOT NULL,
    "primer_apellido" text NOT NULL,
    "segundo_apellido" text NOT NULL,
    "fecha_nac" date NOT NULL,
    "genero" "public"."agjintegrantes_genero_enum" NOT NULL,
    "nacionalidad" text NOT NULL,
    "doc_identidad" int4,
    "segundo_nombre" text,
    "apodo" text,
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjhabilidad_id_seq;

CREATE TABLE "public"."agjhabilidad" (
    "id" int4 NOT NULL DEFAULT nextval('agjhabilidad_id_seq'::regclass)
    "nombre" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "public"."agjint_hab" (
    "agjintegrantesId" int4 NOT NULL,
    "agjhabilidadId" int4 NOT NULL
    PRIMARY KEY ("agjintegrantesId","agjhabilidadId")
);

CREATE TABLE "public"."agjparentesco" (
    "relacion" text NOT NULL,
    "integrante1" int4 NOT NULL,
    "agjintegrante2" int4,
    CONSTRAINT "FK" FOREIGN KEY ("agjintegrante2") REFERENCES "public"."agjintegrantes"("id"),
    PRIMARY KEY ("integrante1")
);
`