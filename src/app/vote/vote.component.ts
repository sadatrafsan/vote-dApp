import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  address: any;

  constructor(private contractService: ContractService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.address = params[`address`];
    });
  }

  castVote(candidateId: number){
    this.contractService.castVote(candidateId, this.address).then((res) => {
      this.router.navigate(['/result']);
    });
  }
}
