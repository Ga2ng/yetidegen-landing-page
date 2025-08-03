import { useMemo } from "react";
import { UnifiedWalletProvider, UnifiedWalletButton } from "@jup-ag/wallet-adapter";
import { 
  WalletAdapterNetwork
} from "@solana/wallet-adapter-base";
import { WalletConnectWalletAdapter } from "@solana/wallet-adapter-walletconnect";
import { 
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  CoinbaseWalletAdapter
} from "@solana/wallet-adapter-wallets";

// Metadata configuration
const metadata = {
  name: "Yeti Token",
  description: "Yeti Token Landing Page",
  url: "https://yeti-token.com",
  iconUrls: ["https://yeti-token.com/icon.png"],
  walletConnectProjectId: "your-wallet-connect-project-id" // Ganti dengan project ID Anda
};

const App = () => {
  const wallets = useMemo(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const walletAdapters = [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new CoinbaseWalletAdapter(),
    ];

    const walletConnectWalletAdapter = (() => {
      const adapter = new WalletConnectWalletAdapter({
        network: WalletAdapterNetwork.Mainnet,
        options: {
          relayUrl: "wss://relay.walletconnect.com",
          projectId: metadata.walletConnectProjectId,
          metadata: {
            name: metadata.name,
            description: metadata.description,
            url: metadata.url,
            icons: metadata.iconUrls,
          },
        },
      });

      return adapter;
    })();

    return [...walletAdapters, walletConnectWalletAdapter].filter(
      (item) => item && item.name && item.icon,
    );
  }, [metadata]);

  return (
    <UnifiedWalletProvider
      wallets={wallets}
      config={{
        autoConnect: false,
        env: "mainnet-beta",
        metadata: {
          name: "UnifiedWallet",
          description: "UnifiedWallet",
          url: "https://jup.ag",
          iconUrls: ["https://jup.ag/favicon.ico"],
        },
        notificationCallback: {
          onConnect: () => {},
          onConnecting: () => {},
          onDisconnect: () => {},
          onNotInstalled: () => {},
        },
        walletPrecedence: ["OKX Wallet" as any, "WalletConnect" as any],
        hardcodedWallets: [
          {
            id: "Phantom" as any,
            name: "Phantom" as any,
            url: "https://phantom.app/",
            icon: "https://phantom.app/img/logo.png",
          },
          {
            id: "Solflare" as any,
            name: "Solflare" as any,
            url: "https://solflare.com/",
            icon: "https://solflare.com/favicon.ico",
          },
          {
            id: "Magic Eden" as any,
            name: "Magic Eden" as any,
            url: "https://wallet.magiceden.io/",
            icon: "https://magiceden.io/favicon.ico",
          },
          {
            id: "Coinbase Wallet" as any,
            name: "Coinbase Wallet" as any,
            url: "https://www.coinbase.com/wallet",
            icon: "https://www.coinbase.com/favicon.ico",
          },
          {
            id: "OKX Wallet" as any,
            name: "OKX Wallet" as any,
            url: "https://www.okx.com/web3",
            icon: "https://www.okx.com/favicon.ico",
          },
        ],
        walletlistExplanation: {
          href: "https://station.jup.ag/docs/additional-topics/wallet-list",
        },
        theme: "dark",
        lang: "en",
      }}
    >
      <UnifiedWalletButton />
    </UnifiedWalletProvider>
  );
};

export default App;
