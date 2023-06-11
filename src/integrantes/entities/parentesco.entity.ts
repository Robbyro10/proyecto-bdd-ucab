import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Integrante } from './integrante.entity';

@Entity({ name: 'Parentesco' })
export class Parentesco {
  @Column('text')
  relacion: string;

  //todo: needs work
  @PrimaryColumn('int')
  @ManyToOne(() => Integrante, (integrante) => integrante.parentesco)
  integrante1: Integrante;

  @PrimaryColumn('int')
  @ManyToOne(() => Integrante, (integrante) => integrante.parentesco)
  integrante2: Integrante;
}
