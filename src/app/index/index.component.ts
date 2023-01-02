import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  results: any;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {

  }

  castVote(candidateId: number){

    this.contractService.castVote(candidateId).then(() => {
      this.contractService.getResults().then((response) => {
        this.results = response;
      });
    });
  }

}
