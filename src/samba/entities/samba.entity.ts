import { Hist_Int } from "src/integrantes/entities/hist_int.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'samba' })
export class Samba {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    titulo: string;

    @Column('text')
    letra: string;

    // Si es un ano, por que poner date y no un number?
    @Column('date')
    año_carnaval: string;

    @Column('text')
    tipo: string;

    @ManyToMany(()=> Hist_Int, (hist) => hist.samba)
    @JoinTable({
        name: 'autor'
    })
    hist_int: Hist_Int[];
}

