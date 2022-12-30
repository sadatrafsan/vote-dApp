import { Injectable } from '@angular/core';
import Web3 from 'web3';
import VoteContract from '../../../build/contracts/VoteContract.json';


@Injectable({
  providedIn: 'root'
})
export class ContractService {

  web3: Web3;
  contract: any;

  constructor() {

    this.web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");

    this.init();
  }

  async init(){

    const id = await this.web3.eth.net.getId() as number;
    // @ts-ignore
    const deployedNetwork = VoteContract.networks[id];

    // @ts-ignore
    this.contract = new this.web3.eth.Contract(VoteContract.abi, deployedNetwork.address);
  }

  async getData(){

    const result = await this.contract.methods.getData().call();
    console.log(result);
  }


}
