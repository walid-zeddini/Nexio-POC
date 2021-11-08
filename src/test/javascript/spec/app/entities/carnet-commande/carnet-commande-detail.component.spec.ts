import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { CarnetCommandeDetailComponent } from 'app/entities/carnet-commande/carnet-commande-detail.component';
import { CarnetCommande } from 'app/shared/model/carnet-commande.model';

describe('Component Tests', () => {
  describe('CarnetCommande Management Detail Component', () => {
    let comp: CarnetCommandeDetailComponent;
    let fixture: ComponentFixture<CarnetCommandeDetailComponent>;
    const route = ({ data: of({ carnetCommande: new CarnetCommande(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [CarnetCommandeDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CarnetCommandeDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CarnetCommandeDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load carnetCommande on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.carnetCommande).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
