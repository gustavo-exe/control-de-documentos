import { Component } from '@angular/core';
import { Documento } from '../documentos.types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class DetailComponent {

  documentoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.documentoForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      creador: ['', Validators.required],
      estado: ['Activo', Validators.required],
      path: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.documentoForm.valid) {
      const documento: Documento = this.documentoForm.value;
      console.log('Documento guardado:', documento);
    }
  }

}
