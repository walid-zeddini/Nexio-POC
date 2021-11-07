import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ICategorieZed } from 'app/shared/model/categorie-zed.model';
import { CategorieZedService } from './categorie-zed.service';

@Component({
  templateUrl: './categorie-zed-delete-dialog.component.html',
})
export class CategorieZedDeleteDialogComponent {
  categorie?: ICategorieZed;

  constructor(
    protected categorieService: CategorieZedService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.categorieService.delete(id).subscribe(() => {
      this.eventManager.broadcast('categorieListModification');
      this.activeModal.close();
    });
  }
}
