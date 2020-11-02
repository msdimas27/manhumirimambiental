import { Component, OnInit, Input } from '@angular/core';
import { ILocal } from 'src/app/model/locais.model';
import { EventServerService } from '../../services/event-server.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnInit {

  constructor(private ess: EventServerService) { }

  ngOnInit() {}

  @Input() loc: ILocal;

  getIcon() {
    switch((this.loc ? this.loc.key : null))
		{
			case 'lixeiras': {
				return 'assets/markers/lixeiras.svg';
			}
			case 'cooperativa': {
				return 'assets/markers/cooperativa.svg';
			}
			case 'parque': {
				return 'assets/markers/parque.svg';
			}
			case 'pilhas': {
				return 'assets/markers/pilhas.svg';
			}
			case 'pracas': {
        return 'assets/markers/pracas.svg';
      }
      default: {
        return '';
      }
		}
  }

  click(e: Event) {
    this.ess.get('location-card_click')
      .emit(this.loc);
  } 
  
}
