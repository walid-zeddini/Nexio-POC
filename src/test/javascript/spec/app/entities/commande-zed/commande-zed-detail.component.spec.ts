import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { CommandeZedDetailComponent } from 'app/entities/commande-zed/commande-zed-detail.component';
import { CommandeZed } from 'app/shared/model/commande-zed.model';

describe('Component Tests', () => {
  describe('CommandeZed Management Detail Component', () => {
    let comp: CommandeZedDetailComponent;
    let fixture: ComponentFixture<CommandeZedDetailComponent>;
    const route = ({ data: of({ commande: new CommandeZed(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [CommandeZedDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(CommandeZedDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(CommandeZedDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load commande on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.commande).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
