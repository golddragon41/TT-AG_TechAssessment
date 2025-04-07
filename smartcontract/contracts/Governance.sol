// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Governance {
    struct Proposal {
        string title;
        string description;
    }

    Proposal[] public proposals;

    event ProposalCreated(
        uint256 indexed proposalId,
        string title,
        string description
    );

    // Create a new proposal with a title and description.
    function createProposal(
        string memory _title,
        string memory _description
    ) public {
        proposals.push(Proposal(_title, _description));
        emit ProposalCreated(proposals.length - 1, _title, _description);
    }

    // Retrieve all proposals.
    function getProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}
