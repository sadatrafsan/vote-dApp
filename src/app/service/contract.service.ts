import { Injectable } from '@angular/core';
import Web3 from 'web3';
import VoteContract from '../../../build/contracts/VoteContract.json';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  web3: Web3;
  contract: any;
  result: any;
  accounts: any;

  constructor() {

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

  async getResults(){

    return await this.contract.methods.getResults().call();
  }

  async castVote(data: number, address: string){

    return this.contract.methods.castVote(data).send({
      from: address
    });
  }
}
