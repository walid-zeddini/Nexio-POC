import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NexioSharedModule } from 'app/shared/shared.module';
import { ProduitZedComponent } from './produit-zed.component';
import { ProduitZedDetailComponent } from './produit-zed-detail.component';
import { ProduitZedUpdateComponent } from './produit-zed-update.component';
import { ProduitZedDeleteDialogComponent } from './produit-zed-delete-dialog.component';
import { produitRoute } from './produit-zed.route';

@NgModule({
  imports: [NexioSharedModule, RouterModule.forChild(produitRoute)],
  declarations: [ProduitZedComponent, ProduitZedDetailComponent, ProduitZedUpdateComponent, ProduitZedDeleteDialogComponent],
  entryComponents: [ProduitZedDeleteDialogComponent],
})
export class NexioProduitZedModule {}
