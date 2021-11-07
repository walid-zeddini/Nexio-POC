import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IProduitZed, ProduitZed } from 'app/shared/model/produit-zed.model';
import { ProduitZedService } from './produit-zed.service';
import { ProduitZedComponent } from './produit-zed.component';
import { ProduitZedDetailComponent } from './produit-zed-detail.component';
import { ProduitZedUpdateComponent } from './produit-zed-update.component';

@Injectable({ providedIn: 'root' })
export class ProduitZedResolve implements Resolve<IProduitZed> {
  constructor(private service: ProduitZedService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProduitZed> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((produit: HttpResponse<ProduitZed>) => {
          if (produit.body) {
            return of(produit.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ProduitZed());
  }
}

export const produitRoute: Routes = [
  {
    path: '',
    component: ProduitZedComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'nexioApp.produit.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ProduitZedDetailComponent,
    resolve: {
      produit: ProduitZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.produit.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ProduitZedUpdateComponent,
    resolve: {
      produit: ProduitZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.produit.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ProduitZedUpdateComponent,
    resolve: {
      produit: ProduitZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.produit.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
