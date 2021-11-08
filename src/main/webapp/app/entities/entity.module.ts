import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'produit',
        loadChildren: () => import('./produit/produit.module').then(m => m.NexioProduitModule),
      },
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.NexioClientModule),
      },
      {
        path: 'categorie',
        loadChildren: () => import('./categorie/categorie.module').then(m => m.NexioCategorieModule),
      },
      {
        path: 'commande',
        loadChildren: () => import('./commande/commande.module').then(m => m.NexioCommandeModule),
      },
      {
        path: 'carnet-commande',
        loadChildren: () => import('./carnet-commande/carnet-commande.module').then(m => m.NexioCarnetCommandeModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class NexioEntityModule {}
