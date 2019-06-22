import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLocationService {

  private location = new BehaviorSubject([48.473567, 35.018478]);
  constructor() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.location.next([position.coords.latitude, position.coords.longitude])
    });
  }

  get coord$() {
    return this.location.asObservable();
  }

}
