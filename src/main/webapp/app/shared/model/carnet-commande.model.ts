import { IProduit } from 'app/shared/model/produit.model';
import { ICommande } from 'app/shared/model/commande.model';

export interface ICarnetCommande {
  id?: number;
  qte?: number;
  prixUnitaire?: number;
  prixTotal?: number;
  etat?: number;
  produit?: IProduit;
  commande?: ICommande;
}

export class CarnetCommande implements ICarnetCommande {
  constructor(
    public id?: number,
    public qte?: number,
    public prixUnitaire?: number,
    public prixTotal?: number,
    public etat?: number,
    public produit?: IProduit,
    public commande?: ICommande
  ) {}
}
