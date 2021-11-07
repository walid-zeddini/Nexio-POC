import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICategorieZed, CategorieZed } from 'app/shared/model/categorie-zed.model';
import { CategorieZedService } from './categorie-zed.service';
import { IProduitZed } from 'app/shared/model/produit-zed.model';
import { ProduitZedService } from 'app/entities/produit-zed/produit-zed.service';

@Component({
  selector: 'jhi-categorie-zed-update',
  templateUrl: './categorie-zed-update.component.html',
})
export class CategorieZedUpdateComponent implements OnInit {
  isSaving = false;
  produits: IProduitZed[] = [];

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required]],
    libelle: [null, [Validators.required]],
    produit: [],
  });

  constructor(
    protected categorieService: CategorieZedService,
    protected produitService: ProduitZedService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ categorie }) => {
      this.updateForm(categorie);

      this.produitService.query().subscribe((res: HttpResponse<IProduitZed[]>) => (this.produits = res.body || []));
    });
  }

  updateForm(categorie: ICategorieZed): void {
    this.editForm.patchValue({
      id: categorie.id,
      code: categorie.code,
      libelle: categorie.libelle,
      produit: categorie.produit,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const categorie = this.createFromForm();
    if (categorie.id !== undefined) {
      this.subscribeToSaveResponse(this.categorieService.update(categorie));
    } else {
      this.subscribeToSaveResponse(this.categorieService.create(categorie));
    }
  }

  private createFromForm(): ICategorieZed {
    return {
      ...new CategorieZed(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      produit: this.editForm.get(['produit'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICategorieZed>>): void {
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

  trackById(index: number, item: IProduitZed): any {
    return item.id;
  }
}
