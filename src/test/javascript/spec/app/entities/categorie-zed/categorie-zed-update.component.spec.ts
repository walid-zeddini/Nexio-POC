import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { CategorieZedUpdateComponent } from 'app/entities/categorie-zed/categorie-zed-update.component';
import { CategorieZedService } from 'app/entities/categorie-zed/categorie-zed.service';
import { CategorieZed } from 'app/shared/model/categorie-zed.model';

describe('Component Tests', () => {
  describe('CategorieZed Management Update Component', () => {
    let comp: CategorieZedUpdateComponent;
    let fixture: ComponentFixture<CategorieZedUpdateComponent>;
    let service: CategorieZedService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [CategorieZedUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CategorieZedUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CategorieZedUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CategorieZedService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CategorieZed(123);
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
        const entity = new CategorieZed();
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
