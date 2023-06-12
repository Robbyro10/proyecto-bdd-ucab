import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Escuela_Samba } from "./escuela_samba.entity";

@Entity({ name: 'color' })
export class Color {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;

    @ManyToMany(() => Escuela_Samba, (escuela) => escuela.colores)
    escuelas: Escuela_Samba[]
}
