import { Injectable } from '@angular/core';
import Web3 from 'web3';
import VoteContract from '../../../build/contracts/VoteContract.json';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  web3: Web3;
  contract: any;
  result: any;
  accounts: any;

  constructor() {

    this.web3 = new Web3("http://localhost:7545");

    this.web3.eth.getAccounts().then(param => {
      this.accounts = param;
      console.log('Account[0]: ' + this.accounts[0]);
    });

    this.web3.eth.net.getId().then(param => {

      // @ts-ignore
      const deployedNetwork = VoteContract.networks[param];

      // @ts-ignore
      this.contract = new this.web3.eth.Contract(VoteContract.abi, deployedNetwork.address);
    });
  }

  async getResults(){

    return await this.contract.methods.getResults().call();
  }

  async castVote(data: number){

    const response = this.contract.methods.castVote(data).send({
      from: this.accounts[0]
    });

    return response;

  }
}
