import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserLocationService} from './services/user-location/user-location.service';
import {Subscription} from 'rxjs';
import {PostRepositoryService} from './services/post-repository/post-repository.service';

// just an interface for type safety.

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  ngOnInit(): void {
    this.sub.add(
      this.userLocationService.coord$.subscribe(([lat, lng]) => {
        this.lat = lat;
        this.lng = lng;
      })
    );
  }

  markAsDone(id: number) {
    this.postRepositoryService.markAsDone(id);
  }

  trackById(a) {
    return a.id;
  }
}

