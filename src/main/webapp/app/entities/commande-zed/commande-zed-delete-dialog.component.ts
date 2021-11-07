import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICommandeZed } from 'app/shared/model/commande-zed.model';
import { CommandeZedService } from './commande-zed.service';

@Component({
  templateUrl: './commande-zed-delete-dialog.component.html',
})
export class CommandeZedDeleteDialogComponent {
  commande?: ICommandeZed;

  constructor(protected commandeService: CommandeZedService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.commandeService.delete(id).subscribe(() => {
      this.eventManager.broadcast('commandeListModification');
      this.activeModal.close();
    });
  }
}
