
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../bases/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url_base: string = 'https://localhost:44389/api/user';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url_base);
  }

  add(user:User): Observable<Object> {
    return this.http.post(`${this.url_base}`,user);
  }

  update(user:User): Observable<Object> {
    return this.http.put(`${this.url_base}`,user);
  }

  delete(id:number): Observable<Object> {
    return this.http.delete(`${this.url_base}/${id}`);
  }


  getUsersByDepartamentos(id:number): Observable<User[]> {
    return this.http.get<User[]>(`${this.url_base}/${id}`);
  }


  getUsersByDepartamentosAandCargo(idDepartamento:number,idCargo:number): Observable<User[]> {
    return this.http.get<User[]>(`${this.url_base}/${idDepartamento}/${idCargo}`);
  }
}
