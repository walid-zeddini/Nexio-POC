import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduitZed } from 'app/shared/model/produit-zed.model';

@Component({
  selector: 'jhi-produit-zed-detail',
  templateUrl: './produit-zed-detail.component.html',
})
export class ProduitZedDetailComponent implements OnInit {
  produit: IProduitZed | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ produit }) => (this.produit = produit));
  }

  previousState(): void {
    window.history.back();
  }
}
