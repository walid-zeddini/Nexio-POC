import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICommandeZed } from 'app/shared/model/commande-zed.model';

@Component({
  selector: 'jhi-commande-zed-detail',
  templateUrl: './commande-zed-detail.component.html',
})
export class CommandeZedDetailComponent implements OnInit {
  commande: ICommandeZed | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ commande }) => (this.commande = commande));
  }

  previousState(): void {
    window.history.back();
  }
}
