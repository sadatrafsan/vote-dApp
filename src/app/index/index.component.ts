import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {

  }

  castVote(candidateId: number){


    this.contractService.sendData(candidateId).then((result) => {

      console.log(result);

      this.contractService.getData().then((result) => {
        console.log(result);
      });
    });


  }
}
