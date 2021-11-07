import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { ClientZedUpdateComponent } from 'app/entities/client-zed/client-zed-update.component';
import { ClientZedService } from 'app/entities/client-zed/client-zed.service';
import { ClientZed } from 'app/shared/model/client-zed.model';

describe('Component Tests', () => {
  describe('ClientZed Management Update Component', () => {
    let comp: ClientZedUpdateComponent;
    let fixture: ComponentFixture<ClientZedUpdateComponent>;
    let service: ClientZedService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [ClientZedUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(ClientZedUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ClientZedUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ClientZedService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new ClientZed(123);
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
        const entity = new ClientZed();
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
