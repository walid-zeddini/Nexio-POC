import { ICommandeZed } from 'app/shared/model/commande-zed.model';

export interface IClientZed {
  id?: number;
  login?: string;
  motPasse?: string;
  nom?: string;
  prenom?: string;
  civilite?: string;
  dateNaissance?: string;
  numero?: string;
  rue?: string;
  commune?: string;
  ville?: string;
  codePostal?: number;
  tel?: string;
  fax?: string;
  gsm?: string;
  email?: string;
  commandes?: ICommandeZed[];
}

export class ClientZed implements IClientZed {
  constructor(
    public id?: number,
    public login?: string,
    public motPasse?: string,
    public nom?: string,
    public prenom?: string,
    public civilite?: string,
    public dateNaissance?: string,
    public numero?: string,
    public rue?: string,
    public commune?: string,
    public ville?: string,
    public codePostal?: number,
    public tel?: string,
    public fax?: string,
    public gsm?: string,
    public email?: string,
    public commandes?: ICommandeZed[]
  ) {}
}
