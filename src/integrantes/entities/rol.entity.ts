import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Org_carnaval } from "./org_carnaval.entity";

@Entity({ name: 'agjrol' })
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    nombre: string;

    @Column('text')
    descripcion: string;

    @OneToMany(
        () => Org_carnaval,
        (org) => org.rol
    )
    org_carnaval: Org_carnaval;

}
