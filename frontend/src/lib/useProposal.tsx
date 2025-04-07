import { useReadContract, useWriteContract } from "wagmi";
import { Proposal } from "./proposal.type";
import { PROPOSAL_ADDRESS } from "./constant";
import ProposalAbi from "../data/proposal-abi.json";

export function useProposal() {
    const { data: proposals, isLoading: proposalLoading, error } = useReadContract({
        address: PROPOSAL_ADDRESS,
        abi: ProposalAbi,
        functionName: 'getProposals',
    });

    console.log("--------", proposals, error)

    const { writeContract, data: txHash, isPending: proposalSubmitting, error: writeError } = useWriteContract();

    console.log("------writing-------", txHash, proposalSubmitting, writeError)
    const submitProposal = (title: string, description: string) => {
        writeContract({
            address: PROPOSAL_ADDRESS,
            abi: ProposalAbi,
            functionName: 'createProposal',
            args: [title, description],
        });
    }
    return {
        proposals: proposals ? proposals as Proposal[] : [],
        proposalLoading,
        txHash,
        submitProposal,
        proposalSubmitting
    }
}