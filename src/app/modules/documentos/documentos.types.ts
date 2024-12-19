export interface Documento {
  id: string;
  nombre: string;
  descripcion: string;
  fechaCreacion: Date;
  creador: string;
  estado: 'Activo' | 'Archivado';
  path: string;
}
