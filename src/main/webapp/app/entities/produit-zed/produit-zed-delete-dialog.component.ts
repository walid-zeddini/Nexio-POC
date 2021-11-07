import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IProduitZed } from 'app/shared/model/produit-zed.model';
import { ProduitZedService } from './produit-zed.service';

@Component({
  templateUrl: './produit-zed-delete-dialog.component.html',
})
export class ProduitZedDeleteDialogComponent {
  produit?: IProduitZed;

  constructor(protected produitService: ProduitZedService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.produitService.delete(id).subscribe(() => {
      this.eventManager.broadcast('produitListModification');
      this.activeModal.close();
    });
  }
}
