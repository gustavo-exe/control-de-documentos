import { Injectable } from '@angular/core';
import { Documento } from './documentos.types';

@Injectable()
export class DocumentosService {

  constructor() { }

  private documentos: Documento[] = [
    {
      id: '1',
      nombre: 'Informe Anual 2023',
      descripcion: 'Resumen de actividades y resultados del año 2023.',
      fechaCreacion: new Date('2023-12-31'),
      creador: 'Juan Pérez',
      estado: 'Activo',
      path: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
    },
    {
      id: '2',
      nombre: 'Manual de Usuario',
      descripcion: 'Guía de uso para el sistema corporativo.',
      fechaCreacion: new Date('2024-01-15'),
      creador: 'Ana Gómez',
      estado: 'Activo',
      path: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
    },
    {
      id: '3',
      nombre: 'Acta de Reunión Febrero',
      descripcion: 'Resumen de acuerdos tomados en la reunión de febrero.',
      fechaCreacion: new Date('2024-02-20'),
      creador: 'Carlos López',
      estado: 'Archivado',
      path: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
    },
    {
      id: '4',
      nombre: 'Plan Estratégico 2024',
      descripcion: 'Estrategias y objetivos para el año 2024.',
      fechaCreacion: new Date('2024-03-01'),
      creador: 'María Castillo',
      estado: 'Activo',
      path: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf',
    },
  ];

  getDocumentos(): Documento[] {
    return this.documentos;
  }
}
