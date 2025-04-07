'use client';

import { http, createStorage, cookieStorage } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const projectId = "test-project";

export const config = getDefaultConfig({
    appName: "WalletConnection",
    projectId,
    chains: [sepolia],
    ssr: true,
    storage: createStorage({
        storage: cookieStorage,
    }),
    transports: {
        [sepolia.id]: http("https://gateway.tenderly.co/public/sepolia")
    }
});