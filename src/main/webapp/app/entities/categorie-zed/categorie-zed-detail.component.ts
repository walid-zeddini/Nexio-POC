import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICategorieZed } from 'app/shared/model/categorie-zed.model';

@Component({
  selector: 'jhi-categorie-zed-detail',
  templateUrl: './categorie-zed-detail.component.html',
})
export class CategorieZedDetailComponent implements OnInit {
  categorie: ICategorieZed | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ categorie }) => (this.categorie = categorie));
  }

  previousState(): void {
    window.history.back();
  }
}
