import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
let voteContract = require('../../../contracts/VoteContract.sol');

declare let require: any;
declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() { }
}
