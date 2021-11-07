import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NexioTestModule } from '../../../test.module';
import { ClientZedDetailComponent } from 'app/entities/client-zed/client-zed-detail.component';
import { ClientZed } from 'app/shared/model/client-zed.model';

describe('Component Tests', () => {
  describe('ClientZed Management Detail Component', () => {
    let comp: ClientZedDetailComponent;
    let fixture: ComponentFixture<ClientZedDetailComponent>;
    const route = ({ data: of({ client: new ClientZed(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NexioTestModule],
        declarations: [ClientZedDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ClientZedDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ClientZedDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load client on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.client).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
