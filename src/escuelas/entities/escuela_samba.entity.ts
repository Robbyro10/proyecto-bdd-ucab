import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Escuela_Samba' })
export class Escuela_Samba {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('text')
    direccion_sede: string;

    @Column('text')
    resumen_hist: string;

    // id_lugar
}
