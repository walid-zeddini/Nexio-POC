import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IProduitZed, ProduitZed } from 'app/shared/model/produit-zed.model';
import { ProduitZedService } from './produit-zed.service';
import { ICategorieZed } from 'app/shared/model/categorie-zed.model';
import { CategorieZedService } from 'app/entities/categorie-zed/categorie-zed.service';

@Component({
  selector: 'jhi-produit-zed-update',
  templateUrl: './produit-zed-update.component.html',
})
export class ProduitZedUpdateComponent implements OnInit {
  isSaving = false;
  categories: ICategorieZed[] = [];

  editForm = this.fb.group({
    id: [],
    designation: [null, [Validators.required, Validators.maxLength(40)]],
    marque: [null, [Validators.required, Validators.maxLength(30)]],
    modele: [null, [Validators.required, Validators.maxLength(20)]],
    configuration: [null, [Validators.required, Validators.maxLength(50)]],
    prixUnitaire: [null, [Validators.required]],
    quantite: [null, [Validators.required]],
    categorie: [],
  });

  constructor(
    protected produitService: ProduitZedService,
    protected categorieService: CategorieZedService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ produit }) => {
      this.updateForm(produit);

      this.categorieService.query().subscribe((res: HttpResponse<ICategorieZed[]>) => (this.categories = res.body || []));
    });
  }

  updateForm(produit: IProduitZed): void {
    this.editForm.patchValue({
      id: produit.id,
      designation: produit.designation,
      marque: produit.marque,
      modele: produit.modele,
      configuration: produit.configuration,
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

  private createFromForm(): IProduitZed {
    return {
      ...new ProduitZed(),
      id: this.editForm.get(['id'])!.value,
      designation: this.editForm.get(['designation'])!.value,
      marque: this.editForm.get(['marque'])!.value,
      modele: this.editForm.get(['modele'])!.value,
      configuration: this.editForm.get(['configuration'])!.value,
      prixUnitaire: this.editForm.get(['prixUnitaire'])!.value,
      quantite: this.editForm.get(['quantite'])!.value,
      categorie: this.editForm.get(['categorie'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IProduitZed>>): void {
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

  trackById(index: number, item: ICategorieZed): any {
    return item.id;
  }
}
