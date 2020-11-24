import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  base_url = "http://localhost:5000";

  showAllMenuItems(): Observable<Object> {
    return this.http.get(`${this.base_url}/menu`);
  }

  showOnlyOneItem(id: number): Observable<Object> {
    return this.http.get(`${this.base_url}/menu/${id}`);
  }
  
}
