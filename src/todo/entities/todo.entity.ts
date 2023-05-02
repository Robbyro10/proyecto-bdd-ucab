import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'todos' })
export class Todo {
    @ApiProperty()
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column('text')
    title: string;

    @ApiProperty()
    @Column('text')
    description: string;

    @ApiProperty()
    @Column('bool', {
        default: false
    })
    complete: boolean;

    @ManyToOne(
        () => User,
        (user) => user.todo,
    )
    user: User;
}
