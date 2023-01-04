//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract VoteContract{

  struct Ballot {
    uint id;
    string candidate;
    uint vote;
  }

  Ballot private ballot;
  Ballot[] private ballots;
  address[] private addresses;

  constructor(){

    ballot = Ballot(1, "Point Break", 0);
    ballots.push(ballot);

    ballot = Ballot(2, "Speed", 0);
    ballots.push(ballot);

    ballot = Ballot(3, "John Wick", 0);
    ballots.push(ballot);

    ballot = Ballot(4, "Street King", 0);
    ballots.push(ballot);
  }

  function castVote(uint candidateId) external returns (bool) {

    if(checkAddress(msg.sender)){
      return false;
    }

    addresses.push(msg.sender);

    ballots[candidateId].vote++;

    return true;
  }

  function getResults() external view returns(Ballot[] memory){
    return ballots;
  }

  function checkAddress(address from) private view returns (bool) {

    if(addresses.length > 0){
      for(uint i=0; i<addresses.length; i++){

        if(from == addresses[i]){
          return true;
        }
      }
    }

    return false;
  }
}
