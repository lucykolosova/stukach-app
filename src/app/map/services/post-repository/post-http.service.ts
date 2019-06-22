import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Marker {
  lat: number;
  lng: number;
  label: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  constructor(
    private http: HttpClient,
  ) { }

  requestForList() {
    return this.http.get<Marker[]>('');
  }
}
