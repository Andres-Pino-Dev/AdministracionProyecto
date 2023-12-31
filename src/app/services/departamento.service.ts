import { Departamento } from './../bases/departamento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url_base: string = 'https://localhost:44389/api/v1';
  constructor(private http: HttpClient) {}

  getDepartamento(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.url_base}/departamentos`);
  }

  getDCargo(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(`${this.url_base}/cargos`);
  }
}
