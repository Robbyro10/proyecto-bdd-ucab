import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Integrante } from './integrante.entity';

@Entity({ name: 'agjparentesco' })
export class Parentesco {
  @Column('text')
  relacion: string;

  @PrimaryColumn('int')
  @ManyToOne(() => Integrante, (integrante) => integrante.parentesco)
  @JoinColumn({ name: 'agjintegrante2' })
  integrante1: Integrante;
}
