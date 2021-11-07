import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NexioSharedModule } from 'app/shared/shared.module';
import { CategorieZedComponent } from './categorie-zed.component';
import { CategorieZedDetailComponent } from './categorie-zed-detail.component';
import { CategorieZedUpdateComponent } from './categorie-zed-update.component';
import { CategorieZedDeleteDialogComponent } from './categorie-zed-delete-dialog.component';
import { categorieRoute } from './categorie-zed.route';

@NgModule({
  imports: [NexioSharedModule, RouterModule.forChild(categorieRoute)],
  declarations: [CategorieZedComponent, CategorieZedDetailComponent, CategorieZedUpdateComponent, CategorieZedDeleteDialogComponent],
  entryComponents: [CategorieZedDeleteDialogComponent],
})
export class NexioCategorieZedModule {}
