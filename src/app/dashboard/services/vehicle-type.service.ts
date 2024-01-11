import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap, catchError, throwError, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehicleTypeService {

  private http = inject(HttpClient);
  private controller: string = "VehicleType";

  private readonly baseUrl: string = `${environment.BASE_URL_API}`;
  constructor() { }

  public getVehicleType(): Observable<string[]> {
    const url = `${this.baseUrl}/${this.controller}`;
    return this.http.get<string[]>(url)
      .pipe(
        tap(resp => resp),
        catchError((err) => throwError(() => err.error))
      );
  }
}
