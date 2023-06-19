export const insertDataQuery = `

INSERT INTO agjlugar (nombre, tipo) 
VALUES
('RIO DE JANEIRO','ESTADO'),
('SAO PAULO','ESTADO'),
('RIO GRANDE DEL SUR','ESTADO'),
('PERNAMBUCO','ESTADO'),
('MARANHAO','ESTADO'),
('PARA','ESTADO');

INSERT INTO agjlugar (nombre, tipo, id_lugar_padre) 
VALUES
('RIO DE JANEIRO','CIUDAD',(SELECT l.id FROM agjlugar l where nombre='RIO DE JANEIRO' AND tipo='ESTADO')),
('SAO PAULO','CIUDAD',(SELECT l.id FROM agjlugar l where nombre='SAO PAULO' AND tipo='ESTADO')),
('PORTO ALEGRE','CIUDAD',(SELECT l.id FROM agjlugar l where nombre='RIO GRANDE DEL SUR' AND tipo='ESTADO')),
('RECIFE','CIUDAD',(SELECT l.id FROM agjlugar l where nombre='PERNAMBUCO' AND tipo='ESTADO')),
('SAO LUIS','CIUDAD',(SELECT l.id FROM agjlugar l where nombre='MARANHAO' AND tipo='ESTADO')),
('BELFORD ROXO','CIUDAD',(SELECT l.id FROM agjlugar l where nombre='RIO DE JANEIRO' AND tipo='ESTADO')),
('BELEM','CIUDAD',(SELECT l.id FROM agjlugar l where nombre='PARA' AND tipo='ESTADO'));


INSERT INTO agjcolor (nombre) VALUES ('AZUL'), ('AMARILLO'), ('ROJO'), ('BLANCO'), ('VERDE'), ('ROSA'), ('PLATEADO'), ('NEGRO');


INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'UNIDOS DA TIJUCA',
'AV. FRANCISCO BICALHO, 47 - SANTO CRISTO',
'LA ESCUELA DE SAMBA UNIDOS DA TIJUCA ES UNA DE LAS MÁS ANTIGUAS DE RIO DE JANEIRO, CON ORÍGENES EN LA DECADA DE 1930. FUE FUNDADA EL 31 DE DICIEMBRE DE 1931 A PARTIR DE LA FUSIÓN DE BLOQUES EXISTENTES EN MORRO DO BOREL. GANO SU PRIMER CARNAVAL CUANDO TENIA CINCO AÑOS, EN 1936, CON EL ENREDO “SONHOS DELIRANTES”. PAULO BARROS ES RESPONSABLE DEL ESTILO INNOVADOR DE LA ESCUELA.',
(SELECT l.id FROM agjlugar l WHERE nombre='RIO DE JANEIRO' AND tipo='CIUDAD'));

INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'TOM MAIOR',
'R. SERGIO TOMAS, 622 - BARRA FUNDA',
'EL GREMIO RECREATIVO ESCUELA DE SAMBA TOM MAIOR ES UNA ESCUELA DE SAMBA DE LA CIUDAD DE SAO PAULO. FUE FUNDADA EL 14 DE FEBRERO DE 1973 POR HELIO BAGUNÇA, QUIEN FUE EL PRIMER PRESIDENTE DE LA ESCUELA, JUNTO CON SAMBISTAS TRADICIONALES DE LA CAMISA VERDE E BRANCO 1. SU NOMBRE FUE INSPIRADO EN LOS VERSOS DE LA CANCIÓN DE MARTINHO DA VILA: “VAI TER DE AMAR A LIBERDADE, SO VAI CANTAR EM TOM MAIOR, VAI TER A FELICIDADE DE VER UM BRASIL MELHOR…” ',
(SELECT l.id FROM agjlugar l WHERE nombre='SAO PAULO' AND tipo='CIUDAD'));

INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'IMPERIO DA ZONA NORTE',
'AV. SERTORIO, 1021 - NAVEGANTES',
'FUE FUNDADA EL 20 DE MARZO DE 1975 POR PEDRO GUILHERME LOPES, WALDIR ALVES, OSCAR ALVES, HEITOR LOPES, CARLOS ALBERTO, GILDO LOPES Y ANA REGINA LOPES 1. INICIALMENTE UBICADA EN EL BARRIO SARANDI, LA ESCUELA ACABO MUDANDOSE A OTRO BARRIO EN LA ZONA NORTE, EL NAVEGANTES, DONDE TIENE SU CUADRA EN LA AVENIDA SERTORIO 1. DESPUES DE GANAR EL CARNAVAL DE 1982, LA ESCUELA ACABO PASANDO POR MALOS MOMENTOS A FINALES DE LA DECADA DE 1990. DESPUES DE CONSEGUIR RESTABLECERSE Y SUBIR AL GRUPO ESPECIAL NUEVAMENTE EN 2005, BAJO EL MANDO DE ANTONIO ADEMIR MORAES (EL OSO), EL IMPERIO FUE VICECAMPEON EN 2006 Y 2007.',
(SELECT l.id FROM agjlugar l WHERE nombre='PORTO ALEGRE' AND tipo='CIUDAD'));

INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'MANGUEIRA DO AMANHA',
'RUA VISCONDE DE NITEROI, 1072, MANGUEIRA',
'LA MANGUEIRA DO AMANHA ES UNO DE LOS PROYECTOS SOCIALES DE LA GRES ESTAÇAO PRIMEIRA DE MANGUEIRA. UNA DE SUS FUNDADORAS ES LA CANTANTE ALCIONE, ACTUALMENTE SU PRESIDENTA DE HONRA. EN LA FECHA DE CREACION, EN 1987, LA CANTANTE MARIA BETHANIA SIRVIO DE MADRINA DE LA ESCUELA. LA AGRUPACION CUENTA CON LA PARTICIPACION DE NIÑOS Y ADOLESCENTES ENTRE 7 Y 17 AÑOS. LA MANGUEIRA DO AMANHA YA HA TENIDO MAS DE 3.000 COMPONENTES DESFILANDO EN EL MISMO AÑO Y YA HA REVELADO VARIOS TALENTOS Y ARTISTAS QUE HOY FOFORMAN PARTE DE LA ESCUELA PRINCIPAL.',
(SELECT l.id FROM agjlugar l WHERE nombre='RIO DE JANEIRO' AND tipo='CIUDAD'));

INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'UNIDOS DE SAO MIGUEL',
'R. MESQUITA - PADRE MIGUEL',
'EL GREMIO RECREATIVO ESCUELA DE SAMBA UNIDOS DE PADRE MIGUEL ES UNA ESCUELA DE SAMBA DE LA CIUDAD DE RIO DE JANEIRO FUNDADA EL DIA 12 DE NOVIEMBRE DE 1957 1. ESTA UBICADA EN LA CALLE MEZQUITA EN VILA VINTEM, EN EL BARRIO DE PADRE MIGUEL. EL INICIO DE LA ESCUELA FUE BRILLANTE, PUES INMEDIATAMENTE EN SU PRIMER DESFILE EN LA PLAZA ONCE EN 1959 SE CONSAGRO CAMPEONA Y ADQUIRIO EL DERECHO DE PRESENTARSE ENTRE LAS GRANDES EN 1960. SIN EMBARGO, LA MALA COLOCACION QUE OBTUVO, LA HIZO REGRESAR A LAS CATEGORIAS INFERIORES. LA ESCUELA VOLVIO A DESFILAR ENTRE LAS GRANDES EN 1964, 1971 Y 1972.',
(SELECT l.id FROM agjlugar l WHERE nombre='RIO DE JANEIRO' AND tipo='CIUDAD'));

INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'IMPERIO PEDREIRENSE',
'TV. MAURITI, 1135 - PEDREIRA',
'FUE FUNDADA EL 6 DE DICIEMBRE DE 1951, EN EL BARRIO DE PEDREIRA, COMO LA ESCUELA DE SAMBA “MARACATU DO SUBURBIO” 1. DESDE SU PRIMER CARNAVAL EN 1952 (DESFILO CON EL ENREDO “O LARGO DA POLVORA”), SIEMPRE MANTUVO GRANDES DESTAQUES HASTA 1958. FUERON 7 AÑOS DE GLORIAS PARA EL BARRIO, OBTENIENDO VARIOS TITULOS, INCLUSO EL DE CAMPEONA. UNO DE SUS FUNDADORES FUE PAULO ROBERTO, QUIEN SE COMPROMETIO A DAR EL TITULO DEL CARNAVAL PARA LA ESCUELA. UNA DE LAS PRIMERAS MEDIDAS ADMINISTRATIVAS QUE TOMO FUE CONVENCER A SU DIRECTIVA A CAMBIAR EL NOMBRE DE LA ESCUELA, PUES LA EXPRESION “DO SUBÚRBIO” ERA PEYORATIVA Y PRESENTÓ LA PROPUESTA DE LOS ESTATUTOS DE LA “EMBAIXADA DE SAMBA DO IMPERIO PEDREIRENSE”, QUE FUE APROBADA EN 1958, VIGORANDO HASTA ESTA FECHA',
(SELECT l.id FROM agjlugar l WHERE nombre='BELEM' AND tipo='CIUDAD'));

INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'UNIDOS DA BANGU',
'R. FRANCISCO REAL, 1445 - BANGU',
'EL GREMIO RECREATIVO ESCUELA DE SAMBA UNIDOS DE BANGU ES UNA ESCUELA DE SAMBA DE LA CIUDAD DE RIO DE JANEIRO, CON SEDE EN EL BARRIO DE BANGU. FUE FUNDADA EL 15 DE NOVIEMBRE DE 1937 Y SUS PRIMERAS COLORES OFICIALES FUERON AZUL Y BLANCO. SOLO ADOPTO SUS COLORES ORIGINALES, ROJO Y BLANCO, EN 1966, EN HOMENAJE AL SEGUNDO TÍTULO DEL CAMPEONATO CARIOCA CONQUISTADO POR EL BANGU ATLETICO CLUBE',
(SELECT l.id FROM agjlugar l WHERE nombre='RIO DE JANEIRO' AND tipo='CIUDAD'));

INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'INOCENTES DA BELFORD ROXO',
'BLVD. SAO VICENTE, 1741 - PARQUE SAO VICENTE',
'EL GRES INOCENTES DE BELFORD ROXO ES UNA DE LAS MAS NUEVAS ASOCIACIONES DEL CARNAVAL CARIOCA, FUNDADA EL 11 DE JULIO DE 1993. LA ESCUELA SUCEDIO A UNIDOS DA MATRIZ Y TIENE ENTRE SUS FUNDADORES A LUIZ DE BASTOS, SEBASTIÃO QUIRINO, JAIRO DA SILVA, ARISTOTELINA DE OLIVEIRA, ABILIO DEL REY, WALTER SARDINHA, ENTRE OTROS',
(SELECT l.id FROM agjlugar l WHERE nombre='BELFORD ROXO' AND tipo='CIUDAD'));

INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar) VALUES(
'IMPERIO DA TIJUCA',
'R. MEDEIROS PASSARO, 84 - TIJUCA',
'LA ESCUELA DE SAMBA IMPERIO DA TIJUCA FUE FUNDADA EN 1940, EN EL MORRO DA FORMIGA, UBICADO EN EL BARRIO DE TIJUCA, A PARTIR DE LA FUSION ENTRE LAS ANTIGUAS ESCUELAS RECREIO DA MOCIDADE Y ESTRELA DA TIJUCA. FUE LA PRIMERA ESCUELA DE SAMBA EN USAR EN SU NOMBRE EL TERMINO “IMPERIO”, RAZON POR LA CUAL TIENE UNA CORONA, SÍMBOLO DE LA NOBLEZA, EN SU BANDERA, ASI COMO RAMOS DE FUMO Y CAFE QUE TRADUCIAN LAS RIQUEZAS DEL BRASIL EN LA EPOCA',
(SELECT l.id FROM agjlugar l WHERE nombre='RIO DE JANEIRO' AND tipo='CIUDAD'));

INSERT INTO agjpatrocinante_empresa (nombre, email_contacto, mision)
VALUES
('NIKE', 'EVENTS@NIKE.COM', 'OFRECER INSPIRACION E INNOVACION A TODOS LOS ATLETAS DEL MUNDO'),
('PROCTER & GAMBLE', 'CONTACT@P&G.COM', 'OFRECEMOS PRODUCTOS Y SERVICIOS DE MARCA DE UNA CALIDAD Y VALOR SUPERIOR'),
('UNICEF','BRAZIL@UNICEF.ORG', 'PROMUEVE LOS DERECHOS Y EL BIENESTAR DE TODOS LOS NIÑOS Y NIÑAS, EN TODO LO QUE HACEMOS'),
('PEPSICO','CONSUMIDORES.55@PEPSICO.COM', 'BRINDAR A LOS CONSUMIDORES ALIMENTOS Y BEBIDAS DELICIOSOS, ASEQUIBLES, PRACTICOS Y COMPLEMENTARIOS'),
('B3','NEGOCIACAO@B3.COM.BR ', 'IMPULSAR EL CRECIMIENTO DE BRASIL JUNTO CON SUS CLIENTES Y LA SOCIEDAD'),
('REMAX','GERENCIA@ORION.REMAX.COM.BR', 'SER LOS LIDERES MUNDIALES EN BIENES RAICES, ALCANZANDO NUESTRAS METAS AYUDANDO A OTROS ALCANZAR LAS SUYAS'),
('GRUPO MODELO','CONTACTO@GMODELO.COM.MX', 'IMPLEMENTAR LAS MEJORES PRACTICAS EN HERRAMIENTAS Y TECNICAS, ESTABLECIENDO LOS COMPORTAMIENTOS NECESARIOS PARA MANTENER LA CULTURA DE LA MEJORA CONTINUA'),
('MARSHALL AMPLIFICATION','CONTACTUS@MARSHALL.COM', 'INNOVAR Y EMPUJAR LAS BARRERAS DE POSIBILIDAD PARA INSPIRAR A TODOS A CONSEGUIR SU SONIDO'),
('UNITED HEALTH GROUP','SUSTAINABILITY@UHG.COM', 'AYUDAR A LAS PERSONAS A VIVIR VIDAS MAS SALUDABLES Y PROMOVER UN SISTEMA DE SALUD UE FUNCIONE MEJOR PARA TODOS');

INSERT INTO agjpatrocinante_persona (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, doc_identidad, email_contacto) 
VALUES
('PEDRO', 'EDUARDO', 'PEREZ', 'IZAGUIRRE', '6911502', 'PEDRO@GMAIL.COM'),
('LUISA', 'MARTA', 'RODRIGUEZ', 'LOINAZ', '10335089', 'LUISA_RO@GMAIL.COM'),
('LUIS', NULL, 'TERRERO', 'TORRES', '16308949', 'JDTERRE@GMAIL.COM'),
('MARIA', 'VALENTINA', 'GIL', 'BLANCO', '29658784', 'MVGIL@GMAIL.COM'),
('VALENTINA', 'MARGARITA', 'CABRERA', 'GIMENEZ', '12986332', 'VCABRA25@GMAIL.COM'),
('FERNANDO', NULL, 'GONZALEZ', 'ECHEVARRIA', '7854998', 'FERGOCHE@GMAIL.COM'),
('SOPHIA', NULL, 'TROTA', 'LARRAZABAL', '19668975', 'SOPHYTROT@GMAIL.COM'),
('CLARISSA', NULL, 'RUAN', 'GUZMAN', '18784669', 'CLARIRU@GMAIL.COM'),
('DIEGO', 'IGNACIO', 'CATO', 'ROHL', '21887112', 'DIGR667@GMAIL.COM');

 INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA TIJUCA'),
     (SELECT c.id FROM agjcolor c WHERE nombre='AMARILLO'));
    
    INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA TIJUCA'),
     (SELECT c.id FROM agjcolor c WHERE nombre='AZUL'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='TOM MAIOR'),
     (SELECT c.id FROM agjcolor c WHERE nombre='AMARILLO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='TOM MAIOR'),
     (SELECT c.id FROM agjcolor c WHERE nombre='ROJO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='TOM MAIOR'),
     (SELECT c.id FROM agjcolor c WHERE nombre='BLANCO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA ZONA NORTE'),
     (SELECT c.id FROM agjcolor c WHERE nombre='BLANCO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA ZONA NORTE'),
     (SELECT c.id FROM agjcolor c WHERE nombre='AMARILLO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA ZONA NORTE'),
     (SELECT c.id FROM agjcolor c WHERE nombre='PLATEADO'));
    
    INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='MANGUEIRA DO AMANHA'),
     (SELECT c.id FROM agjcolor c WHERE nombre='VERDE'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='MANGUEIRA DO AMANHA'),
     (SELECT c.id FROM agjcolor c WHERE nombre='ROSA'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DE SAO MIGUEL'),
     (SELECT c.id FROM agjcolor c WHERE nombre='ROJO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DE SAO MIGUEL'),
     (SELECT c.id FROM agjcolor c WHERE nombre='AMARILLO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DE SAO MIGUEL'),
     (SELECT c.id FROM agjcolor c WHERE nombre='BLANCO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DE SAO MIGUEL'),
     (SELECT c.id FROM agjcolor c WHERE nombre='NEGRO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO PEDREIRENSE'),
     (SELECT c.id FROM agjcolor c WHERE nombre='AZUL'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO PEDREIRENSE'),
     (SELECT c.id FROM agjcolor c WHERE nombre='ROJO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO PEDREIRENSE'),
     (SELECT c.id FROM agjcolor c WHERE nombre='BLANCO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA BANGU'),
     (SELECT c.id FROM agjcolor c WHERE nombre='BLANCO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA BANGU'),
     (SELECT c.id FROM agjcolor c WHERE nombre='ROJO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),
     (SELECT c.id FROM agjcolor c WHERE nombre='ROJO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),
     (SELECT c.id FROM agjcolor c WHERE nombre='AZUL'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),
     (SELECT c.id FROM agjcolor c WHERE nombre='BLANCO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA TIJUCA'),
     (SELECT c.id FROM agjcolor c WHERE nombre='BLANCO'));
    
     INSERT INTO agje_c(agjescuela_samba_id,agjcolor_id) VALUES(
     (SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA TIJUCA'),
     (SELECT c.id FROM agjcolor c WHERE nombre='VERDE'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('JOSE','FERNANDO','HORTA','DE SOUSA VIEIRA',NULL,'M','PORTUGAL',NULL,'1952-7-23');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('1987-1-1','1992-1-1','SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA TIJUCA'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='JOSE' and primer_apellido='HORTA'));

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('1997-1-1','1999-1-1','SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA TIJUCA'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='JOSE' and primer_apellido='HORTA'));

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2001-1-1',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA TIJUCA'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='JOSE' and primer_apellido='HORTA'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('LEA','CRISTINA','ARAUJO','DA FONSECA','LEXA','F','BRASIL',NULL,'1995-2-22');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2020-1-1',NULL,'NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA TIJUCA'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='LEXA'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('WANTUIR',NULL,'DE OLIVEIRA','TAVARES','WANTUIR','M','BRASIL',NULL,'1957-3-31');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2019-1-1','2023-1-1','NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA TIJUCA'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='WANTUIR'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('CARLOS','ALBERTO','DIAS','ALVES',NULL,'M','BRASIL',NULL,'1965-9-6');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('1998-1-1','2021-12-31','NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='TOM MAIOR'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='CARLOS' AND primer_apellido='DIAS' AND segundo_apellido='ALVES'));

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2022-1-1',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='TOM MAIOR'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='CARLOS' AND primer_apellido='DIAS' AND segundo_apellido='ALVES'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('GILSON',NULL,'DA','CONCEICAO','GILSINHO','M','BRASIL',NULL,'1970-6-17');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2022-1-1',NULL,'NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='TOM MAIOR'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='GILSINHO'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('ANTONIO',NULL,'ADEMIR','DE MORAES','URSO','M','BRASIL',NULL,'1968-11-28');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('1994-1-1','1994-12-31','SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA ZONA NORTE'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='URSO'));
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2004-1-1','2008-12-31','SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA ZONA NORTE'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='URSO'));
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2013-1-1','2016-12-31','SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA ZONA NORTE'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='URSO'));
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2020-1-1',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA ZONA NORTE'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='URSO'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('EVELYN',NULL,'BASTOS','FERNANDES',NULL,'F','BRASIL',NULL,'1990-4-20');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2022-6-5',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='MANGUEIRA DO AMANHA'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='EVELYN' AND primer_apellido='BASTOS'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('DOWGLAS',NULL,'DINIZ','GONCALVES',NULL,'M','BRASIL',NULL,'1985-5-13');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2016-2-24','2017-12-31','NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='MANGUEIRA DO AMANHA'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='DOWGLAS' AND primer_apellido='DINIZ'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('ROGERIO',NULL,'VAZ','DA SILVA','GARRINCHA','M','BRASIL',NULL,'1975-8-25');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2010-1-1',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DE SAO MIGUEL'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='ROGERIO' AND primer_apellido='VAZ' AND segundo_apellido='DA SILVA'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('RAISSA',NULL,'MARTINS','BRITO',NULL,'F','BRASIL',NULL,'1981-10-2');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2017-1-1',NULL,'NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DE SAO MIGUEL'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='RAISSA' AND primer_apellido='MARTINS'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('PAULO',NULL,'ROBERTO','PINTO','CHICO','M','BRASIL',NULL,'1940-1-14');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('1990-1-1',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO PEDREIRENSE'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='CHICO'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('THIAGO',NULL,'OLIVEIRA','GOMES',NULL,'M','BRASIL',NULL,'1984-7-27');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2019-1-1',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA BANGU'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='THIAGO' AND primer_apellido='OLIVEIRA'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('FABIO',NULL,'CRISPINIANO','DO NASCIMENTO','SOBRINHO','M','BRASIL',NULL,'1951-12-2');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('1983-1-1','1984-12-31','NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA BANGU'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='SOBRINHO'));
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('1986-1-1','1986-12-31','NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='UNIDOS DA BANGU'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='SOBRINHO'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('REGINALDO',NULL,'FERREIRA','GOMES',NULL,'M','BRASIL',NULL,'1964-7-6');

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('1998-1-1','2001-12-31','SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='REGINALDO' AND primer_apellido='FERREIRA' AND segundo_apellido='GOMES'));
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2005-1-1','2014-3-31','SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='REGINALDO' AND primer_apellido='FERREIRA' AND segundo_apellido='GOMES'));
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2015-7-1',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='REGINALDO' AND primer_apellido='FERREIRA' AND segundo_apellido='GOMES'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('THIAGO',NULL,'BRITO','DOS SANTOS',NULL,'M','BRASIL',NULL,'1988-10-10');
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2012-1-1','2013-12-31','NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='THIAGO' AND primer_apellido='BRITO'));
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2023-1-1',NULL,'NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='THIAGO' AND primer_apellido='BRITO'));

 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2013-1-1','2013-12-31','NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='INOCENTES DA BELFORD ROXO'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='WANTUIR'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('ANTONIO',NULL,'MARCOS','TELES','TE','M','BRASIL',NULL,'1967-9-24');
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2004-1-1',NULL,'SI',(SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA TIJUCA'),(SELECT i.id FROM agjintegrantes i  WHERE apodo='TE'));

 INSERT INTO agjintegrantes (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, apodo, genero, nacionalidad, doc_identidad, fecha_nac) VALUES('DANIEL',NULL,'SILVA','PEREIRA',NULL,'M','BRASIL',NULL,'1983-2-15');
 INSERT INTO agjhist_int(fecha_ini,fecha_fin,autoridad,agjid_escuela,agjid_integrante)
 VALUES('2017-1-1',NULL,'NO',(SELECT e.id FROM agjescuela_samba e WHERE nombre='IMPERIO DA TIJUCA'),(SELECT i.id FROM agjintegrantes i  WHERE primer_nombre='DANIEL' AND primer_apellido='SILVA'));
 
 INSERT INTO agjtelefono (cod_int,cod_area,numero,escuela_id) VALUES 
 (55,21,970055353,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DA TIJUCA')),
 (55,11,963690998,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'TOM MAIOR')),
 (55,51,991725671,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'MANGUEIRA DO AMANHA')),
 (55,51,991733197,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO DA ZONA NORTE')),
 (55,11,983468381,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DE SAO MIGUEL')),
 (55,91,984338740,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO PEDREIRENSE')),
 (55,21,34626962,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DA BANGU')),
 (55,11,993461584,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'INOCENTES DA BELFORD ROXO')),
 (55,21,30424745,(SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO DA TIJUCA'));

 INSERT INTO agjtelefono (cod_int,cod_area,numero,empresa_id) VALUES 
 (55,11,40049994,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'NIKE')),
 (55,11,37480327,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'PROCTER & GAMBLE')),
 (55,21,31475700,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'UNICEF')),
 (55,11,24642400,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'PEPSICO')),
 (55,11,25655996,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'B3')),
 (55,11,42103609,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'REMAX')),
 (52,998,8866750,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'GRUPO MODELO')),
 (55,0,1908375411,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'MARSHALL AMPLIFICATION')),
 (1,800,3285979,(SELECT em.id FROM agjescuela_samba em WHERE nombre = 'UNITED HEALTH GROUP'));

INSERT INTO agjrol (nombre, descripcion) VALUES
('INTERPRETE','ES EL RESPONSABLE DE CANTAR EL SAMBA ENREDO DE LA ESCUELA'),
('MESTRE SALA','EJERCE EL PAPEL DE MAESTRO DE CEREMONIAS Y SE VISTE DE MANERA ARISTOCRATICA, CON TRAJES QUE REFERENCIAN EL SIGLO XVIII'),
('PORTA BANDEIRA','ES LA REPRESENTANTE DE LA ESCUELA Y LLEVA LA BANDERA DE LA MISMA'),
('RAINHA DE BATERIA','ES UNA MUJER QUE DESFILA DELANTE DE LA BATERIA. SUELEN SER MUJERES FAMOSAS'),
('MADRINHA DE BATERIA','ES GENERALMENTE LA MISMA Y TIENE UNA RELACION MAS CERCANA CON SU ESCUELA Y CON EL MUNDO DE LA SAMBA'),
('PASSISTA','BAILARINA JOVEN QUE DESFILA JUNTO A LA BATERIA RELLENANDO LOS ESPACIOS QUE DEJA'),
('COREOGRAFO','LIDERA Y REALIZA LA COREOGRAFIA DE LA COMISSAO DE FRENTE'),
('DIRETOR DE BATERIA','ES EL MUSICO QUE LIDERA LA BATERIA'),
('DIRETOR DE HARMONIA','DIRIGE LOS INSTRUMENTOS DE CUERDA Y DE VIENTO QUE FORMAN PARTE DE LA BANDA');

INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2020,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2021,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2022,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2023,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='LEXA'));

INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2022,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='GILSINHO'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='GILSINHO'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='GILSINHO'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2023,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='GILSINHO'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='GILSINHO'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='GILSINHO'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(1983,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1983-1-1'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1983-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1983-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(1984,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1983-1-1'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1983-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1983-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(1986,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1986-1-1'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1986-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='SOBRINHO' AND hi.fecha_ini='1986-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2019,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2019-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'));INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2020,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2019-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2021,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2019-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2022,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2019-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2023,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2019-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2013,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2013-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2013-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2013-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2016,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DOWGLAS' AND i.primer_apellido='DINIZ'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DOWGLAS' AND i.primer_apellido='DINIZ'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DOWGLAS' AND i.primer_apellido='DINIZ'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2017,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DOWGLAS' AND i.primer_apellido='DINIZ'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DOWGLAS' AND i.primer_apellido='DINIZ'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DOWGLAS' AND i.primer_apellido='DINIZ'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2012,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2012-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='THIAGO' AND i.primer_apellido='BRITO' AND hi.fecha_ini='2012-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='THIAGO' AND i.primer_apellido='BRITO' AND hi.fecha_ini='2012-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2013,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2012-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='THIAGO' AND i.primer_apellido='BRITO' AND hi.fecha_ini='2012-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='THIAGO' AND i.primer_apellido='BRITO' AND hi.fecha_ini='2012-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2023,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
'2023-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='THIAGO' AND i.primer_apellido='BRITO' AND hi.fecha_ini='2023-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='THIAGO' AND i.primer_apellido='BRITO' AND hi.fecha_ini='2023-1-1'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2017,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2018,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2019,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2020,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2021,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2022,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2023,(SELECT r.id FROM agjrol r WHERE r.nombre='RAINHA DE BATERIA'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2017,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2018,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2019,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2020,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2021,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2022,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'));
INSERT INTO agjorg_carnaval (año,agjid_rol,hist_int_fecha_ini,hist_int_agjid_escuela,hist_int_agjid_integrante) VALUES
(2023,(SELECT r.id FROM agjrol r WHERE r.nombre='INTERPRETE'),
(SELECT hi.fecha_ini FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'));

INSERT INTO agjhabilidad (nombre) VALUES
('CANTAR'),
('BAILAR'),
('TOCAR CAVAQUINHO'),
('TOCAR SURDO'),
('TOCAR TAMBORIM'),
('TOCAR TROMPETA'),
('TOCAR PANDEIRO'),
('TOCAR TROMPETA'),
('MAQUILLAR');

INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.apodo='LEXA'),(SELECT h.id from agjhabilidad h WHERE h.nombre='CANTAR'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.apodo='LEXA'),(SELECT h.id from agjhabilidad h WHERE h.nombre='BAILAR'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.apodo='GILSINHO'),(SELECT h.id from agjhabilidad h WHERE h.nombre='CANTAR'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.apodo='GILSINHO'),(SELECT h.id from agjhabilidad h WHERE h.nombre='TOCAR CAVAQUINHO'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.apodo='WANTUIR'),(SELECT h.id from agjhabilidad h WHERE h.nombre='CANTAR'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.primer_nombre='DOWGLAS' AND i.primer_apellido='DINIZ'),(SELECT h.id from agjhabilidad h WHERE h.nombre='CANTAR'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.primer_nombre='EVELYN' AND i.primer_apellido='BASTOS'),(SELECT h.id from agjhabilidad h WHERE h.nombre='BAILAR'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.primer_nombre='RAISSA' AND i.primer_apellido='MARTINS'),(SELECT h.id from agjhabilidad h WHERE h.nombre='BAILAR'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.primer_nombre='THIAGO' AND i.primer_apellido='BRITO'),(SELECT h.id from agjhabilidad h WHERE h.nombre='CANTAR'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.primer_nombre='THIAGO' AND i.primer_apellido='BRITO'),(SELECT h.id from agjhabilidad h WHERE h.nombre='TOCAR CAVAQUINHO'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),(SELECT h.id from agjhabilidad h WHERE h.nombre='TOCAR CAVAQUINHO'));
INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id) VALUES
((SELECT i.id from agjintegrantes i WHERE i.primer_nombre='DANIEL' AND i.primer_apellido='SILVA'),(SELECT h.id from agjhabilidad h WHERE h.nombre='CANTAR'));

INSERT INTO agjsamba (titulo, letra, año_carnaval, tipo) 
VALUES
('AQUARELA DO BRASIL', 'BRASIL, MEU BRASIL BRASILEIRO MEU MULATO INZONEIRO VOU CANTAR-TE NOS MEUS VERSOS O BRASIL, SAMBA QUE DÁ BAMBOLEIO, QUE FAZ GINGAR O BRASIL DO MEU AMOR TERRA DE NOSSO SENHOR BRASIL! BRASIL! PRA MIM! PRA MIM! Ô, ABRE A CORTINA DO PASSADO TIRA A MÃE PRETA DO CERRADO BOTA O REI CONGO NO CONGADO BRASIL! BRASIL! DEIXA CANTAR DE NOVO O TROVADOR À MERENCÓRIA LUZ DA LUA TODA CANÇÃO DO MEU AMOR QUERO VER ESSA DONA CAMINHANDO PELOS SALÕES, ARRASTANDO O SEU VESTIDO RENDADO BRASIL! BRASIL! PRA MIM! PRA MIM! BRASIL, TERRA BOA E GOSTOSA DA MORENA SESTROSA DE OLHAR INDISCRETO O BRASIL, VERDE QUE DÁ PARA O MUNDO SE ADMIRAR O BRASIL DO MEU AMOR TERRA DE NOSSO SENHOR BRASIL! BRASIL! PRA MIM! PRA MIM! Ô! ESSE COQUEIRO QUE DÁ COCO ONDE EU AMARRO A MINHA REDE NAS NOITES CLARAS DE LUAR BRASIL! BRASIL! Ô! ESTAS FONTES MURMURANTES ONDE EU MATO A MINHA SEDE E ONDE A LUA VEM BRINCAR Ô! ESSE BRASIL LINDO E TRIGUEIRO É O MEU BRASIL BRASILEIRO TERRA DE SAMBA E PANDEIRO BRASIL! BRASIL! PRA MIM! PRA MIM!', '01-01-1939', 'SAMBA-ENREDO'),
('MAS QUE NADA', 'OARIA RAIO OBÁ, OBÁ, OBÁ OARIA RAIO OBÁ, OBÁ, OBÁ MAS QUE NADA BLACK EYED PEAS CAME IN TO MAKE IT HOTTER WE BEAT THE PARTY STARTERS BUBBLIN UP JUST LIKE LAVA LIKE LAVA HEAT IT LIKE A SAUNA PENETRATING INTO YOUR BODY ARMOR RHYTHMICALLY WE MESSAGE YA WITH HIP HOP MIXED UP WITH SAMBA WITH SAMBA SO YES YES YALL YOU KNOW WE NEVER STOP WE NEVER REST YALL THE BLACK EYED PEAS ARE KEEPING IT FUNKY FRESH YALL AND WE WONT STOP UNTIL WE GET YOU, TIL WE GET YOU OARIA RAIO OBÁ, OBÁ, OBÁ OARIA RAIO OBÁ, OBÁ, OBÁ PETER PIPER PICKED PEPPERS BUT TAB ROCKED RHYMES 1, 2,3 FOR SEVERAL TIMES HEAVY ROTATION MADE BY EVERY KIND OF RADIO STATIONS BLESSING EVERY MIND AND WE CROSSING BOUNDARIES LIKE EVERYDAY TU PAPI PAPI PAIR TO THE R N B WE GOT WE GOT TAB MAGNIFICATION TAB MAGNIFIED LIKE EVERY DAY SO YES YES YALL YOU KNOW WE NEVER STOP WE NEVER REST YALL YALL THE BLACK EYED PEAS ARE KEEPING IT FUNKY FRESH YALL AND WE WONT STOP UNTIL WE GET YOU, TIL WE GET YOU SAYIN OARIA RAIO OBÁ, OBÁ, OBÁ (LA LA LA LA LA) OARIA RAIO OBÁ, OBÁ, OBÁ DROP HOT HOT BE MY DAILY OPERATION GOT TO PUT A RIGHT IN THIS CRAZY OCCUPATION GOTTA KEEP IT MOVIN THATS THE MOTIVATION GOTTA RIDE THE WAVES AND KEEP A TIGHT RELATION WITH MY TEAM KEEPING MOVING AND DOING IT RIGHT IVE BEEN IN A LAB EVERY DAY TIL DAYLIGHT THATS THE WAY THINGS MOVE IN THIS MONKEY BUSINESS WE TOOK AN OLD SAMBA SONG AND REMIXED IT MAS QUE NADA SAI DA MINHA FRENTE EU QUERO PASSAR POIS O SAMBA ESTA ANIMADO O QUE EU QUERO E SAMBAR ESTE SAMBA QUE E MISTO DE MARACATU E SAMBA DE PRETO VELHO SAMBA DE PRETO TU MAS QUE NADA, WE GONNA MAKE YOU FEEL LIL HOTTER PEAS AND SERGIO MENDES HEATING UP SAMBA BADABABABABABAAAAAA SERGIO PLAY YOUR PIANO SERGIO PLAY YOUR YO YO YO YO PIANO CHECK IT OUT OARIA RAIO OBÁ, OBÁ, OBÁ (LA LA LA LA LA)', '01-01-1963', 'SAMBA-FUNK'),
('GAROTA DE IPANEMA', 'OLHA QUE COISA MAIS LINDA MAIS CHEIA DE GRAÇA É ELA MENINA QUE VEM E QUE PASSA NUM DOCE BALANÇO A CAMINHO DO MAR MOÇA DO CORPO DOURADO DO SOL DE IPANEMA O SEU BALANÇADO É MAIS QUE UM POEMA É A COISA MAIS LINDA QUE EU JÁ VI PASSAR BUT I WATCH HER SO SADLY HOW CAN I TELL HER I LOVE HER YES, I WOULD GIVE MY HEART GLADLY BUT EACH DAY, WHEN SHE WALKS TO THE SEA SHE LOOKS STRAIGHT AHEAD, NOT AT ME TALL AND TAN AND YOUNG AND LOVELY THE GIRL FROM IPANEMA GOES WALKING AND WHEN SHE PASSES, I SMILE BUT SHE DOESNT SEE SHE DOESNT SEE SHE JUST DOESNT SEE', '01-01-1962', 'BOSSA-NOVA'),
('SAMBA DE JANEIRO', 'INSTRUMENTAL', '01-01-1997', 'SAMBA ELECTRONICA'),
('O QUE É, O QUE É?', 'VIVER E NÃO TER A VERGONHA DE SER FELIZ CANTAR, E CANTAR, E CANTAR A BELEZA DE SER UM ETERNO APRENDIZ AH, MEU DEUS! EU SEI QUE A VIDA DEVIA SER BEM MELHOR, E SERÁ MAS ISSO NÃO IMPEDE QUE EU REPITA É BONITA, É BONITA E É BONITA E A VIDA E A VIDA, O QUE É? DIGA LÁ, MEU IRMÃO ELA É A BATIDA DE UM CORAÇÃO ELA É UMA DOCE ILUSÃO MAS E A VIDA ELA É MARAVILHA OU É SOFRIMENTO? ELA É ALEGRIA OU LAMENTO? O QUE É, O QUE É? MEU IRMÃO HÁ QUEM FALE QUE A VIDA DA GENTE É UM NADA NO MUNDO É UMA GOTA, É UM TEMPO QUE NEM DÁ UM SEGUNDO HÁ QUEM FALE QUE É UM DIVINO MISTÉRIO PROFUNDO É O SOPRO DO CRIADOR NUMA ATITUDE REPLETA DE AMOR VOCÊ DIZ QUE É LUTA E PRAZER ELE DIZ QUE A VIDA É VIVER ELA DIZ QUE MELHOR É MORRER POIS AMADA NÃO É E O VERBO É SOFRER EU SÓ SEI QUE CONFIO NA MOÇA E NA MOÇA EU PONHO A FORÇA DA FÉ SOMOS NÓS QUE FAZEMOS A VIDA COMO DER, OU PUDER, OU QUISER SEMPRE DESEJADA, POR MAIS QUE ESTEJA ERRADA NINGUÉM QUER A MORTE, SÓ SAÚDE E SORTE E A PERGUNTA RODA, E A CABEÇA AGITA FICO COM A PUREZA DA RESPOSTA DAS CRIANÇAS É A VIDA, É BONITA E É BONITA VIVER E NÃO TER A VERGONHA DE SER FELIZ CANTAR, E CANTAR, E CANTAR A BELEZA DE SER UM ETERNO APRENDIZ AH, MEU DEUS! EU SEI QUE A VIDA DEVIA SER BEM MELHOR E SERÁ MAS ISSO NÃO IMPEDE QUE EU REPITA É BONITA, É BONITA E É BONITA', '01-01-1981', 'SAMBA-ROCK'),
('CANTA, CANTA, MINHA GENTE', 'CANTA CANTA, MINHA GENTE DEIXA A TRISTEZA PRA LÁ CANTA FORTE, CANTA ALTO QUE A VIDA VAI MELHORAR QUE A VIDA VAI MELHORAR QUE A VIDA VAI MELHORAR QUE A VIDA VAI MELHORAR QUE A VIDA VAI MELHORAR CANTEM O SAMBA DE RODA O SAMBA-CANÇÃO E O SAMBA RASGADO CANTEM O SAMBA DE BREQUE O SAMBA MODERNO E O SAMBA QUADRADO CANTEM CIRANDA, O FREVO O COCO, MAXIXE, BAIÃO E XAXADO MAS NÃO CANTEM ESSA MOÇA BONITA PORQUE ELA ESTÁ COM O MARIDO DO LADO CANTA CANTA, MINHA GENTE DEIXA A TRISTEZA PRA LÁ CANTA FORTE, CANTA ALTO QUE A VIDA VAI MELHORAR CANTA CANTA, MINHA GENTE DEIXA A TRISTEZA PRA LÁ CANTA FORTE, CANTA ALTO QUE A VIDA VAI MELHORAR QUE A VIDA VAI MELHORAR QUE A VIDA VAI MELHORAR MAS A VIDA VAI MELHORAR A VIDA VAI MELHORAR QUEM CANTA SEUS MALES ESPANTA LÁ EM CIMA DO MORRO OU SAMBANDO NO ASFALTO EU CANTO O SAMBA-ENREDO UM SAMBINHA LENTO E UM PARTIDO ALTO HÁ MUITO TEMPO NÃO OUÇO O TAL DO SAMBA SINCOPADO SÓ NÃO DÁ PRA CANTAR MESMO É VENDO O SOL NASCER QUADRADO CANTA CANTA, MINHA GENTE DEIXA A TRISTEZA PRA LÁ CANTA FORTE, CANTA ALTO QUE A VIDA VAI MELHORAR CANTA CANTA, MINHA GENTE DEIXA A TRISTEZA PRA LÁ CANTA FORTE, CANTA ALTO QUE A VIDA VAI MELHORAR QUE A VIDA VAI MELHORAR A VIDA VAI MELHORAR MAS A VIDA VAI MELHORAR QUE A VIDA VAI MELHORAR HOJE MARTINHO É BOM DE CANTAR A VIDA VAI MELHORAR MAS É CLARO QUE VAI MELHORAR A VIDA VAI MELHORAR QUE PIOR NÃO PODE FICAR COM CERTEZA VAI MELHORAR MAS A VIDA SÓ VAI MELHORAR A VIDA VAI MELHORAR É QUE A VIDA VAI MELHORAR A VIDA VAI MELHORAR AÍ EU VOU ME EMPERIQUITAR A VIDA VAI MELHORAR VOU CANTAR PRA LÁ E PRA CÁ QUE A VIDA VAI MELHORAR VOU SAMBAR PRA LÁ E PRA CÁ A VIDA VAI MELHORAR E EU VOU CANTAR E SAMBAR QUE A VIDA VAI MELHORAR MAS JÁ ESTOU CANSADO DE CANTAR QUE A VIDA VAI MELHORAR', '01-01-1974', 'SAMBA PARTIDO ALTO'),
('A FELICIDADE', 'TRISTEZA NÃO TEM FIM FELICIDADE SIM A FELICIDADE É COMO A GOTA DE ORVALHO NUMA PÉTALA DE FLOR BRILHA TRANQUILA DEPOIS DE LEVE OSCILA E CAI COMO UMA LÁGRIMA DE AMOR A FELICIDADE DO POBRE PARECE A GRANDE ILUSÃO DO CARNAVAL A GENTE TRABALHA O ANO INTEIRO POR UM MOMENTO DE SONHO PRA FAZER A FANTASIA DE REI OU DE PIRATA OU JARDINEIRA E TUDO SE ACABAR NA QUARTA-FEIRA TRISTEZA NÃO TEM FIM FELICIDADE SIM A FELICIDADE É COMO A PLUMA QUE O VENTO VAI LEVANDO PELO AR VOA TÃO LEVE MAS TEM A VIDA BREVE PRECISA QUE HAJA VENTO SEM PARAR PRECISA QUE HAJA VENTO SEM PARAR PRECISA QUE HAJA VENTO SEM PARAR TRISTEZA NÃO TEM FIM', '01-01-1959', 'BOSSA NOVA'),
('É HOJE', 'A MINHA ALEGRIA ATRAVESSOU O MAR E ANCOROU NA PASSARELA FEZ UM DESEMBARQUE FASCINANTE NO MAIOR SHOW DA TERRA SERÁ QUE EU SEREI O DONO DESSA FESTA UM REI NO MEIO DE UMA GENTE TÃO MODESTA EU VIM DESCENDO A SERRA CHEIO DE EUFORIA PARA DESFILAR O MUNDO INTEIRO ESPERA HOJE É DIA DO RISO CHORAR LEVEI O MEU SAMBA PRA MÃE DE SANTO REZAR CONTRA O MAL OLHADO EU CARREGO MEU PATUÁ ACREDITO SER O MAIS VALENTE NESSA LUTA DO ROCHEDO COM O MAR E COM O AR! É HOJE O DIA DA ALEGRIA É A TRISTEZA, NEM PODE PENSAR EM CHEGAR DIGA ESPELHO MEU SE HÁ NA AVENIDA ALGUÉM MAIS FELIZ QUE EU', '01-01-1976', 'SAMBA-ENREDO'),
('SAMBA DO AVIÃO', 'UM, DOIS, UM, DOIS, TRÊS, JÁ MINHA ALMA CANTA VEJO O RIO DE JANEIRO ESTOU MORRENDO DE SAUDADE RIO SEU MAR, PRAIAS SEM FIM RIO VOCÊ FOI FEITO PRA MIM CRISTO REDENTOR BRAÇOS ABERTOS SOBRE A GUANABARA ESTE SAMBA É SÓ PORQUE RIO EU GOSTO DE VOCÊ A MORENA VAI SAMBAR SEU CORPO TODO BALANÇAR RIO DE SOL, DE CÉU, DE MAR DENTRO DE MAIS UM MINUTO ESTAREMOS NO TOM JOBIM TE ENCONTRAR MINHA ALMA CANTA VEJO O RIO DE JANEIRO CRISTO REDENTOR BRAÇOS ABERTOS SOBRE A GUANABARA ESTE SAMBA É SÓ PORQUE RIO EU GOSTO DE VOCÊ A MORENA VAI SAMBAR SEU CORPO TODO BALANÇAR APERTE O CINTO, VAMOS CHEGAR ÁGUA BRILHANDO, OLHA A PISTA CHEGANDO E VAMOS NÓS ATERRAR', '01-01-1963', 'BOSSA-NOVA');

 `