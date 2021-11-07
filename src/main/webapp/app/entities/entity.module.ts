import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'produit-zed',
        loadChildren: () => import('./produit-zed/produit-zed.module').then(m => m.NexioProduitZedModule),
      },
      {
        path: 'client-zed',
        loadChildren: () => import('./client-zed/client-zed.module').then(m => m.NexioClientZedModule),
      },
      {
        path: 'categorie-zed',
        loadChildren: () => import('./categorie-zed/categorie-zed.module').then(m => m.NexioCategorieZedModule),
      },
      {
        path: 'commande-zed',
        loadChildren: () => import('./commande-zed/commande-zed.module').then(m => m.NexioCommandeZedModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class NexioEntityModule {}
