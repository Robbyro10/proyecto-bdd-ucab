import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Color' })
export class Color {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'text',
        unique: true,
    })
    nombre: string;
}
