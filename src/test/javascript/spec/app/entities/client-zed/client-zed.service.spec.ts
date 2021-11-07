import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClientZedService } from 'app/entities/client-zed/client-zed.service';
import { IClientZed, ClientZed } from 'app/shared/model/client-zed.model';

describe('Service Tests', () => {
  describe('ClientZed Service', () => {
    let injector: TestBed;
    let service: ClientZedService;
    let httpMock: HttpTestingController;
    let elemDefault: IClientZed;
    let expectedResult: IClientZed | IClientZed[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(ClientZedService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new ClientZed(
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        0,
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA',
        'AAAAAAA'
      );
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a ClientZed', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new ClientZed()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a ClientZed', () => {
        const returnedFromService = Object.assign(
          {
            login: 'BBBBBB',
            motPasse: 'BBBBBB',
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            civilite: 'BBBBBB',
            dateNaissance: 'BBBBBB',
            numero: 'BBBBBB',
            rue: 'BBBBBB',
            commune: 'BBBBBB',
            ville: 'BBBBBB',
            codePostal: 1,
            tel: 'BBBBBB',
            fax: 'BBBBBB',
            gsm: 'BBBBBB',
            email: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of ClientZed', () => {
        const returnedFromService = Object.assign(
          {
            login: 'BBBBBB',
            motPasse: 'BBBBBB',
            nom: 'BBBBBB',
            prenom: 'BBBBBB',
            civilite: 'BBBBBB',
            dateNaissance: 'BBBBBB',
            numero: 'BBBBBB',
            rue: 'BBBBBB',
            commune: 'BBBBBB',
            ville: 'BBBBBB',
            codePostal: 1,
            tel: 'BBBBBB',
            fax: 'BBBBBB',
            gsm: 'BBBBBB',
            email: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a ClientZed', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
