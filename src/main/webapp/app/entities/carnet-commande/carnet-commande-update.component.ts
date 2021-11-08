import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICarnetCommande, CarnetCommande } from 'app/shared/model/carnet-commande.model';
import { CarnetCommandeService } from './carnet-commande.service';
import { IProduit } from 'app/shared/model/produit.model';
import { ProduitService } from 'app/entities/produit/produit.service';
import { ICommande } from 'app/shared/model/commande.model';
import { CommandeService } from 'app/entities/commande/commande.service';

type SelectableEntity = IProduit | ICommande;

@Component({
  selector: 'jhi-carnet-commande-update',
  templateUrl: './carnet-commande-update.component.html',
})
export class CarnetCommandeUpdateComponent implements OnInit {
  isSaving = false;
  produits: IProduit[] = [];
  commandes: ICommande[] = [];

  editForm = this.fb.group({
    id: [],
    qte: [null, [Validators.required]],
    prixUnitaire: [null, [Validators.required]],
    prixTotal: [null, [Validators.required]],
    etat: [null, [Validators.required]],
    produit: [],
    commande: [],
  });

  constructor(
    protected carnetCommandeService: CarnetCommandeService,
    protected produitService: ProduitService,
    protected commandeService: CommandeService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ carnetCommande }) => {
      this.updateForm(carnetCommande);

      this.produitService.query().subscribe((res: HttpResponse<IProduit[]>) => (this.produits = res.body || []));

      this.commandeService.query().subscribe((res: HttpResponse<ICommande[]>) => (this.commandes = res.body || []));
    });
  }

  updateForm(carnetCommande: ICarnetCommande): void {
    this.editForm.patchValue({
      id: carnetCommande.id,
      qte: carnetCommande.qte,
      prixUnitaire: carnetCommande.prixUnitaire,
      prixTotal: carnetCommande.prixTotal,
      etat: carnetCommande.etat,
      produit: carnetCommande.produit,
      commande: carnetCommande.commande,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const carnetCommande = this.createFromForm();
    if (carnetCommande.id !== undefined) {
      this.subscribeToSaveResponse(this.carnetCommandeService.update(carnetCommande));
    } else {
      this.subscribeToSaveResponse(this.carnetCommandeService.create(carnetCommande));
    }
  }

  private createFromForm(): ICarnetCommande {
    return {
      ...new CarnetCommande(),
      id: this.editForm.get(['id'])!.value,
      qte: this.editForm.get(['qte'])!.value,
      prixUnitaire: this.editForm.get(['prixUnitaire'])!.value,
      prixTotal: this.editForm.get(['prixTotal'])!.value,
      etat: this.editForm.get(['etat'])!.value,
      produit: this.editForm.get(['produit'])!.value,
      commande: this.editForm.get(['commande'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICarnetCommande>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
