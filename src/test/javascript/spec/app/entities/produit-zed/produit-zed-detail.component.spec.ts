import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { ProduitZedDetailComponent } from 'app/entities/produit-zed/produit-zed-detail.component';
import { ProduitZed } from 'app/shared/model/produit-zed.model';

describe('Component Tests', () => {
  describe('ProduitZed Management Detail Component', () => {
    let comp: ProduitZedDetailComponent;
    let fixture: ComponentFixture<ProduitZedDetailComponent>;
    const route = ({ data: of({ produit: new ProduitZed(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [ProduitZedDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ProduitZedDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ProduitZedDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load produit on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.produit).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
