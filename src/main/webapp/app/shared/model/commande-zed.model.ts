import { Moment } from 'moment';
import { IProduitZed } from 'app/shared/model/produit-zed.model';
import { IClientZed } from 'app/shared/model/client-zed.model';

export interface ICommandeZed {
  id?: number;
  qte?: number;
  date?: Moment;
  etat?: number;
  produit?: IProduitZed;
  client?: IClientZed;
}

export class CommandeZed implements ICommandeZed {
  constructor(
    public id?: number,
    public qte?: number,
    public date?: Moment,
    public etat?: number,
    public produit?: IProduitZed,
    public client?: IClientZed
  ) {}
}
