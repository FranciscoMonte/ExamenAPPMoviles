import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvertidorService {
  private apiUrl = 'https://www.mindicador.cl/api';

  constructor(private http: HttpClient) {}
  getIndicador(nombreIndicador: string) {
    return this.http.get(`${this.apiUrl}/${nombreIndicador}`);
  }
}
