import { baseURL } from './../baseurl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pack } from '../classes/pack';

@Injectable({
  providedIn: 'root'
})
export class PacksService {

  constructor(private http: HttpClient) { }

  getPacks(): Observable<Pack[]> {
    return this.http.get<Pack[]>(baseURL + 'packs');
  }

  getPacksById(id: number): Observable<Pack> {
    return this.http.get<Pack>(baseURL + 'packs/' + id);
  }

  getPacksByType(type: string): Observable<Pack[]> {
    return this.http.get<Pack[]>(baseURL + 'packs/type/' + type);
  }

  postPack(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(baseURL + 'packs' , pack);
  }

  deletePack(id: number): Observable<Pack> {
    return this.http.delete<Pack>(baseURL + 'packs/' + id);
  }

  putPack(facebook: Pack , id: number): Observable<Pack> {
    return this.http.put<Pack>(baseURL + 'facebook/' + id , facebook);
  }
}
