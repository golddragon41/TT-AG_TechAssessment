import { useState } from "react";
import { LoadingIcon } from "./LoadingIcon";
import { useAccount } from "wagmi";

type ProposalFormType = {
    submitProposal: (title: string, description: string) => void,
    proposalSubmitting: boolean
}

export function ProposalForm({
    submitProposal,
    proposalSubmitting
}: ProposalFormType) {
    const [proposalDescription, setProposalDescription] = useState("");
    const [proposalTitle, setProposalTitle] = useState("");
    const { isConnected } = useAccount();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        submitProposal(proposalTitle, proposalDescription);
        setProposalTitle("");
        setProposalDescription("");
    };

    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-6">
                Governance Proposals
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 p-4 bg-white rounded shadow"
            >
                <div className="flex flex-col md:flex-col gap-4">
                <h2 className="text-2xl font-semibold">CREATE NEW PROPOSAL</h2>
                    <input
                        type="text"
                        placeholder="Enter Proposal Title Here..."
                        value={proposalTitle}
                        onChange={(e) => setProposalTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        placeholder="Enter Proposal Description Here..."
                        value={proposalDescription}
                        onChange={(e) => setProposalDescription(e.target.value)}
                        className="w-full border border-gray-300 rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={proposalSubmitting || !isConnected}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                >
                    {proposalSubmitting ? (
                        <div className="flex justify-center">
                            <LoadingIcon />Submitting..
                        </div>
                    ) : isConnected ? (
                        "Submit Proposal"
                    ) : (
                        "Please connect your wallet first."
                    )}
                </button>
            </form>
        </>
    )
}