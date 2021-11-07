import { ICommandeZed } from 'app/shared/model/commande-zed.model';
import { ICategorieZed } from 'app/shared/model/categorie-zed.model';

export interface IProduitZed {
  id?: number;
  designation?: string;
  marque?: string;
  modele?: string;
  configuration?: string;
  prixUnitaire?: number;
  quantite?: number;
  commandes?: ICommandeZed[];
  categories?: ICategorieZed[];
  categorie?: ICategorieZed;
}

export class ProduitZed implements IProduitZed {
  constructor(
    public id?: number,
    public designation?: string,
    public marque?: string,
    public modele?: string,
    public configuration?: string,
    public prixUnitaire?: number,
    public quantite?: number,
    public commandes?: ICommandeZed[],
    public categories?: ICategorieZed[],
    public categorie?: ICategorieZed
  ) {}
}
