import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";
declare let window: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  account: any;
  contractService!: ContractService;

  constructor() {

    if (window.ethereum) {
      window.ethereum.enable();
      this.contractService = new ContractService();
    }
    else{
      alert('MetaMask not supported!');
    }
  }

  ngOnInit(): void {

    if(this.contractService){
      this.contractService.getAccount().then(response => {
        this.account = response;
      });
    }
  }
}
