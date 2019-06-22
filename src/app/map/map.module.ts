import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from './map.component';
import {AgmCoreModule} from '@agm/core';
import {AgmJsMarkerClustererModule, ClusterManager} from '@agm/js-marker-clusterer';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAi_K-aOvGFhhBTwwJH4Hwnzrbo-CHYTwY'
    }),
    AgmJsMarkerClustererModule
  ],
  exports: [
    MapComponent,
  ],
  providers: [
    ClusterManager
  ]
})
export class MapModule {
}
