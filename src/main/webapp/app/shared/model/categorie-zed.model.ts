import { IProduitZed } from 'app/shared/model/produit-zed.model';

export interface ICategorieZed {
  id?: number;
  code?: string;
  libelle?: string;
  produits?: IProduitZed[];
  produit?: IProduitZed;
}

export class CategorieZed implements ICategorieZed {
  constructor(
    public id?: number,
    public code?: string,
    public libelle?: string,
    public produits?: IProduitZed[],
    public produit?: IProduitZed
  ) {}
}
