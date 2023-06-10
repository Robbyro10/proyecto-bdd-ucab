import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Premio_especial' })
export class Premio_especial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @Column('text')
    descripcion: string;

    @Column('text')
    tipo: string;

    // id_lugar

}