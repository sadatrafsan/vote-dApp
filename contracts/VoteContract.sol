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

  function castVote(uint _data) external {
    uint candidateId = _data;
    ballots[candidateId].vote++;
  }

  function getResults() external view returns(Ballot[] memory){
    return ballots;
  }

}
