import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICarnetCommande } from 'app/shared/model/carnet-commande.model';
import { CarnetCommandeService } from './carnet-commande.service';

@Component({
  templateUrl: './carnet-commande-delete-dialog.component.html',
})
export class CarnetCommandeDeleteDialogComponent {
  carnetCommande?: ICarnetCommande;

  constructor(
    protected carnetCommandeService: CarnetCommandeService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.carnetCommandeService.delete(id).subscribe(() => {
      this.eventManager.broadcast('carnetCommandeListModification');
      this.activeModal.close();
    });
  }
}
