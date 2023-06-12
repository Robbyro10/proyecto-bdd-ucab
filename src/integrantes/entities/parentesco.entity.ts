import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Integrante } from './integrante.entity';

@Entity({ name: 'parentesco' })
export class Parentesco {
  @Column('text')
  relacion: string;

  @PrimaryColumn('int')
  @ManyToOne(() => Integrante, (integrante) => integrante.parentesco)
  @JoinColumn({ name: 'integrante2' })
  integrante1: Integrante;
}
