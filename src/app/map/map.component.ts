import {Component, OnInit} from '@angular/core';
import {UserLocationService} from './services/user-location/user-location.service';
import {BehaviorSubject, Subscription} from 'rxjs';
import {Marker} from './services/post-repository/post-http.service';
import {PostRepositoryService} from './services/post-repository/post-repository.service';

// just an interface for type safety.

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

// google maps zoom level
  zoom: number = 15;

  // initial center position for the map
  lat: number = 48.473567;
  lng: number = 35.018477;


  private sub = new Subscription();

  constructor(
    private userLocationService: UserLocationService,
    public postRepositoryService: PostRepositoryService,
  ) {

  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  ngOnInit(): void {
    this.sub.add(
      this.userLocationService.coord$.subscribe(([lat, lng]) => {
        this.lat = lat;
        this.lng = lng;
      })
    );
  }
}

