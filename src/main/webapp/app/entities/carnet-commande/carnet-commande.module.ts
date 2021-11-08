import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NexioSharedModule } from 'app/shared/shared.module';
import { CarnetCommandeComponent } from './carnet-commande.component';
import { CarnetCommandeDetailComponent } from './carnet-commande-detail.component';
import { CarnetCommandeUpdateComponent } from './carnet-commande-update.component';
import { CarnetCommandeDeleteDialogComponent } from './carnet-commande-delete-dialog.component';
import { carnetCommandeRoute } from './carnet-commande.route';

@NgModule({
  imports: [NexioSharedModule, RouterModule.forChild(carnetCommandeRoute)],
  declarations: [
    CarnetCommandeComponent,
    CarnetCommandeDetailComponent,
    CarnetCommandeUpdateComponent,
    CarnetCommandeDeleteDialogComponent,
  ],
  entryComponents: [CarnetCommandeDeleteDialogComponent],
})
export class NexioCarnetCommandeModule {}
