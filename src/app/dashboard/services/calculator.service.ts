import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BidDTO } from '../interfaces/bidDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private http = inject(HttpClient);
  private controller: string = "Calculator";

  private readonly baseUrl: string = `${environment.BASE_URL_API}`;
  constructor() { }

  public calculateBid(value: number, type: string): Observable<BidDTO> {
    const url = `${this.baseUrl}/${this.controller}/${value}/${type}`;
    return this.http.get<BidDTO>(url)
      .pipe(
        tap(resp => resp),
        catchError((err) => throwError(() => err.error))
      );
  }
}
