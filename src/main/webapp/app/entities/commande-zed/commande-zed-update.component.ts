import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICommandeZed, CommandeZed } from 'app/shared/model/commande-zed.model';
import { CommandeZedService } from './commande-zed.service';
import { IProduitZed } from 'app/shared/model/produit-zed.model';
import { ProduitZedService } from 'app/entities/produit-zed/produit-zed.service';
import { IClientZed } from 'app/shared/model/client-zed.model';
import { ClientZedService } from 'app/entities/client-zed/client-zed.service';

type SelectableEntity = IProduitZed | IClientZed;

@Component({
  selector: 'jhi-commande-zed-update',
  templateUrl: './commande-zed-update.component.html',
})
export class CommandeZedUpdateComponent implements OnInit {
  isSaving = false;
  produits: IProduitZed[] = [];
  clients: IClientZed[] = [];
  dateDp: any;

  editForm = this.fb.group({
    id: [],
    qte: [null, [Validators.required]],
    date: [null, [Validators.required]],
    etat: [null, [Validators.required]],
    produit: [],
    client: [],
  });

  constructor(
    protected commandeService: CommandeZedService,
    protected produitService: ProduitZedService,
    protected clientService: ClientZedService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ commande }) => {
      this.updateForm(commande);

      this.produitService.query().subscribe((res: HttpResponse<IProduitZed[]>) => (this.produits = res.body || []));

      this.clientService.query().subscribe((res: HttpResponse<IClientZed[]>) => (this.clients = res.body || []));
    });
  }

  updateForm(commande: ICommandeZed): void {
    this.editForm.patchValue({
      id: commande.id,
      qte: commande.qte,
      date: commande.date,
      etat: commande.etat,
      produit: commande.produit,
      client: commande.client,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const commande = this.createFromForm();
    if (commande.id !== undefined) {
      this.subscribeToSaveResponse(this.commandeService.update(commande));
    } else {
      this.subscribeToSaveResponse(this.commandeService.create(commande));
    }
  }

  private createFromForm(): ICommandeZed {
    return {
      ...new CommandeZed(),
      id: this.editForm.get(['id'])!.value,
      qte: this.editForm.get(['qte'])!.value,
      date: this.editForm.get(['date'])!.value,
      etat: this.editForm.get(['etat'])!.value,
      produit: this.editForm.get(['produit'])!.value,
      client: this.editForm.get(['client'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ICommandeZed>>): void {
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
