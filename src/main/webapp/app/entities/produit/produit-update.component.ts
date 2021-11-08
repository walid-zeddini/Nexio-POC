import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IProduit, Produit } from 'app/shared/model/produit.model';
import { ProduitService } from './produit.service';
import { ICategorie } from 'app/shared/model/categorie.model';
import { CategorieService } from 'app/entities/categorie/categorie.service';

@Component({
  selector: 'jhi-produit-update',
  templateUrl: './produit-update.component.html',
})
export class ProduitUpdateComponent implements OnInit {
  isSaving = false;
  categories: ICategorie[] = [];

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required, Validators.maxLength(40)]],
    marque: [null, [Validators.required, Validators.maxLength(70)]],
    modele: [null, [Validators.required, Validators.maxLength(100)]],
    caracteristiques: [null, [Validators.required, Validators.maxLength(100)]],
    prixUnitaire: [null, [Validators.required]],
    quantite: [null, [Validators.required]],
    categorie: [],
  });

  constructor(
    protected produitService: ProduitService,
    protected categorieService: CategorieService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ produit }) => {
      this.updateForm(produit);

      this.categorieService.query().subscribe((res: HttpResponse<ICategorie[]>) => (this.categories = res.body || []));
    });
  }

  updateForm(produit: IProduit): void {
    this.editForm.patchValue({
      id: produit.id,
      code: produit.code,
      marque: produit.marque,
      modele: produit.modele,
      caracteristiques: produit.caracteristiques,
      prixUnitaire: produit.prixUnitaire,
      quantite: produit.quantite,
      categorie: produit.categorie,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const produit = this.createFromForm();
    if (produit.id !== undefined) {
      this.subscribeToSaveResponse(this.produitService.update(produit));
    } else {
      this.subscribeToSaveResponse(this.produitService.create(produit));
    }
  }

  private createFromForm(): IProduit {
    return {
      ...new Produit(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      marque: this.editForm.get(['marque'])!.value,
      modele: this.editForm.get(['modele'])!.value,
      caracteristiques: this.editForm.get(['caracteristiques'])!.value,
      prixUnitaire: this.editForm.get(['prixUnitaire'])!.value,
      quantite: this.editForm.get(['quantite'])!.value,
      categorie: this.editForm.get(['categorie'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProduit>>): void {
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

  trackById(index: number, item: ICategorie): any {
    return item.id;
  }
}
