import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { NexioTestModule } from '../../../test.module';
import { CarnetCommandeComponent } from 'app/entities/carnet-commande/carnet-commande.component';
import { CarnetCommandeService } from 'app/entities/carnet-commande/carnet-commande.service';
import { CarnetCommande } from 'app/shared/model/carnet-commande.model';

describe('Component Tests', () => {
  describe('CarnetCommande Management Component', () => {
    let comp: CarnetCommandeComponent;
    let fixture: ComponentFixture<CarnetCommandeComponent>;
    let service: CarnetCommandeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [CarnetCommandeComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              data: of({
                defaultSort: 'id,asc',
              }),
              queryParamMap: of(
                convertToParamMap({
                  page: '1',
                  size: '1',
                  sort: 'id,desc',
                })
              ),
            },
          },
        ],
      })
        .overrideTemplate(CarnetCommandeComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CarnetCommandeComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CarnetCommandeService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new CarnetCommande(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.carnetCommandes && comp.carnetCommandes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should load a page', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new CarnetCommande(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.loadPage(1);

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.carnetCommandes && comp.carnetCommandes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });

    it('should calculate the sort attribute for an id', () => {
      // WHEN
      comp.ngOnInit();
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['id,desc']);
    });

    it('should calculate the sort attribute for a non-id attribute', () => {
      // INIT
      comp.ngOnInit();

      // GIVEN
      comp.predicate = 'name';

      // WHEN
      const result = comp.sort();

      // THEN
      expect(result).toEqual(['name,desc', 'id']);
    });
  });
});
