import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: any;
  constructor() { }

  ngOnInit() {
    this.initMap();
  }
  initMap() {
    var myLatlng = new google.maps.LatLng(-33.69419,-71.21369);
    
    var mapOptions = {
      zoom: 16,
      center: myLatlng,
      disableDefaultUI: true,
      clickableIcons: false
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatlng
    });
    
    marker.setMap(map);
  }

}
