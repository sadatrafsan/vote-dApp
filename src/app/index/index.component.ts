import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  accounts: any;

  constructor(private contractService: ContractService) {

  }

  ngOnInit(): void {

    this.contractService.getAccounts().then(res => {
      this.accounts = res;
    });
  }
}
