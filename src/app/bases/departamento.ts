import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class Departamento {

  id: number = 0;
  codigo: string = '';
  nombre: string = '';
  activo: string = '';
  idUsuarioCreacion: number = 0;
}
