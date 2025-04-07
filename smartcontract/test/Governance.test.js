// test/Governance.test.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Governance Contract", function () {
  let Governance;
  let governance;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    Governance = await ethers.getContractFactory("Governance");
    governance = await Governance.deploy();
    await governance.deployed();
  });

  it("should allow creation of a proposal", async function () {
    const title = "Test Proposal";
    const description = "This is a test proposal description";

    // Create a new proposal
    await governance.createProposal(title, description);

    // Retrieve proposals
    const proposals = await governance.getProposals();
    expect(proposals.length).to.equal(1);
    expect(proposals[0].title).to.equal(title);
    expect(proposals[0].description).to.equal(description);
  });

  it("should return multiple proposals", async function () {
    const proposalsData = [
      { title: "Proposal 1", description: "Description 1" },
      { title: "Proposal 2", description: "Description 2" },
    ];

    // Create multiple proposals
    for (const data of proposalsData) {
      await governance.createProposal(data.title, data.description);
    }

    // Retrieve proposals
    const proposals = await governance.getProposals();
    expect(proposals.length).to.equal(2);
    expect(proposals[0].title).to.equal(proposalsData[0].title);
    expect(proposals[0].description).to.equal(proposalsData[0].description);
    expect(proposals[1].title).to.equal(proposalsData[1].title);
    expect(proposals[1].description).to.equal(proposalsData[1].description);
  });
});
