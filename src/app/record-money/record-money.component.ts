import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-record-money',
  templateUrl: './record-money.component.html',
  styleUrls: ['./record-money.component.css']
})
export class RecordMoneyComponent {
  private model = {
    spend: '',
    description: '',
    password: ''
  };
  constructor(private restApiService: RestApiService ) {
  }
 sendSpendInformation() {
   this.restApiService.postSpendMoneyInformation(this.model);
  }
}
