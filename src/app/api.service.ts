import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PtNg } from './Model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = "http://localhost:54889/api/pt"

  constructor(private http: HttpClient) { }

  public getData(fileSize: number)
  {
    return this.http.get<PtNg>(`${this.baseURL}/generate?fileSize=${fileSize}`);
  }

  public getDistribution()
  {
    debugger;
    return this.http.get(`${this.baseURL}/distribution`);
  }
}
