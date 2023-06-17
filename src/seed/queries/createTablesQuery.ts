export const createTablesQuery = `
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

CREATE SEQUENCE IF NOT EXISTS agjpatrocinante_persona_id_seq;

CREATE TABLE "public"."agjpatrocinante_persona" (
    "id" int4 NOT NULL DEFAULT nextval('agjpatrocinante_persona_id_seq'::regclass),
    "doc_identidad" int4 NOT NULL,
    "primer_nombre" text NOT NULL,
    "primer_apellido" text NOT NULL,
    "segundo_apellido" text NOT NULL,
    "fecha_nac" date NOT NULL,
    "email_contacto" text NOT NULL
    "segundo_nombre" text,
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjpatrocinante_empresa_id_seq;

CREATE TABLE "public"."agjpatrocinante_empresa" (
    "id" int4 NOT NULL DEFAULT nextval('agjpatrocinante_empresa_id_seq'::regclass),
    "nombre" text NOT NULL,
    "email_contacto" text NOT NULL,
    "mision" text
    PRIMARY KEY ("id")
);


CREATE TABLE "public"."agjtelefono" (
    "cod_int" int4 NOT NULL,
    "cod_area" int4 NOT NULL,
    "numero" int4 NOT NULL,
    "escuelaId" int4,
    "empresaId" int4,
    "personaId" int4
    CONSTRAINT "FK" FOREIGN KEY ("escuelaId") REFERENCES "public"."agjesucela_samba"("id"),
    CONSTRAINT "FK" FOREING KEY ("empresaId") REFERENCES "public"."agjpatrocinante_empresa"("id"),
    CONSTRAINT "FK" FOREING KEY ("personaId") REFERENCES "public"."agjpatrocinante_persona"("id")
    PRIMARY KEY ("cod_int","cod_area","numero")
);

CREATE SEQUENCE IF NOT EXISTS agjrol_id_seq;

CREATE TABLE "public"."agjrol" (
    "id" int4 NOT NULL DEFAULT nextval('agjrol_id_seq'::regclass),
    "nombre" text NOT NULL,
    "descripcion" text NOT NULL
    PRIMARY KEY ("id")
);

CREATE TABLE "public"."agjhist_int" (
    "fecha_ini" date NOT NULL,
    "autoridad" text NOT NULL,
    "fecha_fin" date,
    "agjid_escuela" int4 NOT NULL,
    "agjid_integrante" int4 NOT NULL,
    CONSTRAINT "FK" FOREIGN KEY ("agjid_escuela") REFERENCES "public"."agjescuela_samba"("id"),
    CONSTRAINT "FK" FOREIGN KEY ("agjid_integrante") REFERENCES "public"."agjintegrantes"("id"),
    PRIMARY KEY ("fecha_ini","agjid_escuela","agjid_integrante")
);

CREATE TABLE "public"."agjorg_carnaval" (
    "año" int4 NOT NULL,
    "agjid_rol" int4 NOT NULL,
    "agjidhist_int" int4 NOT NULL,
    "histIntFechaIni" date NOT NULL,
    "histIntAgjidEscuela" int4 NOT NULL,
    "histIntAgjidIntegrante" int4 NOT NULL,
    CONSTRAINT "FK" FOREIGN KEY ("agjid_rol") REFERENCES "public"."agjrol"("id"),
    CONSTRAINT "FK" FOREIGN KEY ("histIntFechaIni","histIntAgjidEscuela","histIntAgjidIntegrante") REFERENCES "public"."agjhist_int"("fecha_ini","agjid_escuela","agjid_integrante"),
    PRIMARY KEY ("año","agjid_rol","histIntFechaIni","histIntAgjidEscuela","histIntAgjidIntegrante")
);
`