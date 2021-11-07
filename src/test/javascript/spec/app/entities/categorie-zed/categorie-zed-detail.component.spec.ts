import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { CategorieZedDetailComponent } from 'app/entities/categorie-zed/categorie-zed-detail.component';
import { CategorieZed } from 'app/shared/model/categorie-zed.model';

describe('Component Tests', () => {
  describe('CategorieZed Management Detail Component', () => {
    let comp: CategorieZedDetailComponent;
    let fixture: ComponentFixture<CategorieZedDetailComponent>;
    const route = ({ data: of({ categorie: new CategorieZed(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [CategorieZedDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CategorieZedDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CategorieZedDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load categorie on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.categorie).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
