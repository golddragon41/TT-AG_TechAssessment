import { Proposal } from "@/lib/proposal.type";

type ProposalListType = {
    proposals: Proposal[],
    proposalLoading: boolean
}

export function ProposalList({
    proposals,
    proposalLoading
}: ProposalListType) {
    return (
        <>
            <h2 className="text-2xl font-semibold mt-4 mb-4">SUBMITTED PROPOSALS</h2>
            {proposalLoading ? (
                <p className="text-gray-600">Loading proposals.</p>
            ) : proposals.length === 0 ? (
                <p className="text-gray-600">No proposals found.</p>
            ) : (
                <ul className="space-y-4">
                    {proposals.map((proposal, index) => (
                        <li
                            key={index}
                            className="border border-gray-200 p-4 rounded shadow-sm"
                        >
                            <p className="font-medium">
                                <span className="font-bold">Title:</span>{" "}
                                {proposal.title.toString()}
                            </p>
                            <p className="mt-1">
                                <span className="font-bold">Description:</span>{" "}
                                {proposal.description}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}