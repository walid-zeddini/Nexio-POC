import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NexioSharedModule } from 'app/shared/shared.module';
import { CommandeZedComponent } from './commande-zed.component';
import { CommandeZedDetailComponent } from './commande-zed-detail.component';
import { CommandeZedUpdateComponent } from './commande-zed-update.component';
import { CommandeZedDeleteDialogComponent } from './commande-zed-delete-dialog.component';
import { commandeRoute } from './commande-zed.route';

@NgModule({
  imports: [NexioSharedModule, RouterModule.forChild(commandeRoute)],
  declarations: [CommandeZedComponent, CommandeZedDetailComponent, CommandeZedUpdateComponent, CommandeZedDeleteDialogComponent],
  entryComponents: [CommandeZedDeleteDialogComponent],
})
export class NexioCommandeZedModule {}
