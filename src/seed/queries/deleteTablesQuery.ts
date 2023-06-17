export const deleteTablesQuery = `
DROP TABLE IF EXISTS 
    agjautor, agjcolor, agjdonacion, agje_c, agjescuela_samba,
    agjevento_anual_sem, agjganador, agjhabilidad, agjhist_int,
    agjhist_patrocinio, agjhist_título_carnaval, agjint_hab,
    agjintegrantes, agjlugar, agjorg_carnaval, agjparentesco,
    agjpatrocinante_empresa, agjpatrocinante_persona, agjpremio_especial,
    agjrol, agjsamba, agjtelefono
CASCADE;`
;