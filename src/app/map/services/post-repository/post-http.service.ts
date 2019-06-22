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

  private url = 'https://hackathon-ss-06-19.herokuapp.com/';

  constructor(
    private http: HttpClient,
  ) {
  }

  requestForList() {
    return this.http.get<MarkerData[]>(`${this.url}get_all/`)
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
    this.http.patch(`${this.url}process/${id}/`, {
      processed: true,
    }).subscribe();
  }
}
