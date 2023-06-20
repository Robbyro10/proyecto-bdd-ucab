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
 (55,11,40049994,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'NIKE')),
 (55,11,37480327,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'PROCTER & GAMBLE')),
 (55,21,31475700,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'UNICEF')),
 (55,11,24642400,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'PEPSICO')),
 (55,11,25655996,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'B3')),
 (55,11,42103609,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'REMAX')),
 (52,998,8866750,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'GRUPO MODELO')),
 (55,0,1908375411,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'MARSHALL AMPLIFICATION')),
 (1,800,3285979,(SELECT em.id FROM agjpatrocinante_empresa em WHERE nombre = 'UNITED HEALTH GROUP'));

 INSERT INTO agjtelefono (cod_int, cod_area,numero, persona_id) VALUES 
 (55,21,773812840,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'PEDRO')),
 (55,11,751034557,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'LUISA')),
 (55,51,871013426,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'LUIS')),
 (55,51,356671499,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'MARIA')),
 (55,11,529118155,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'VALENTINA')),
 (55,91,907230392,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'FERNANDO')),
 (55,21,624622268,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'SOPHIA')),
 (55,11,457487434,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'CLARISSA')),
 (55,21,647443193,(SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'DIEGO'));

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
('UM CORAÇÃO URBANO: MIGUEL, ARCANJO DAS ARTES, SAÚDA O POVO E PEDE PASSAGEM', 'INVADE MINHALMA A LINDA CANÇÃO NO TOM DA VITÓRIA CHEGOU MEU PAVÃO COM SAMBA NO PÉ NÓS VAMOS À LUTA TÔ NA BOCA DO POVO MEU NOME É TIJUCA INVADE MINHALMA A LINDA CANÇÃO NO TOM DA VITÓRIA CHEGOU MEU PAVÃO COM SAMBA NO PÉ NÓS VAMOS À LUTA TÔ NA BOCA DO POVO MEU NOME É TIJUCA SINTA O SOM É MELODIA MÚSICA NEGRO DOM QUE ACALENTAVA NOSSOS ANCESTRAIS É MUITO MAIS, É LIBERDADE A LUZ DA INSPIRAÇÃO HOJE A TIJUCA É QUEM DÁ O TOM EM NOTAS E ACORDES MUSICAIS VIAJE NA BARCA DAS CANÇÕES O JAZZ EMBALANDO OS CORAÇÕES NO SOPRO A SAUDADE, A MODA COUNTRY SE ETERNIZOU E O MEU BOREL AMERICANIZOU CHEGA, MY BROTHER, VEM VER A BATUCADA É DE ENLOUQUECER PURA CADÊNCIA DE BAMBAS JUNTOU GUITARRA E PANDEIRO TÁ AÍ O SOUL DE UM JEITO BRASILEIRO', '01-01-2018', 'SAMBA-ENREDO'),
('SONHOS DELIRANTES', 'QUERO SENTIR O GOSTO AMARGO NA MINHA LÍNGUA E VIAJAR SOB AS CORES DO ARCO-ÍRIS QUERO EMBARCAR NUM SONHO PARA UM LUGAR LINDO DESBRAVANDO MUNDO AFORA SEM RECEIOS CONTEMPLO A LUA NO INFINITO HORIZONTE COM O SILÊNCIO DA NOITE A ME CONFORTAR QUERO ESQUECER UM POUCO DA REALIDADE QUE NOS SUFOCA TODO DIA SEM PARAR EU TIVE UM SONHO DELIRANTE EU TIVE UM SONHO DELIRANTE EU TIVE UM SONHO DELIRANTE EU TIVE UM SONHO DELIRANTE', '01-01-1963', 'SAMBA-ENREDO'),
('O DONO DA TERRA', 'EU QUERIA SABER O QUE É O QUE É QUE EU VI NA TV DIZIA QUE O MUNDO NÃO É UM BRINQUEDO E TEM UM SEGREDO QUE EU NÃO SEI DIZER NÃO É CABRA-CEGA NÃO É PIQUE-ESCONDE NEM AMARELINHA NÃO É UM BRINQUEDO E TEM UM SEGREDO QUE EU QUERO SABER, QUE EU QUERO SABER MÃE ME EXPLICA DIREITINHO O QUE GENTE GRANDE ENTENDE MUITO BEM COMO PODE UMA BOMBA EXPLODIR DENTRO DE UM TREM? PAI ME EXPLICA DIREITINHO O QUE GENTE GRANDE SABE MUITO BEM COMO PODE UMA CRIANÇA POBRE DE MARRÉ DECI SEM NINGUÉM? VÊ QUAL É O NOME DO DONO DA TERRA INVENTOR DO CÉU E DO MAR PEGA O TELEFONE, LIGA PRA ESSE HOMEM DIZ QUE É PRA ELE... REINVENTAR VÊ QUAL É O NOME DO DONO DA TERRA INVENTOR DO CÉU E DO MAR PEGA O TELEFONE, LIGA PARA ESSE HOMEM DIZ QUE É PRA ELE... REINVENTAR', '01-01-1999', 'SAMBA-ENREDO'),
('É SEGREDO!', 'ESTÁ PRESENTE A NAÇÃO TIJUCANA ALÔ BOREL ENTRA E SENTA TIJUCA É SEGREDO, NÃO CONTO À NINGUÉM SOU TIJUCA, VOU ALÉM O SEU OLHAR, VOU ILUDIR A TENTAÇÃO É DESCOBRIR É SEGREDO, NÃO CONTO À NINGUÉM SOU TIJUCA, VOU ALÉM O SEU OLHAR, VOU ILUDIR A TENTAÇÃO É DESCOBRIR DESVENDAR ESSE MISTÉRIO É CASO SÉRIO, QUEM SE ARRISCA A PROCURAR O DESCONHECIDO, NO TEMPO PERDIDO AQUELE PERGAMINHO MILENAR SÃO CINZAS NA POEIRA DA MEMÓRIA E BRINCAM COM A IMAGINAÇÃO UNIDOS DA TIJUCA, NÃO É SEGREDO EU AMAR VOCÊ DECIFRAR, ISSO EU NÃO SEI DIZER SÃO COISAS DO MEU CORAÇÃO EU QUERO VER ESSE LUGAR QUE O PRÓPRIO TEMPO ACABOU DE ESQUECER MEU DEUS, POR ONDE VOU PROCURAR SERÁ QUE ALGUÉM PODE ME RESPONDER? EU QUERO VER ESSE LUGAR QUE O PRÓPRIO TEMPO ACABOU DE ESQUECER MEU DEUS, POR ONDE VOU PROCURAR SERÁ QUE ALGUÉM PODE ME RESPONDER? QUEM SOME NA MULTIDÃO ESCONDE A SUA VERDADE IMAGINAÇÃO O HERÓI JAMAIS REVELA A IDENTIDADE SERÁ O MASCARADO NESSE BAILADO UM FOLIÃO? A SENHA, O SEGREDO DA VIDA A CHAVE PERDIDA É O X DA QUESTÃO CUIDADO, O QUE SE VÊ PODE NÃO SER, SERÁ? AO ENTENDER É MELHOR REVELAR NO SONHO DO MEU CARNAVAL PARE PRA PENSAR, VAI SE TRANSFORMAR OU ESCONDER ATÉ O FINAL? É SEGREDO, NÃO CONTO À NINGUÉM SOU TIJUCA, VOU ALÉM O SEU OLHAR, VOU ILUDIR A TENTAÇÃO É DESCOBRIR', '01-01-2010', 'SAMBA-ENREDO'),
('ACELERA, TIJUCA!', 'ACELERA, TIJUCA EU VOU COM VOCÊ NOSSO LEMA É VENCER GUIANDO O FUTURO QUE UM SONHO CONSTRUIU AYRTON SENNA DO BRASIL VAI COMEÇAR LIBERE A PISTA PARA A EMOÇÃO FOI DADA A PARTIDA PREPARE O SEU CORAÇÃO TIJUCA, A HORA CHEGOU QUEM SERÁ O VENCEDOR? DOS ANIMAIS, AGILIDADE A INSPIRAR VELOCIDADE IMPRESSIONANTE A OUSADIA A INTERNET ULTRAPASSOU A ENERGIA A EQUIPE ANUNCIOU NO PIT STOP, O PILOTO PAROU E LÁ VÃO ELES NA PURA CADÊNCIA DO SAMBA NUMA CORRIDA MALUCA REPLETA DE BAMBAS TENTANDO TRAPACEAR, DEU MOLE RODOU NA PISTA FICOU PRA TRÁS O VIGARISTA ROMPENDO BARREIRAS, SUPERAM LIMITES ATLETAS BUSCANDO O PRIMEIRO LUGAR QUANDO DE REPENTE PISANDO NO BREQUE VI NO CALHAMBEQUE ALGUÉM ACENAR NA ÚLTIMA VOLTA DO MEU CARNAVAL DESPONTA UM GÊNIO TALENTO IMORTAL TRAZENDO NAS MÃOS A BANDEIRA DO NOSSO PAÍS NA RETA, A CONSAGRAÇÃO O TEMA A EMOCIONAR LÁ VEM O CAMPEÃO VOANDO BAIXO PRA VITÓRIA ALCANÇAR', '01-01-2014', 'SAMBA-ENREDO'),
('ONDE MORAM OS SONHOS', 'DIRETAMENTE DO BOREL ALÔ TIJUCA, DÁ UM SHOW BATERIA TOCA PURA CADENCIA ADORO, ADORO A MINHA FELICIDADE MORA NESSE LUGAR EU SOU FAVELA O SAMBA NO COMPASSO É MUTIRÃO DE AMOR DIGNIDADE NÃO É LUXO, NEM FAVOR A MINHA FELICIDADE MORA NESSE LUGAR EU SOU FAVELA O SAMBA NO COMPASSO É MUTIRÃO DE AMOR DIGNIDADE NÃO É LUXO, NEM FAVOR O SONHO NASCE EM MINHA ALMA VAI TOMANDO O PEITO E GANHANDO JEITO SE ETERNIZANDO, TRADUZIDO EM FORMA O MAIS IMPERFEITO, PERFEIÇÃO SE TORNA LÁ NO MEU QUINTAL, EU VOU FAZER UM BANGALÔ JÁ FOI TAPERA FEITA EM PALHA E SAPÊ E UMA CAPELA QUE A CANDEIA ALUMIOU A LUA CHEIA VEM, É LINDO O ANOITECER VAI, EU MORRO DE SAUDADE TODO MUNDO UM DIA SONHA TER SEU CANTINHO NA CIDADE VEM, É LINDO O AOUVINDO TUDO O QUE VEJO, VOU VENDO TUDO O QUE OUÇONOITECER VAI, EU MORRO DE SAUDADE TODO MUNDO UM DIA SONHA TER SEU CANTINHO NA CIDADE', '01-01-2020', 'SAMBA-ENREDO'),
('OUVINDO TUDO O QUE VEJO, VOU VENDO TUDO O QUE OUÇO', 'MINHA TIJUCA ABRE OS OLHOS PARA A MELODIA PARA OUVIR A GENIAL BATUTA REGENDO NOSSA SINFONIA SEGUINDO CAMINHOS DO SOM VÊ A POESIA BRINCAR NO SALÃO JOGA SERPENTINA EM VERSOS E RIMAS VIVENDO A MAGIA DE CADA CANÇÃO É A PURA CADÊNCIA BRASILEIRA ESSE REQUEBRADO QUE FASCINA DO BOTECO À GAFIEIRA O SAMBA ECOA EM CADA ESQUINA SUSPENSE ETERNIZADO NA TELA, UM BEIJO APAIXONADO O FILME QUE PASSA EM MINHA MENTE COM A MÚSICA, GANHA O CORAÇÃO CHEGA A EMOCIONAR VER A PLATÉIA DELIRAR VIBRA O MAESTRO VENDO O ARTISTA NA CONSAGRAÇÃO PISCAM LUZES COLORIDAS A NOITE, PRA DANÇAR CONVIDA SE A MÚSICA TOCOU A ALMA UM DIA SEMPRE TRAZ UMA IMAGEM QUE HOJE FAÇO FANTASIA', '01-01-2006', 'SAMBA-ENREDO'),
('É HOJE', 'A MINHA ALEGRIA ATRAVESSOU O MAR E ANCOROU NA PASSARELA FEZ UM DESEMBARQUE FASCINANTE NO MAIOR SHOW DA TERRA SERÁ QUE EU SEREI O DONO DESSA FESTA UM REI NO MEIO DE UMA GENTE TÃO MODESTA EU VIM DESCENDO A SERRA CHEIO DE EUFORIA PARA DESFILAR O MUNDO INTEIRO ESPERA HOJE É DIA DO RISO CHORAR LEVEI O MEU SAMBA PRA MÃE DE SANTO REZAR CONTRA O MAL OLHADO EU CARREGO MEU PATUÁ ACREDITO SER O MAIS VALENTE NESSA LUTA DO ROCHEDO COM O MAR E COM O AR! É HOJE O DIA DA ALEGRIA É A TRISTEZA, NEM PODE PENSAR EM CHEGAR DIGA ESPELHO MEU SE HÁ NA AVENIDA ALGUÉM MAIS FELIZ QUE EU', '01-01-1976', 'SAMBA-ENREDO'),
('WARANÃ - A REEXISTÊNCIA VERMELHA', 'ERÊ, ESSA MATA É SUA, É SUA ERÊ, VEM PROVAR DOCE MEL, DOCE MEL WARANÃ DA TIJUCA VEM BRINCAR NO BOREL ERÊ, ESSA MATA É SUA, É SUA ERÊ, VEM PROVAR DOCE MEL, DOCE MEL WARANÃ DA TIJUCA VEM BRINCAR NO BOREL ALTO CÉU DE TUPANA E YURUPARI DUAS FORÇAS QUE VÃO FLUIR A ENERGIA DE MONÃ QUE EQUILIBRA O BEM E O MAL UM LUGAR ONDE AS PEDRAS PODIAM FALAR ONDE IRMÃOS DESFRUTAVAM A BELEZA SINGULAR ANHYÃ, BELA E HABILIDOSA MAS A COBRA ARDILOSA USA A FLOR PRA LHE TOCAR E NASCE KAHU’Ê, O CURUMIM DE OLHOS ALEGRES, SEMPRE ASSIM PRESENÇA TÃO BREVE A INGENUIDADE SUCUMBE À MALDADE RENASCE KAHU’Ê, O CURUMIM SEUS OLHOS ALEGRES NÃO TÊM FIM POIS O BEM É MAIOR, VAI REEXISTIR', '01-01-2022', 'SAMBA-ENREDO');

INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2014,'E',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1936,'1',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2010,'E',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2012,'E',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1980,'Ac',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1987,'Ac',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1999,'Ac',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA TIJUCA'));

INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1995,'Ac',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='TOM MAIOR'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1999,'Ac',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='TOM MAIOR'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1992,'1',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='TOM MAIOR'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1982,'E',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2008,'E',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1976,'A',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1986,'A',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1995,'A',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2005,'A',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2004,'B',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2006,'3',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DE SAO MIGUEL'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1991,'1',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DE SAO MIGUEL'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1989,'2',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DE SAO MIGUEL'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1981,'3',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DE SAO MIGUEL'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2003,'E',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO PEDREIRENSE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2006,'E',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO PEDREIRENSE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2009,'E',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO PEDREIRENSE'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1957,'A',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA BANGU'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1962,'A',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA BANGU'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2014,'B',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA BANGU'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2017,'B',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA BANGU'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1998,'C',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='INOCENTES DA BELFORD ROXO'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2008,'B',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='INOCENTES DA BELFORD ROXO'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2012,'A',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='INOCENTES DA BELFORD ROXO'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1964,'2',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1970,'2',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1976,'2',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(1979,'2',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2006,'B',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA TIJUCA'));
INSERT INTO agjhist_título_carnaval(año,grupo,agjid_escuela) VALUES(2013,'A',
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA TIJUCA'));

INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('S@MBA-NET','MEJOR INTERPRETE','I',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjganador (año, premio_id, hist_int_fecha_ini, hist_int_agjid_escuela, hist_int_agjid_integrante) VALUES(2022,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='S@MBA-NET' AND p.descripcion='MEJOR INTERPRETE'),
'2019-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'));
INSERT INTO agjganador (año, premio_id, hist_int_fecha_ini, hist_int_agjid_escuela, hist_int_agjid_integrante) VALUES(2019,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='S@MBA-NET' AND p.descripcion='MEJOR INTERPRETE'),
'2019-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'));

INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('TAMBORIM DE OURO','MEJOR INTERPRETE','I',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjganador (año, premio_id, hist_int_fecha_ini, hist_int_agjid_escuela, hist_int_agjid_integrante) VALUES(2019,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='TAMBORIM DE OURO' AND p.descripcion='MEJOR INTERPRETE'),
'2019-1-1',
(SELECT hi.agjid_escuela FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'),
(SELECT hi.agjid_integrante FROM agjhist_int hi JOIN agjintegrantes i ON hi.agjid_integrante=i.id WHERE i.apodo='WANTUIR' AND hi.fecha_ini='2019-1-1'));

INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('ESTANDARTE DE OURO','BATERIA','E',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2013,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='ESTANDARTE DE OURO' AND p.descripcion='BATERIA'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2014,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='ESTANDARTE DE OURO' AND p.descripcion='BATERIA'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));

INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('ESTANDARTE DE OURO','ALA DE BAIANAS','E',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2013,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='ESTANDARTE DE OURO' AND p.descripcion='ALA DE BAIANAS'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2016,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='ESTANDARTE DE OURO' AND p.descripcion='ALA DE BAIANAS'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));

INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('S@MBA-NET','GALERIA DE VELHA GUARDA MAS ELEGANTE','E',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2018,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='S@MBA-NET' AND p.descripcion='GALERIA DE VELHA GUARDA MAS ELEGANTE'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='UNIDOS DA BANGU'));
INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('S@MBA-NET','MEJOR SAMBA-ENREDO','E',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('ESTANDARTE DE OURO','MEJOR SAMBA-ENREDO','E',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2022,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='S@MBA-NET' AND p.descripcion='MEJOR SAMBA-ENREDO'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='INOCENTES DA BELFORD ROXO'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2022,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='ESTANDARTE DE OURO' AND p.descripcion='MEJOR SAMBA-ENREDO'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='INOCENTES DA BELFORD ROXO'));

INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('S@MBA-NET','DESTAQUE DE LUXO','E',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2015,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='S@MBA-NET' AND p.descripcion='DESTAQUE DE LUXO'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA TIJUCA'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2016,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='S@MBA-NET' AND p.descripcion='DESTAQUE DE LUXO'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA TIJUCA'));

INSERT INTO agjpremio_especial (nombre, descripcion, tipo, lugar_id) VALUES('ESTANDARTE DE OURO','FANTASIA','E',(SELECT l.id FROM agjlugar l WHERE l.nombre='RIO DE JANEIRO' AND l.tipo='CIUDAD'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2011,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='ESTANDARTE DE OURO' AND p.descripcion='FANTASIA'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));
INSERT INTO agjganador (año, premio_id, escuela_id) VALUES(2016,
(SELECT p.id FROM agjpremio_especial p WHERE p.nombre='ESTANDARTE DE OURO' AND p.descripcion='FANTASIA'),
(SELECT e.id FROM agjescuela_samba e WHERE e.nombre='IMPERIO DA ZONA NORTE'));

INSERT INTO agjevento_anual_sem (agjid_escuela, nombre, fecha_ini, fecha_fin, tipo, total_asistentes, costo_unitario_r$, descripcion) 
 VALUES 
 ((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DA TIJUCA'), 'MÚSICA E DANÇA', '2020-08-19','2021-08-19', 'TALLER',  56, 20, 'TALLER DE BAILE EN LA ESCUELA PARA TODO AQUEL QUE QUIERA DIVERTIRSE BAILANDO Y CANTANDO SAMBA' ),
 ((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DA TIJUCA'), 'CONCURSO DE DANÇA', '2010-05-03', '2010-11-03', 'CONCURSO', 40, 10, 'CONCURSO DE BAILE EN LA PLAYA CERCANA, QUIEN SERA EL MEJOR BAILARIN DE SAMBA?' ),
 ((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'TOM MAIOR'), 'NOITE DA CULTURA', '2009-04-10', '2009-10-10', 'VISITA', 23, 15, 'VISITA GUIADA A LA SEDE DE LA ESCUELA PARA APRENDER SOBRE LA HISTORIA DE LA ESCUELA Y SU PASION POR EL CARNAVAL' ),
 ((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO DA ZONA NORTE'), 'SAMBA DE FOME', '2017-12-20', '2018-12-20', 'FIESTA', 150, 30, 'FERIA EN LA PLAZA LOCAL DONDE NEGOCIOS LOCALES SIRVEN COMIDA Y LA ESCUELA PRESENTA SU SAMBA-ENREDO' ),
 ((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO DA ZONA NORTE'), 'PARECE NÓS', '2017-12-20', '2019-06-20', 'SERVICIO' , 20, 10, 'PUESTO DE MAQUILLAJE DE LA ESCUELA DONDE LA GENTE PUEDE VENIR Y SER MAQUILLADOS COMO LOS INTEGRANTES DEL SAMBA-ENREDO' ),
 ((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DA BANGU'), 'VESTIR-SE E DANÇAR', '2021-12-25', '2022-06-25', 'FIESTA', 49, 40, 'FIESTA EN LA ESCUELA DONDE LOS PARTICIPANTES PUEDEN VESTIRSE Y MAQUILLARSE COMO LOS INTEGRANTES DEL SAMBA-ENREDO Y RECIBIR UNA CLASE DE BAILE DE SAMBA' ),
 ((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'INOCENTES DA BELFORD ROXO'), 'CRIAR SAMBA', '2005-04-01', '2005-10-01', 'TALLER', 22, 30, 'TALLER DONDE SE ENSEÑA A LOS PARTICIPANTES A TOCAR SAMBA CON LOS DISTINTOS INSTRUMENTOS MUSICALES DEL GENERO' ),
  ((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DE SAO MIGUEL'), 'CONHEÇA SEU SAMBA', '2012-06-09', '2012-12-09', 'VISITA', 63, 10, 'VISITA GUIADA A LA ESCUELA PARA CONOCER A LOS INTEGRANTES Y LA HISTORIA DE LA ESCUELA' ),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO DA TIJUCA'), 'EXPLOSÃO DO SAMBA', '2022-10-15', '2023-10-15', 'FIESTA', 357, 20, 'FIESTA NOCTURNA QUE OFRECE COMIDA, BEBIDAS Y ENTRETENIMIENTO DE PARTE DE LOS BAILARINES Y MUSICOS DE LA ESCUELA' );

INSERT INTO agjhist_patrocinio (agjid_escuela, fecha_ini, fecha_fin, empresa_id, persona_id) 
VALUES 
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DA TIJUCA'), '2018-08-19','2021-08-19', (SELECT e.id FROM agjpatrocinante_empresa e WHERE nombre = 'PROCTER & GAMBLE'), NULL),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO PEDREIRENSE'), '2010-05-03', '2011-05-03', (SELECT e.id FROM agjpatrocinante_empresa e WHERE nombre = 'PROCTER & GAMBLE'), NULL),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'TOM MAIOR'), '2009-04-10', '2020-04-10', NULL, (SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'VALENTINA')),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO DA ZONA NORTE'), '2017-12-20', NULL, (SELECT e.id FROM agjpatrocinante_empresa e WHERE nombre = 'NIKE'), NULL ),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'MANGUEIRA DO AMANHA'), '2022-12-20', NULL, NULL, (SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'CLARISSA')),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DA BANGU'), '2005-08-01', '2016-08-01', (SELECT e.id FROM agjpatrocinante_empresa e WHERE nombre = 'REMAX'), NULL ),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'INOCENTES DA BELFORD ROXO'), '1987-04-01', '1990-10-01',  NULL, (SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'SOPHIA')),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'UNIDOS DE SAO MIGUEL'), '2012-06-09', '2019-12-09', (SELECT e.id FROM agjpatrocinante_empresa e WHERE nombre = 'GRUPO MODELO'), NULL ),
((SELECT e.id FROM agjescuela_samba e WHERE nombre = 'IMPERIO DA TIJUCA'), '2022-10-15', NULL, NULL, (SELECT e.id FROM agjpatrocinante_persona e WHERE primer_nombre = 'SOPHIA'));


`


 