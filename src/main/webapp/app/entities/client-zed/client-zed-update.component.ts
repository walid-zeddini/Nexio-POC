import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IClientZed, ClientZed } from 'app/shared/model/client-zed.model';
import { ClientZedService } from './client-zed.service';

@Component({
  selector: 'jhi-client-zed-update',
  templateUrl: './client-zed-update.component.html',
})
export class ClientZedUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    login: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    motPasse: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    nom: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    prenom: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    civilite: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
    dateNaissance: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    numero: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(4)]],
    rue: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    commune: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    ville: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    codePostal: [null, [Validators.required]],
    tel: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    fax: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    gsm: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    email: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
  });

  constructor(protected clientService: ClientZedService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ client }) => {
      this.updateForm(client);
    });
  }

  updateForm(client: IClientZed): void {
    this.editForm.patchValue({
      id: client.id,
      login: client.login,
      motPasse: client.motPasse,
      nom: client.nom,
      prenom: client.prenom,
      civilite: client.civilite,
      dateNaissance: client.dateNaissance,
      numero: client.numero,
      rue: client.rue,
      commune: client.commune,
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

  private createFromForm(): IClientZed {
    return {
      ...new ClientZed(),
      id: this.editForm.get(['id'])!.value,
      login: this.editForm.get(['login'])!.value,
      motPasse: this.editForm.get(['motPasse'])!.value,
      nom: this.editForm.get(['nom'])!.value,
      prenom: this.editForm.get(['prenom'])!.value,
      civilite: this.editForm.get(['civilite'])!.value,
      dateNaissance: this.editForm.get(['dateNaissance'])!.value,
      numero: this.editForm.get(['numero'])!.value,
      rue: this.editForm.get(['rue'])!.value,
      commune: this.editForm.get(['commune'])!.value,
      ville: this.editForm.get(['ville'])!.value,
      codePostal: this.editForm.get(['codePostal'])!.value,
      tel: this.editForm.get(['tel'])!.value,
      fax: this.editForm.get(['fax'])!.value,
      gsm: this.editForm.get(['gsm'])!.value,
      email: this.editForm.get(['email'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IClientZed>>): void {
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
