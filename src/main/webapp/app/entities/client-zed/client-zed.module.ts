import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NexioSharedModule } from 'app/shared/shared.module';
import { ClientZedComponent } from './client-zed.component';
import { ClientZedDetailComponent } from './client-zed-detail.component';
import { ClientZedUpdateComponent } from './client-zed-update.component';
import { ClientZedDeleteDialogComponent } from './client-zed-delete-dialog.component';
import { clientRoute } from './client-zed.route';

@NgModule({
  imports: [NexioSharedModule, RouterModule.forChild(clientRoute)],
  declarations: [ClientZedComponent, ClientZedDetailComponent, ClientZedUpdateComponent, ClientZedDeleteDialogComponent],
  entryComponents: [ClientZedDeleteDialogComponent],
})
export class NexioClientZedModule {}
