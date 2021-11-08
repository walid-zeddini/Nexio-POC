import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { CarnetCommandeUpdateComponent } from 'app/entities/carnet-commande/carnet-commande-update.component';
import { CarnetCommandeService } from 'app/entities/carnet-commande/carnet-commande.service';
import { CarnetCommande } from 'app/shared/model/carnet-commande.model';

describe('Component Tests', () => {
  describe('CarnetCommande Management Update Component', () => {
    let comp: CarnetCommandeUpdateComponent;
    let fixture: ComponentFixture<CarnetCommandeUpdateComponent>;
    let service: CarnetCommandeService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [CarnetCommandeUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CarnetCommandeUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CarnetCommandeUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CarnetCommandeService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CarnetCommande(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new CarnetCommande();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
