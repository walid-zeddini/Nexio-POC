import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { CommandeZedUpdateComponent } from 'app/entities/commande-zed/commande-zed-update.component';
import { CommandeZedService } from 'app/entities/commande-zed/commande-zed.service';
import { CommandeZed } from 'app/shared/model/commande-zed.model';

describe('Component Tests', () => {
  describe('CommandeZed Management Update Component', () => {
    let comp: CommandeZedUpdateComponent;
    let fixture: ComponentFixture<CommandeZedUpdateComponent>;
    let service: CommandeZedService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [CommandeZedUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(CommandeZedUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(CommandeZedUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(CommandeZedService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new CommandeZed(123);
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
        const entity = new CommandeZed();
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
