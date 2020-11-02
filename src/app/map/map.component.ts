import { Component, OnInit } from '@angular/core';
import { EventServerService } from '../shared/services/event-server.service';
import { ILocal } from '../model/locais.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  constructor(private ess: EventServerService) { }

  ngOnInit() { }

}
