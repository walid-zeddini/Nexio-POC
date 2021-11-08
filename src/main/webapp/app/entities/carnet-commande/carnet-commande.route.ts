import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICarnetCommande, CarnetCommande } from 'app/shared/model/carnet-commande.model';
import { CarnetCommandeService } from './carnet-commande.service';
import { CarnetCommandeComponent } from './carnet-commande.component';
import { CarnetCommandeDetailComponent } from './carnet-commande-detail.component';
import { CarnetCommandeUpdateComponent } from './carnet-commande-update.component';

@Injectable({ providedIn: 'root' })
export class CarnetCommandeResolve implements Resolve<ICarnetCommande> {
  constructor(private service: CarnetCommandeService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICarnetCommande> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((carnetCommande: HttpResponse<CarnetCommande>) => {
          if (carnetCommande.body) {
            return of(carnetCommande.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CarnetCommande());
  }
}

export const carnetCommandeRoute: Routes = [
  {
    path: '',
    component: CarnetCommandeComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'nexioApp.carnetCommande.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CarnetCommandeDetailComponent,
    resolve: {
      carnetCommande: CarnetCommandeResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.carnetCommande.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CarnetCommandeUpdateComponent,
    resolve: {
      carnetCommande: CarnetCommandeResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.carnetCommande.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CarnetCommandeUpdateComponent,
    resolve: {
      carnetCommande: CarnetCommandeResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.carnetCommande.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
