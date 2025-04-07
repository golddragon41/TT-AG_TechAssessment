"use client";

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ProposalForm } from './_components/ProposalForm';
import { useProposal } from '@/lib/useProposal';
import { ProposalList } from './_components/ProposalList';

export default function Home() {
  const {
    proposals,
    proposalLoading,
    submitProposal,
    proposalSubmitting
  } = useProposal();

  return (
    <div className="min-h-screen bg-gray-400 p-8">
      <ConnectButton />
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <ProposalForm submitProposal={submitProposal} proposalSubmitting={proposalSubmitting} />
        <ProposalList proposals={proposals} proposalLoading={proposalLoading} />
      </div>
    </div>
  );
}