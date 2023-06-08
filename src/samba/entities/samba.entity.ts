import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Samba' })
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
}

