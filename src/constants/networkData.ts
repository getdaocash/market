export const chainIdOrder = [137, 250, 10, 42161];
export const networkData: Record<string, any> = {
  137: {
    chainIdHex: "0x89",
    chainName: "matic",
    color: "#a557fe",
    scanner: "https://polygonscan.com/token",
    name: "Polygon (Matic)",
    shortName: "Polygon",
    img: "https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg",
    url: "https://polygon.market.xyz",
    enabled: true,
    addData: {
      chainId: "0x89",
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
    extraData: {
      coingeckoNetwork: "polygon-pos",
      sushiURL:
        "https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/matic.json",
    },
  },
  250: {
    name: "Fantom",
    chainName: "fantom",
    color: "#1969ff",
    scanner: "https://ftmscan.com/token",
    shortName: "Fantom",
    img: "/static/fantom.jpeg",
    url: "https://fantom.market.xyz",
    enabled: true,
    addData: {
      chainId: "0xFA",
      chainName: "Fantom",
      nativeCurrency: {
        name: "Fantom",
        symbol: "FTM",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ftm.tools/"],
      blockExplorerUrls: ["https://ftmscan.com/"],
    },
    extraData: {
      coingeckoNetwork: "fantom",
      sushiURL:
        "https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/fantom.json",
    },
  },
  10: {
    name: "Optimism",
    shortName: "Optimism",
    img: "/static/optimism.png",
    url: "optimism.market.xyz",
    enabled: false,
  },
  42161: {
    name: "Arbitrum",
    shortName: "Arbitrum",
    img: "/static/arbitrum.png",
    url: "arb.market.xyz",
    enabled: false,
  },
};
