import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Lugar' })
export class Lugar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('text')
    tipo: string;

    // id_lugar_padre
}
