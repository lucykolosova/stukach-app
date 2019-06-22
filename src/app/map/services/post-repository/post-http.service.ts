import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Marker {
  lat: number;
  lng: number;
  label: string;
  image: string;
  id: number;
}

export interface MarkerData {
  car_number: string;
  photo_url: string;
  id: number;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  constructor(
    private http: HttpClient,
  ) {
  }

  requestForList() {
    return this.http.get<MarkerData[]>('http://10.4.137.48:8000/get_all/')
      .pipe(
        map((res: MarkerData[]) => res.map((data: MarkerData) => ({
          lat: (JSON.parse(data.location)).latitude,
          lng: (JSON.parse(data.location)).longitude,
          label: data.car_number,
          image: data.photo_url,
          id: data.id,
        } as Marker)))
      );
  }

  markAsDone(id) {
    this.http.patch(`http://10.4.137.48:8000/process/${id}/`, {
      processed: true,
    }).subscribe();
  }
}
