import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IProduitZed } from 'app/shared/model/produit-zed.model';

type EntityResponseType = HttpResponse<IProduitZed>;
type EntityArrayResponseType = HttpResponse<IProduitZed[]>;

@Injectable({ providedIn: 'root' })
export class ProduitZedService {
  public resourceUrl = SERVER_API_URL + 'api/produits';

  constructor(protected http: HttpClient) {}

  create(produit: IProduitZed): Observable<EntityResponseType> {
    return this.http.post<IProduitZed>(this.resourceUrl, produit, { observe: 'response' });
  }

  update(produit: IProduitZed): Observable<EntityResponseType> {
    return this.http.put<IProduitZed>(this.resourceUrl, produit, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProduitZed>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProduitZed[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
