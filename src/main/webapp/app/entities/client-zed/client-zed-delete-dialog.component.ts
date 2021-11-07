import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IClientZed } from 'app/shared/model/client-zed.model';
import { ClientZedService } from './client-zed.service';

@Component({
  templateUrl: './client-zed-delete-dialog.component.html',
})
export class ClientZedDeleteDialogComponent {
  client?: IClientZed;

  constructor(protected clientService: ClientZedService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.clientService.delete(id).subscribe(() => {
      this.eventManager.broadcast('clientListModification');
      this.activeModal.close();
    });
  }
}
