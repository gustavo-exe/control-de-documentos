import { Component } from '@angular/core';
import { Documento } from './documentos.types';
import { DocumentosService } from './documentos.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
})
export class DocumentosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'fechaCreacion', 'creador', 'estado', 'actions'];
  dataSource!: MatTableDataSource<Documento>;

  constructor(
    private documentosService:DocumentosService
  ){
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.documentosService.getDocumentos();
  }

  applyFilter(event:KeyboardEvent){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
