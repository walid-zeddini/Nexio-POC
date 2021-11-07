import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICategorieZed, CategorieZed } from 'app/shared/model/categorie-zed.model';
import { CategorieZedService } from './categorie-zed.service';
import { CategorieZedComponent } from './categorie-zed.component';
import { CategorieZedDetailComponent } from './categorie-zed-detail.component';
import { CategorieZedUpdateComponent } from './categorie-zed-update.component';

@Injectable({ providedIn: 'root' })
export class CategorieZedResolve implements Resolve<ICategorieZed> {
  constructor(private service: CategorieZedService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICategorieZed> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((categorie: HttpResponse<CategorieZed>) => {
          if (categorie.body) {
            return of(categorie.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CategorieZed());
  }
}

export const categorieRoute: Routes = [
  {
    path: '',
    component: CategorieZedComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'nexioApp.categorie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CategorieZedDetailComponent,
    resolve: {
      categorie: CategorieZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.categorie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CategorieZedUpdateComponent,
    resolve: {
      categorie: CategorieZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.categorie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CategorieZedUpdateComponent,
    resolve: {
      categorie: CategorieZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.categorie.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
