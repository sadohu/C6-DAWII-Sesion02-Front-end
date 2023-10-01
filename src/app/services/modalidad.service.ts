import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modalidad } from '../models/modalidad.model';

const url = AppSettings.API_ENDPOINT + "/modalidad"

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  constructor(private http: HttpClient) { }

  registraModalidad(obj : Modalidad) : Observable<any>{
    return this.http.post(url, obj);
  }
}
