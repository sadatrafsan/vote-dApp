import { Injectable } from '@angular/core';
import Web3 from 'web3';
import VoteContract from '../../../build/contracts/VoteContract.json';
import {environment} from "../../environments/environment";

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  web3: Web3;
  contract: any;
  result: any;
  accounts: any;

  constructor() {

    if (window.ethereum) {
      window.ethereum.enable();
    }
    else{
      alert('MetaMask not supported!');
    }

    this.web3 = new Web3(environment.SERVICE_URL);
    this.web3.eth.net.getId().then(response => {
      // @ts-ignore
      this.contract = new this.web3.eth.Contract(VoteContract.abi, VoteContract.networks[response].address);
    });
  }

  getAccounts(){
    return new Promise(resolve => {
      this.web3.eth.getAccounts().then(response => {
        this.accounts = response;
        resolve(response);
      });
    });
  }

  getAccount(){
    return new Promise(resolve => {
      window.ethereum.request({ method: 'eth_accounts' }).then((response: any) => {
        console.log(response[0]);
        resolve(response[0]);
      });
    });
  }

  async getResults(){

    return await this.contract.methods.getResults().call();
  }

  async castVote(data: number, address: string){

    return this.contract.methods.castVote(data).send({
      from: address
    }).on('confirmation', function(confirmationNumber: any, receipt: any){
      console.log(receipt);
    }).on('error',  function(error: any, receipt: any){
      console.log(error);
    });
  }
}
