import {Injectable} from '@angular/core';
import {Marker, PostHttpService} from './post-http.service';
import {BehaviorSubject, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostRepositoryService {

  private store$ = new BehaviorSubject<Marker[]>([]);

  constructor(
    private postHttpService: PostHttpService
  ) {
    this.refreshList();
  }

  refreshList() {
    this.postHttpService.requestForList()
      .pipe(
        catchError(() => of([
          {
            label: 'Text',
            lat: 48.473567,
            lng: 35.018477,
            image: 'https://www.prestigeanimalhospital.com/sites/default/files/styles/large/adaptive-image/public/sphynx-cat-breed-info.jpg?itok=cn-84l5R'
          }
        ] as Marker[])),
      )
      .subscribe(res => this.store$.next(res));
  }

  get all$() {
    return this.store$
      .asObservable();
  }
}
