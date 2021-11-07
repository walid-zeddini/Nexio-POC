import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IClientZed, ClientZed } from 'app/shared/model/client-zed.model';
import { ClientZedService } from './client-zed.service';
import { ClientZedComponent } from './client-zed.component';
import { ClientZedDetailComponent } from './client-zed-detail.component';
import { ClientZedUpdateComponent } from './client-zed-update.component';

@Injectable({ providedIn: 'root' })
export class ClientZedResolve implements Resolve<IClientZed> {
  constructor(private service: ClientZedService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IClientZed> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((client: HttpResponse<ClientZed>) => {
          if (client.body) {
            return of(client.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new ClientZed());
  }
}

export const clientRoute: Routes = [
  {
    path: '',
    component: ClientZedComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'nexioApp.client.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ClientZedDetailComponent,
    resolve: {
      client: ClientZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.client.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ClientZedUpdateComponent,
    resolve: {
      client: ClientZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.client.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ClientZedUpdateComponent,
    resolve: {
      client: ClientZedResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'nexioApp.client.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
