import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { ICommandeZed, CommandeZed } from 'app/shared/model/commande-zed.model';
import { CommandeZedService } from './commande-zed.service';
import { CommandeZedComponent } from './commande-zed.component';
import { CommandeZedDetailComponent } from './commande-zed-detail.component';
import { CommandeZedUpdateComponent } from './commande-zed-update.component';

@Injectable({ providedIn: 'root' })
export class CommandeZedResolve implements Resolve<ICommandeZed> {
  constructor(private service: CommandeZedService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ICommandeZed> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((commande: HttpResponse<CommandeZed>) => {
          if (commande.body) {
            return of(commande.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new CommandeZed());
  }
}

export const commandeRoute: Routes = [
  {
    path: '',
    component: CommandeZedComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'nexioApp.commande.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: CommandeZedDetailComponent,
    resolve: {
      commande: CommandeZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.commande.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: CommandeZedUpdateComponent,
    resolve: {
      commande: CommandeZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.commande.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: CommandeZedUpdateComponent,
    resolve: {
      commande: CommandeZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.commande.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
