import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Patrocinante_empresa' })
export class Patrocinante_empresa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('text')
    email_contacto: string;

    @Column('text')
    mision: string;

}

