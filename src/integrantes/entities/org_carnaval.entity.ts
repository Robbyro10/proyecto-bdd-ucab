import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Hist_Int } from './hist_int.entity';
import { Rol } from './rol.entity';

@Entity({ name: 'agjorg_carnaval' })
export class Org_carnaval {
  //todo: needs work
  @PrimaryColumn('int')
  año: number;

  @ManyToOne(() => Rol, (rol) => rol.org_carnaval)
  rol: Rol;

  @ManyToOne(() => Hist_Int, (hist) => hist.org_carnaval)
  hist_int: Hist_Int;
}
