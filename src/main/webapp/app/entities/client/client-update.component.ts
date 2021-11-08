import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IClient, Client } from 'app/shared/model/client.model';
import { ClientService } from './client.service';

@Component({
  selector: 'jhi-client-update',
  templateUrl: './client-update.component.html',
})
export class ClientUpdateComponent implements OnInit {
  isSaving = false;
  dateNaissanceDp: any;

  editForm = this.fb.group({
    id: [],
    code: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    nom: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    prenom: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    dateNaissance: [null, [Validators.required]],
    adresse: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    ville: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    codePostal: [null, [Validators.required]],
    tel: [null, [Validators.minLength(6), Validators.maxLength(30)]],
    fax: [null, [Validators.minLength(6), Validators.maxLength(30)]],
    gsm: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    email: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
  });

  constructor(protected clientService: ClientService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ client }) => {
      this.updateForm(client);
    });
  }

  updateForm(client: IClient): void {
    this.editForm.patchValue({
      id: client.id,
      code: client.code,
      nom: client.nom,
      prenom: client.prenom,
      dateNaissance: client.dateNaissance,
      adresse: client.adresse,
      ville: client.ville,
      codePostal: client.codePostal,
      tel: client.tel,
      fax: client.fax,
      gsm: client.gsm,
      email: client.email,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const client = this.createFromForm();
    if (client.id !== undefined) {
      this.subscribeToSaveResponse(this.clientService.update(client));
    } else {
      this.subscribeToSaveResponse(this.clientService.create(client));
    }
  }

  private createFromForm(): IClient {
    return {
      ...new Client(),
      id: this.editForm.get(['id'])!.value,
      code: this.editForm.get(['code'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      dateNaissance: this.editForm.get(['dateNaissance'])!.value,
      adresse: this.editForm.get(['adresse'])!.value,
      ville: this.editForm.get(['ville'])!.value,
      codePostal: this.editForm.get(['codePostal'])!.value,
      tel: this.editForm.get(['tel'])!.value,
      fax: this.editForm.get(['fax'])!.value,
      gsm: this.editForm.get(['gsm'])!.value,
      email: this.editForm.get(['email'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IClient>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
