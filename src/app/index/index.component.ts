import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  account: any;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {

    this.contractService.getAccount().then(res => {
      this.account = res;
    });
  }
}
