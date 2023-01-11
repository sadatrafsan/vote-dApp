import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  results: any;

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contractService.getResults().then((response) => {
      console.log(response);
      if(response.length > 0){
        this.results = response;
      }
    });
  }

}
