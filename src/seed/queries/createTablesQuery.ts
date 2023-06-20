export const createTablesQuery = `
CREATE SEQUENCE IF NOT EXISTS agjlugar_id_seq;
DROP TYPE IF EXISTS "agjlugar_tipo_enum";
CREATE TYPE "agjlugar_tipo_enum" AS ENUM ('ESTADO','CIUDAD');

CREATE TABLE "agjlugar" (
    "id" int4 NOT NULL DEFAULT nextval('agjlugar_id_seq'::regclass),
    "nombre" text NOT NULL,
    "tipo" "agjlugar_tipo_enum" NOT NULL,
    "id_lugar_padre" int4,
    CONSTRAINT "FK" FOREIGN KEY ("id_lugar_padre") REFERENCES "agjlugar"("id"),
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjescuela_samba_id_seq;

CREATE TABLE "agjescuela_samba" (
    "id" int4 NOT NULL DEFAULT nextval('agjescuela_samba_id_seq'::regclass),
    "nombre" text NOT NULL,
    "direccion_sede" text NOT NULL,
    "resumen_hist" text NOT NULL,
    "id_lugar" int4,
    CONSTRAINT "FK1" FOREIGN KEY ("id_lugar") REFERENCES "agjlugar"("id"),
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjevento_anual_sem_id_seq;

CREATE TABLE "agjevento_anual_sem" (
    "id" int4 NOT NULL DEFAULT nextval('agjevento_anual_sem_id_seq'::regclass),
    "agjid_escuela" int4 NOT NULL,
    "nombre" text NOT NULL,
    "fecha_ini" date NOT NULL,
    "fecha_fin" date NOT NULL,
    "tipo" text NOT NULL,
    "total_asistentes" int4 NOT NULL,
    "costo_unitario_r$" int4 NOT NULL,
    "descripcion" text,
    CONSTRAINT "FK2" FOREIGN KEY ("agjid_escuela") REFERENCES "agjescuela_samba"("id"),
    PRIMARY KEY ("id","agjid_escuela")
);

DROP TYPE IF EXISTS "agjhist_título_carnaval_grupo_enum";
CREATE TYPE "agjhist_título_carnaval_grupo_enum" AS ENUM ('A', 'B', 'C', 'Ac', 'E', '1', '2', '3');

CREATE TABLE "agjhist_título_carnaval" (
    "año" int4 NOT NULL,
    "grupo" "agjhist_título_carnaval_grupo_enum",
    "monto_ganado" int4,
    "agjid_escuela" int4 NOT NULL,
    CONSTRAINT "FK3" FOREIGN KEY ("agjid_escuela") REFERENCES "agjescuela_samba"("id"),
    PRIMARY KEY ("año","agjid_escuela")
);

CREATE SEQUENCE IF NOT EXISTS agjcolor_id_seq;

CREATE TABLE "agjcolor" (
    "id" int4 NOT NULL DEFAULT nextval('agjcolor_id_seq'::regclass),
    "nombre" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "agje_c" (
    "agjescuela_samba_id" int4 NOT NULL,
    "agjcolor_id" int4 NOT NULL,
    CONSTRAINT "FK27" FOREIGN KEY ("agjescuela_samba_id") REFERENCES "agjescuela_samba"("id"),
    CONSTRAINT "FK28" FOREIGN KEY ("agjcolor_id") REFERENCES "agjcolor"("id"),
    PRIMARY KEY ("agjcolor_id","agjescuela_samba_id")
);

CREATE SEQUENCE IF NOT EXISTS agjsamba_id_seq;

CREATE TABLE "agjsamba" (
    "id" int4 NOT NULL DEFAULT nextval('agjsamba_id_seq'::regclass),
    "titulo" text NOT NULL,
    "letra" text NOT NULL,
    "año_carnaval" date NOT NULL,
    "tipo" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjintegrantes_id_seq;
DROP TYPE IF EXISTS "agjintegrantes_genero_enum";
CREATE TYPE "agjintegrantes_genero_enum" AS ENUM ('M', 'F');

CREATE TABLE "agjintegrantes" (
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

CREATE TABLE "agjhabilidad" (
    "id" int4 NOT NULL DEFAULT nextval('agjhabilidad_id_seq'::regclass),
    "nombre" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "agjint_hab" (
    "agjintegrantes_id" int4 NOT NULL,
    "agjhabilidad_id" int4 NOT NULL,
    CONSTRAINT "FK21" FOREIGN KEY ("agjintegrantes_id") REFERENCES "agjintegrantes"("id"),
    CONSTRAINT "FK22" FOREIGN KEY ("agjhabilidad_id") REFERENCES "agjhabilidad"("id"),
    PRIMARY KEY ("agjintegrantes_id","agjhabilidad_id")
);

CREATE TABLE "agjparentesco" (
    "relacion" text NOT NULL,
    "integrante1" int4 NOT NULL,
    "agjintegrante2" int4,
    CONSTRAINT "FK4" FOREIGN KEY ("agjintegrante2") REFERENCES "agjintegrantes"("id"),
    PRIMARY KEY ("integrante1")
);

CREATE SEQUENCE IF NOT EXISTS agjpatrocinante_persona_id_seq;

CREATE TABLE "agjpatrocinante_persona" (
    "id" int4 NOT NULL DEFAULT nextval('agjpatrocinante_persona_id_seq'::regclass),
    "doc_identidad" int4 NOT NULL,
    "primer_nombre" text NOT NULL,
    "primer_apellido" text NOT NULL,
    "segundo_apellido" text NOT NULL,
    "email_contacto" text NOT NULL,
    "segundo_nombre" text,
    PRIMARY KEY ("id")
);

CREATE SEQUENCE IF NOT EXISTS agjpatrocinante_empresa_id_seq;

CREATE TABLE "agjpatrocinante_empresa" (
    "id" int4 NOT NULL DEFAULT nextval('agjpatrocinante_empresa_id_seq'::regclass),
    "nombre" text NOT NULL,
    "email_contacto" text NOT NULL,
    "mision" text,
    PRIMARY KEY ("id")
);


CREATE TABLE "agjtelefono" (
    "cod_int" int4 NOT NULL,
    "cod_area" int4 NOT NULL,
    "numero" int4 NOT NULL,
    "escuela_id" int4,
    "empresa_id" int4,
    "persona_id" int4,
    CONSTRAINT "FK5" FOREIGN KEY ("escuela_id") REFERENCES "agjescuela_samba"("id"),
    CONSTRAINT "FK6" FOREIGN KEY ("empresa_id") REFERENCES "agjpatrocinante_empresa"("id"),
    CONSTRAINT "FK7" FOREIGN KEY ("persona_id") REFERENCES "agjpatrocinante_persona"("id"),
    PRIMARY KEY ("cod_int","cod_area","numero")
);

CREATE SEQUENCE IF NOT EXISTS agjrol_id_seq;

CREATE TABLE "agjrol" (
    "id" int4 NOT NULL DEFAULT nextval('agjrol_id_seq'::regclass),
    "nombre" text NOT NULL,
    "descripcion" text NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "agjhist_int" (
    "fecha_ini" date NOT NULL,
    "autoridad" text NOT NULL,
    "fecha_fin" date,
    "agjid_escuela" int4 NOT NULL,
    "agjid_integrante" int4 NOT NULL,
    CONSTRAINT "FK7" FOREIGN KEY ("agjid_escuela") REFERENCES "agjescuela_samba"("id"),
    CONSTRAINT "FK8" FOREIGN KEY ("agjid_integrante") REFERENCES "agjintegrantes"("id"),
    PRIMARY KEY ("fecha_ini","agjid_escuela","agjid_integrante")
);

CREATE TABLE "agjorg_carnaval" (
    "año" int4 NOT NULL,
    "agjid_rol" int4 NOT NULL,
    "hist_int_fecha_ini" date NOT NULL,
    "hist_int_agjid_escuela" int4 NOT NULL,
    "hist_int_agjid_integrante" int4 NOT NULL,
    CONSTRAINT "FK9" FOREIGN KEY ("agjid_rol") REFERENCES "agjrol"("id"),
    CONSTRAINT "FK10" FOREIGN KEY ("hist_int_fecha_ini","hist_int_agjid_escuela","hist_int_agjid_integrante") REFERENCES "agjhist_int"("fecha_ini","agjid_escuela","agjid_integrante"),
    PRIMARY KEY ("año","agjid_rol","hist_int_fecha_ini","hist_int_agjid_escuela","hist_int_agjid_integrante")
);

CREATE TABLE "agjautor" (
    "agjsamba_id" int4 NOT NULL,
    "agjhist_int_fecha_ini" date NOT NULL,
    "agjhist_int_agjid_escuela" int4 NOT NULL,
    "agjhist_int_agjid_integrante" int4 NOT NULL,
    CONSTRAINT "FK25" FOREIGN KEY ("agjsamba_id") REFERENCES "agjsamba"("id"),
    CONSTRAINT "FK26" FOREIGN KEY ("agjhist_int_fecha_ini","agjhist_int_agjid_escuela","agjhist_int_agjid_integrante") REFERENCES "agjhist_int"("fecha_ini","agjid_escuela","agjid_integrante"),
    PRIMARY KEY("agjsamba_id", "agjhist_int_fecha_ini","agjhist_int_agjid_escuela","agjhist_int_agjid_integrante")
);

CREATE SEQUENCE IF NOT EXISTS agjhist_patrocinio_id_seq;

CREATE TABLE "agjhist_patrocinio" (
    "id" int4 NOT NULL DEFAULT nextval('agjhist_patrocinio_id_seq'::regclass),
    "fecha_ini" date NOT NULL,
    "fecha_fin" date,
    "agjid_escuela" int4 NOT NULL,
    "empresa_id" int4,
    "persona_id" int4,
    CONSTRAINT "FK11" FOREIGN KEY ("agjid_escuela") REFERENCES "agjescuela_samba"("id"),
    CONSTRAINT "FK12" FOREIGN KEY ("empresa_id") REFERENCES "agjpatrocinante_empresa"("id"),
    CONSTRAINT "FK13" FOREIGN KEY ("persona_id") REFERENCES "agjpatrocinante_persona"("id"),
    PRIMARY KEY("id","agjid_escuela")
);

CREATE SEQUENCE IF NOT EXISTS agjdonacion_id_seq;

CREATE TABLE "agjdonacion" (
    "id" int4 NOT NULL DEFAULT nextval('agjdonacion_id_seq'::regclass),
    "fecha" date NOT NULL,
    "monto_r$" int4 NOT NULL,
    "hist_patrocinio_id" int4,
    "hist_patrocinio_agjid_escuela" int4,
    CONSTRAINT "FK14" FOREIGN KEY ("hist_patrocinio_id","hist_patrocinio_agjid_escuela") REFERENCES "agjhist_patrocinio"("id","agjid_escuela"),
    PRIMARY KEY ("id","hist_patrocinio_id","hist_patrocinio_agjid_escuela")
);

CREATE SEQUENCE IF NOT EXISTS agjpremio_especial_id_seq;

CREATE TABLE "agjpremio_especial" (
    "id" int4 NOT NULL DEFAULT nextval('agjpremio_especial_id_seq'::regclass),
    "nombre" text NOT NULL,
    "descripcion" text NOT NULL,
    "tipo" text NOT NULL,
    "lugar_id" int4 NOT NULL,
    CONSTRAINT "FK15" FOREIGN KEY ("lugar_id") REFERENCES "agjlugar"("id"),
    PRIMARY KEY ("id")
);

CREATE TABLE "agjganador" (
    "año" int4 NOT NULL,
    "escuela_id" int4,
    "premio_id" int4 NOT NULL,
    "hist_int_fecha_ini" date,
    "hist_int_agjid_escuela" int4,
    "hist_int_agjid_integrante" int4,
    CONSTRAINT "FK16" FOREIGN KEY ("escuela_id") REFERENCES "agjescuela_samba"("id"),
    CONSTRAINT "FK17" FOREIGN KEY ("hist_int_fecha_ini","hist_int_agjid_escuela","hist_int_agjid_integrante") REFERENCES "agjhist_int"("fecha_ini","agjid_escuela","agjid_integrante"),
    CONSTRAINT "FK18" FOREIGN KEY ("premio_id") REFERENCES "agjpremio_especial"("id"),
    PRIMARY KEY ("año","premio_id")
);
`