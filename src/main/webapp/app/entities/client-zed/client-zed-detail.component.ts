import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IClientZed } from 'app/shared/model/client-zed.model';

@Component({
  selector: 'jhi-client-zed-detail',
  templateUrl: './client-zed-detail.component.html',
})
export class ClientZedDetailComponent implements OnInit {
  client: IClientZed | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ client }) => (this.client = client));
  }

  previousState(): void {
    window.history.back();
  }
}
