import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IClientZed } from 'app/shared/model/client-zed.model';

type EntityResponseType = HttpResponse<IClientZed>;
type EntityArrayResponseType = HttpResponse<IClientZed[]>;

@Injectable({ providedIn: 'root' })
export class ClientZedService {
  public resourceUrl = SERVER_API_URL + 'api/clients';

  constructor(protected http: HttpClient) {}

  create(client: IClientZed): Observable<EntityResponseType> {
    return this.http.post<IClientZed>(this.resourceUrl, client, { observe: 'response' });
  }

  update(client: IClientZed): Observable<EntityResponseType> {
    return this.http.put<IClientZed>(this.resourceUrl, client, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IClientZed>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IClientZed[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
