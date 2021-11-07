import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { ProduitZedUpdateComponent } from 'app/entities/produit-zed/produit-zed-update.component';
import { ProduitZedService } from 'app/entities/produit-zed/produit-zed.service';
import { ProduitZed } from 'app/shared/model/produit-zed.model';

describe('Component Tests', () => {
  describe('ProduitZed Management Update Component', () => {
    let comp: ProduitZedUpdateComponent;
    let fixture: ComponentFixture<ProduitZedUpdateComponent>;
    let service: ProduitZedService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [ProduitZedUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ProduitZedUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ProduitZedUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ProduitZedService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ProduitZed(123);
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
        const entity = new ProduitZed();
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
