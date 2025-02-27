
const ROUTER = {

    1:{
        // ETHEREUM EXCHANGES
        "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F":{
            address:"0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
            uri:"https://sushi.com",
            name:"SushiSwap"
        },
        "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D":{
            address:"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            uri:"https://uniswap.org/",
            name:"UniSwap"
        },
        "0xF491e7B69E4244ad4002BC14e878a34207E38c29":{
            address:"0xF491e7B69E4244ad4002BC14e878a34207E38c29",
            uri:"https://spookyswap.finance/",
            name:"SpookySwap"
        }
    },
    137:{
        // POLYGON
        "0x94930a328162957FF1dd48900aF67B5439336cBD":{
            address:"0x94930a328162957FF1dd48900aF67B5439336cBD",
            uri:"https://polycat.finance/swap",
            name:"PolyCat"
        },
        "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506":{
            address:"0x1b02da8cb0d097eb8d57a175b88c7d8b47997506",
            uri:"https://app.sushi.com/swap",
            name:"SushiSwap"
        },
        "0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff":{
            address:"0xa5e0829caced8ffdd4de3c43696c57f7d7a678ff",
            uri:"https://quickswap.exchange/#/swap",
            name:"QuickSwap"
        },
        "0x93bcdc45f7e62f89a8e901dc4a0e2c6c427d9f25":{
            address:"0x93bcdc45f7e62f89a8e901dc4a0e2c6c427d9f25",
            name:"CometSwap"
        },
        "0xc0788a3ad43d79aa53b09c2eacc313a787d1d607":{
            address:"0xc0788a3ad43d79aa53b09c2eacc313a787d1d607",
            uri:"https://app.apeswap.finance/swap",
            name:"ApeSwap"
        },
        "0x3a1d87f206d12415f5b0a33e786967680aab4f6d":{
            address:"0x3a1d87f206d12415f5b0a33e786967680aab4f6d",
            uri:"https://swap.wault.finance/polygon/#/swap",
            name:"VaultSwap"
        },
        "0x5C6EC38fb0e2609672BDf628B1fD605A523E5923":{
            address:"0x5C6EC38fb0e2609672BDf628B1fD605A523E5923",
            uri:"https://jetswap.finance/",
            name:"JetSwap"
        },
        
    }

}
const NETWORK =
{
    // 72: {     // NOT yet ready for testing. see idecentralize.finance BOT project
    //     id: 72,
    //     network: "idecentralize",
    //     chain: "IDFI",
    //     chainId: 72,
    //     type: "Development",
    //     explorer: ""
    // },
    1: {
        id: 1,
        network: "Ethereum",
        chain: "ETH",
        chainId: 1,
        type: "Mainnet",
        explorer: "https://etherscan.io/address/",
        color: "#393939"
    },
    3: {
        id: 3,
        network: "Ropsten",
        chain: "ETH",
        chainId: 3,
        type: "Testnet",
        explorer: "https://ropsten.etherscan.io/address/",
        color: "#393939"
    },
    4: {
        id: 4,
        network: "Rinkeby",
        chain: "ETH",
        chainId: 4,
        type: "Testnet",
        explorer: "https://rinkeby.etherscan.io/address/",
        color: "#393939"
    },
    5: {
        id: 5,
        network: "Goerli",
        chain: "ETH",
        chainId: 5,
        type: "Testnet",
        explorer: "https://goerli.etherscan.io/address/",
        color: "#393939"
    },
    42: {
        id: 42,
        network: "Kovan",
        chain: "ETH",
        chainId: 42,
        type: "Testnet",
        explorer: "https://kovan.etherscan.io/address/",
        color: "#393939"
    },
    2018: {
        id: 2018,
        network: "dev",
        chain: "ETH",
        chainId: 2018,
        type: "Development",
        explorer: "",
        color: "#393939"
    },
    137: {
        id: 137,
        network: "Polygon",
        chain: "MATIC",
        chainId: 137,
        type: "Mainnet",
        rpc:"https://polygon-rpc.com",
        explorer: "https://polygonscan.com/address/",
        color: "#8247e5"
    },
    80001: {
        id: 80001,
        network: "Mumbai",
        chain: "MATIC",
        chainId: 80001,
        type: "Testnet",
        rpc:"https://rpc-mumbai.maticvigil.com/",
        explorer: "https://mumbai.polygonscan.com/address",
        color: "#8247e5"
    },
    56: {
        id: 56,
        network: "BSC",
        chain: "BNB",
        chainId: 56,
        type: "Mainnet",
        rpc:"https://bsc-dataseed.binance.org/",
        explorer: "https://bscscan.com/address/",
        color:"#f3ba2f"
    },
    97: {
        id: 97,
        network: "BSC",
        chain: "BNB",
        chainId: 97,
        type: "Testnet",
        rpc:"https://data-seed-prebsc-1-s1.binance.org:8545/",
        explorer: "https://testnet.bscscan.com/address/",
        color:"#f3ba2f"
    },
    100: {
        id: 100,
        network: "xDAI",
        chain: "xDAI",
        chainId: 100,
        type: "Mainnet",
        rpc:"https://rpc.xdaichain.com/",
        explorer: "https://blockscout.com/xdai/mainnet/address/",
        color:"#febe44"
    },
    31337: {
        id: 31337,
        network: "Hardhat",
        chain: "ETH",
        chainId: 31337,
        type: "Local",
        rpc: "",
        explorer: "",
        color:"#393939"
    },
    1313161555:{
        id:1313161555,
        network: "Aurora",
        chain: "AURORA",
        symbol:"ETH",
        chainId: 1313161555,
        type: "Testnet",
        rpc:"https://testnet.aurora.dev",
        explorer: "https://explorer.testnet.aurora.dev/",
        color:"#71d34b"
    },
    1313161554:{
        id:1313161554,
        network: "Aurora",
        chain: "AURORA",
        symbol:"ETH",
        chainId: 1313161554,
        type: "Mainet",
        rpc:"https://mainnet.aurora.dev",
        explorer: "https://explorer.aurora.dev/",
        color:"#71d34b"
    },
    43114:{
        id:43114,
        network: "Avalanche",
        chain: "AVAX",
        symbol:"AVAX",
        chainId: 43114,
        type: "Mninet",
        rpc:"https://api.avax.network/ext/bc/C/rpc",
        explorer: "https://cchain.explorer.avax.network/",
        color:"#e84142"
    },
    43113:{
        id:43113,
        network: "Avalanche Fuji",
        chain: "AVAX",
        symbol:"AVAX",
        chainId: 43113,
        type: "Testnet",
        rpc:"https://api.avax-test.network/ext/bc/C/rpc",
        explorer: "https://testnet.explorer.avax.network/",
        color:"#e84142"
    },


}


// ERC20[network][address].value

const ERC20 = {
    // mainet
    1:{
        "0x0000000000000000000000000000000000000000": {
            // default
            decimals: 18,
            symbol: "ETH",
            name: "Ether",
            color: "#393939",
            address:"0x0000000000000000000000000000000000000000",
            compound:"0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
            aave: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
            yearn: "0xa258C4606Ca8206D8aA700cE2143D7db854D168c"
        },
        "0x6B175474E89094C44Da98b954EedeAC495271d0F": {
            decimals: 18,
            symbol: "DAI",
            name: "Dai Stablecoin",
            color: "#f5ac37",
            address:"0x6B175474E89094C44Da98b954EedeAC495271d0F",
            compound: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
            aave: "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
            yearn: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95"
        },
        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": {
            address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            decimals: 6,
            symbol: "USDC",
            name: "USD Coin",
            color: "#2775ca",
            compound: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
            aave: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
            yearn: "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9"
        },
        "0xdAC17F958D2ee523a2206206994597C13D831ec7": {
            address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",
            decimals: 6,
            symbol: "USDT",
            name: "Tether USD",
            color: "#50af95",
            compound: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
            aave: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
            yearn: "0x7Da96a3891Add058AdA2E826306D812C638D87a7"
        },
        "0x0000000000085d4780B73119b644AE5ecd22b376": {
            address:"0x0000000000085d4780B73119b644AE5ecd22b376",
            decimals: 18,
            symbol: "TUSD",
            name: "TrueUSD",
            color: "002868",
            compound: "0x12392F67bdf24faE0AF363c24aC620a2f67DAd86",
            aave: "0x101cc05f4A51C0319f570d5E146a8C625198e636",
            yearn: "0xFD0877d9095789cAF24c98F7CCe092fa8E120775"
        },
        "0x4Fabb145d64652a948d72533023f6E7A623C7C53": {
            address:"0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            decimals: 18,
            symbol: "BUSD",
            name: "Binance USD",
            color: "#f0b90b",
            compound: "",
            aave: "0xA361718326c15715591c299427c62086F69923D9",
            yearn: ""
        },
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599": {
            address:"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            decimals: 8,
            symbol: "WBTC",
            name: "Wrapped BTC",
            color: "#f09242",
            compound: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
            aave:"0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
            yearn: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E"
        },
        "0xc00e94Cb662C3520282E6f5717214004A7f26888": {
            address:"0xc00e94Cb662C3520282E6f5717214004A7f26888",
            decimals: 18,
            symbol: "COMP",
            name: "Compound",
            color: "#00d395",
            compound: "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
            aave: "",
            yearn: "0x4A3FE75762017DB0eD73a71C9A06db7768DB5e66"
        },
        "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9": {
            address:"0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            decimals: 18,
            symbol: "AAVE",
            name: "Aave Token",
            color: "#33b6c5",
            compound: "0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c",
            aave: "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B",
            yearn: "0xd9788f3931Ede4D5018184E198699dC6d66C1915"
        },
        "0x0D8775F648430679A709E98d2b0Cb6250d2887EF": {
            address:"0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
            decimals: 18,
            symbol: "BAT",
            name: "Basic Attention Token",
            color: "#ff5000",
            compound: "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
            aave: "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1",
            yearn: ""
        },
        "0x514910771AF9Ca656af840dff83E8264EcF986CA": {
            address:"0x514910771AF9Ca656af840dff83E8264EcF986CA",
            decimals: 18,
            symbol: "LINK",
            name: "ChainLink Token",
            color: "#2a5ada",
            compound: "0xFAce851a4921ce59e912d19329929CE6da6EB0c7",
            aave: "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0",
            yearn: "0x671a912C10bba0CFA74Cfc2d6Fba9BA1ed9530B2"
        },
        "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2": {
            address:"0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
            decimals: 18,
            symbol: "MKR",
            name: "MAKER",
            color: "#54b0a1",
            compound: "0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b",
            aave: "0xc713e5E149D5D0715DcD1c156a020976e7E56B88",
            yearn: ""
        },
        "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2": {
            address:"0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            decimals: 18,
            symbol: "SUSHI",
            name: "SushiToken",
            color: "#a675c0",
            compound: "0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7",
            aave: "",
            yearn: ""
        },
        "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984": {
            address:"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
            decimals: 18,
            symbol: "UNI",
            name: "Uniswap",
            color: "#ff007a",
            compound: "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
            aave: "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1",
            yearn: "0xFBEB78a723b8087fD2ea7Ef1afEc93d35E8Bed42"
        },
        "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e": {
            address:"0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
            decimals: 18,
            symbol: "YFI",
            name: "yearn.finance",
            color: "#006ae3",
            compound: "0x80a2AE356fc9ef4305676f7a3E2Ed04e12C33946",
            aave: "0x5165d24277cD063F5ac44Efd447B27025e888f37",
            yearn: "0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1"
        },
        "0xE41d2489571d322189246DaFA5ebDe1F4699F498": {
            address:"0xE41d2489571d322189246DaFA5ebDe1F4699F498",
            decimals: 18,
            symbol: "ZRX",
            name: "0x Protocol Token",
            color: "#085229",
            compound: "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
            aave: "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e",
            yearn: ""
        },
        "0x8E870D67F660D95d5be530380D0eC0bd388289E1": {
            address:"0x8E870D67F660D95d5be530380D0eC0bd388289E1",
            decimals: 18,
            symbol: "USDP",
            name: "PAX Dollar",
            color: "#085229",
            compound: "0x041171993284df560249B57358F931D9eB7b925D",
            aave: "0x2e8F4bdbE3d47d7d7DE490437AeA9915D930F1A3",
            yearn: ""
        },
        "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643": {
            address:"0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
            decimals: 8,
            symbol: "cDAI",
            name: "Compound Dai (cDai)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c": {
            address:"0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c",
            decimals: 8,
            symbol: "cAAVE",
            name: "Compound Aave (cAAVE)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E": {
            address:"0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
            decimals: 8,
            symbol: "cBAT",
            name: "Compound Basic Attention Token (cBAT)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4": {
            address:"0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
            decimals: 8,
            symbol: "cCOMP",
            name: "Compound Collateral (cCOMP)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5": {
            address:"0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
            decimals: 8,
            symbol: "cETH",
            name: "Compound Ether (cETH)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xFAce851a4921ce59e912d19329929CE6da6EB0c7": {
            address:"0xFAce851a4921ce59e912d19329929CE6da6EB0c7",
            decimals: 8,
            symbol: "cLINK",
            name: "Compound ChainLink Token (cLINK)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b": {
            address:"0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b",
            decimals: 8,
            symbol: "cMKR",
            name: "Compound Maker (cMKR)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7": {
            address:"0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7",
            decimals: 8,
            symbol: "cSUSHI",
            name: "Compound Sushi Token (cSUSHI)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x12392F67bdf24faE0AF363c24aC620a2f67DAd86": {
            address:"0x12392F67bdf24faE0AF363c24aC620a2f67DAd86",
            decimals: 8,
            symbol: "cTUSD",
            name: "Compound TrueUSD (cTUSD)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x35A18000230DA775CAc24873d00Ff85BccdeD550": {
            address:"0x35A18000230DA775CAc24873d00Ff85BccdeD550",
            decimals: 8,
            symbol: "cUNI",
            name: "Compound Uniswap (cUNI)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x39AA39c021dfbaE8faC545936693aC917d5E7563": {
            address:"0x39AA39c021dfbaE8faC545936693aC917d5E7563",
            decimals: 8,
            symbol: "cUSDC",
            name: "Compound USD Coin (cUSDC)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9": {
            address:"0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
            decimals: 8,
            symbol: "cUSDT",
            name: "Compound USDT (cUSDT)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xccF4429DB6322D5C611ee964527D42E5d685DD6a": {
            address:"0xccF4429DB6322D5C611ee964527D42E5d685DD6a",
            decimals: 8,
            symbol: "cWBTC",
            name: "Compound Wrapped BTC (cWBTC)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x80a2AE356fc9ef4305676f7a3E2Ed04e12C33946": {
            address:"0x80a2AE356fc9ef4305676f7a3E2Ed04e12C33946",
            decimals: 8,
            symbol: "cYFI",
            name: "Compound yearn.finance (cYFI)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407": {
            address:"0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
            decimals: 8,
            symbol: "cZRX",
            name: "Compound 0x (cZRX)",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": {
            address:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            decimals: 18,
            symbol: "WETH",
            name: "Wrapped Ether",
            color: "#393939",
            compound: "",
            aave: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
            yearn: "0xa9fE4601811213c340e850ea305481afF02f5b28"
        }



    },
    4:{  // RINKEBY COMPOUND ONLY
         // ETH
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "ETH",
            name: "Ether",
            color: "#393939",
            address:"0x0000000000000000000000000000000000000000",
            compound:"0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e",
            aave: "",
            yearn: ""
        },
        "0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e": {
            decimals: 8,
            symbol: "cETH",
            name: "Compound Ether",
            color: "#000000",
            address:"0xd6801a1DfFCd0a410336Ef88DeF4320D6DF1883e",
            compound:"",
            aave: "",
            yearn: ""
        },
        // DAI
        "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa": {
            decimals: 18,
            symbol: "DAI",
            name: "Dai Stablecoin",
            color: "#000000",
            address:"0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa",
            compound: "0x6D7F0754FFeb405d23C51CE938289d4835bE3b14",
            aave: "",
            yearn: ""
  
        }, 
       
        "0x6D7F0754FFeb405d23C51CE938289d4835bE3b14": {
            decimals: 18,
            symbol: "cDAI",
            name: "Compound Dai Stablecoin",
            color: "#000000",
            address:"0x6D7F0754FFeb405d23C51CE938289d4835bE3b14",
            compound: "",
            aave: "",
            yearn: ""
  
        }, 
        "0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b": {
            address:"0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b",
            decimals: 8,
            symbol: "USDC",
            name: "USD Coin",
            color: "#000000",
            compound: "0x5B281A6DdA0B271e91ae35DE655Ad301C976edb1",
            aave: "",
            yearn: ""
        },

        "0x5B281A6DdA0B271e91ae35DE655Ad301C976edb1": {
            address:"0x5B281A6DdA0B271e91ae35DE655Ad301C976edb1",
            decimals: 8,
            symbol: "cUSDC",
            name: "Compound USD Coin",
            color: "#000000",
            compound: "",
            aave: "",
            yearn: ""
        },

        "0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02": {
            address:"0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02",
            decimals: 18,
            symbol: "USDT",
            name: "Tether USD",
            color: "#000000",
            compound: "0x2fB298BDbeF468638AD6653FF8376575ea41e768",
            aave: "",
            yearn: ""
        },

        "0x2fB298BDbeF468638AD6653FF8376575ea41e768": {
            address:"0x2fB298BDbeF468638AD6653FF8376575ea41e768",
            decimals: 8,
            symbol: "cUSDT",
            name: "Compound Tether USD",
            color: "#000000",
            compound: "",
            aave: "",
            yearn: ""
        },

        "0xddea378A6dDC8AfeC82C36E9b0078826bf9e68B6": {
            address:"0xddea378A6dDC8AfeC82C36E9b0078826bf9e68B6",
            decimals: 18,
            symbol: "ZRX",
            name: "0x",
            color: "#000000",
            compound: "0x52201ff1720134bBbBB2f6BC97Bf3715490EC19B",
            aave: "",
            yearn: ""
        },
        "0x52201ff1720134bBbBB2f6BC97Bf3715490EC19B": {
            address:"0x52201ff1720134bBbBB2f6BC97Bf3715490EC19B",
            decimals: 8,
            symbol: "cZRX",
            name: "Compound 0x",
            color: "#000000",
            compound: "",
            aave: "",
            yearn: ""
        },

        "0xbF7A7169562078c96f0eC1A8aFD6aE50f12e5A99": {
            address:"0xbF7A7169562078c96f0eC1A8aFD6aE50f12e5A99",
            decimals: 18,
            symbol: "BAT",
            name: "Basic Attention Token",
            color: "#000000",
            compound: "0xEBf1A11532b93a529b5bC942B4bAA98647913002",
            aave: "",
            yearn: ""
        },
        "0xEBf1A11532b93a529b5bC942B4bAA98647913002": {
            address:"0xEBf1A11532b93a529b5bC942B4bAA98647913002",
            decimals: 8,
            symbol: "cBAT",
            name: "Compound Basic Attention Token",
            color: "#000000",
            compound: "",
            aave: "",
            yearn: ""
        },
    

    },
    42:{ // KOVAN AAVE ONLY
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "ETH",
            name: "Ether",
            color: "#000000",
            address:"0x0000000000000000000000000000000000000000",
            compound:"0x41B5844f4680a8C38fBb695b7F9CFd1F64474a72",
            aave: "",
            yearn: ""
        },

    },
    5:{ // Goerli 
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "ETH",
            name: "Ether",
            color: "#000000",
            address:"0x0000000000000000000000000000000000000000",
            compound:"",
            aave: "",
            yearn: ""
        },

    },


    137:{ // POLYGON
        // default
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "MATIC",
            name: "MATIC",
            color: "#8247e5",
            address:"0x0000000000000000000000000000000000000000",
            aave: ""
        },
        "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619": {
            decimals: 18,
            symbol: "WETH",
            name: "Wrapped Ether (WETH)",
            color: "#393939",
            address:"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
            aave: ""
        },
        "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": {
            decimals: 18,
            symbol: "DAI",
            name: "(POS) Dai Stablecoin (DAI)",
            color: "#f5ac37",
            address:"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            aave: "0x27F8D03b3a2196956ED754baDc28D73be8830A6e"
        },
        "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": {
            decimals: 6,
            symbol: "USDC",
            name: "(POS) USD Coin (USDC)",
            color: "#2775ca",
            address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            aave: "0x1a13F4Ca1d028320A707D99520AbFefca3998b7F"
        },
        "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270": {
            decimals: 18,
            symbol: "WMATIC",
            name: "Wrapped Matic (WMATIC)",
            color: "#8247e5",
            address:"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
            aave: "0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4"
        },
        "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": {
            decimals: 6,
            symbol: "USDT",
            name: "(PoS) Tether USD (USDT)",
            color: "#50af95",
            address:"0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            aave: "0x60D55F02A771d515e077c9C2403a1ef324885CeC"
        },
        "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6": {
            decimals: 8,
            symbol: "WBTC",
            name: "(PoS) Wrapped BTC (WBTC)",
            color: "#f09242",
            address:"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
            aave: "0x5c2ed810328349100A66B82b78a1791B101C9D61"
        },
        "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3": {
            decimals: 18,
            symbol: "BNB",
            name: "BNB (BNB)",
            color: "#f3ba2f",
            address:"0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
            aave: ""
        },
        "0xD6DF932A45C0f255f85145f286eA0b292B21C90B": {
            decimals: 18,
            symbol: "AAVE",
            name: "Aave (PoS) (AAVE)",
            color: "#f3ba2f",
            address:"0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
            aave: "0x1d2a0E5EC8E5bBDCA5CB219e649B565d8e5c3360"
        },
          "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39": {
            decimals: 18,
            symbol: "LINK",
            name: "ChainLink Token",
            color: "#2a5ada",
            address: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
            aave: ""
        },
          "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683": {
            decimals: 18,
            symbol: "SAND",
            name: "Sandbox",
            color: "#00aeef",
            address: "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
            aave: ""
        },
        "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4": {
            decimals: 18,
            symbol: "MANA",
            name: "Decentraland",
            color: "#2a5ada",
            address: "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
            aave: ""
        },
        "0x5fe2B58c013d7601147DcdD68C143A77499f5531": {
          decimals: 18,
          symbol: "GRT",
          name: "Graph Token",
          color: "#6747ed",
          address: "0x5fe2B58c013d7601147DcdD68C143A77499f5531",
          aave: ""
        }, 
        "0xb33EaAd8d922B1083446DC23f610c2567fB5180f": {
          decimals: 18,
          symbol: "UNI",
          name: "Uniswap",
          color: "#ff007a",
          address: "0xb33EaAd8d922B1083446DC23f610c2567fB5180f",
          aave: ""
        },
        "0xC9c1c1c20B3658F8787CC2FD702267791f224Ce1": {
          decimals: 18,
          symbol: "FTM",
          name: "Fantom",
          color: "#13b5ec",
          address: "0xC9c1c1c20B3658F8787CC2FD702267791f224Ce1",
          aave: ""
        },
        "0x7eC26842F195c852Fa843bB9f6D8B583a274a157": {
          decimals: 18,
          symbol: "ENJ",
          name: "EnjinCoin",
          color: "#7866d5",
          address: "0x7eC26842F195c852Fa843bB9f6D8B583a274a157",
          aave: ""
        },
        "0x0621d647cecbFb64b79E44302c1933cB4f27054d": {
          decimals: 18,
          symbol: "AMP",
          name: "AMP",
          color: "#d9327c",
          address: "0x0621d647cecbFb64b79E44302c1933cB4f27054d",
          aave: ""
        },
        "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c": {
          decimals: 18,
          symbol: "COMP",
          name: "Compound",
          color: "#00d395",
          address: "0x8505b9d2254A7Ae468c0E9dd10Ccea3A837aef5c",
          aave: ""
        },
        "0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8": {
          decimals: 18,
          symbol: "GNO",
          name: "Gnosis",
          color: "#00a6c4",
          address: "0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8",
          aave: ""
        },
        "0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f": {
          decimals: 18,
          symbol: "1INCH",
          name: "1INCH",
          color: "#1b314f",
          address: "0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f",
          aave: ""
        },
        "0x3Cef98bb43d732E2F285eE605a8158cDE967D219": {
          decimals: 18,
          symbol: "BAT",
          name: "Bat Token",
          color: "#ff5000",
          address: "0x3Cef98bb43d732E2F285eE605a8158cDE967D219",
          aave: ""
        },
        "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a": {
          decimals: 18,
          symbol: "SUSHI",
          name: "Sushi Token",
          color: "#fa52a0",
          address: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
          aave: ""
        },
        "0xDA537104D6A5edd53c6fBba9A898708E465260b6": {
          decimals: 18,
          symbol: "YFI",
          name: "yearn.finance",
          color: "#006ae3",
          address: "0xDA537104D6A5edd53c6fBba9A898708E465260b6",
          aave: ""
        },
        "0xAdA58DF0F643D959C2A47c9D4d4c1a4deFe3F11C": {
          decimals: 18,
          symbol: "CRO",
          name: "Crypto.com Coin",
          color: "#25376c",
          address: "0xAdA58DF0F643D959C2A47c9D4d4c1a4deFe3F11C",
          aave: ""
        },
        "0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842": {
          decimals: 18,
          symbol: "BNT",
          name: "Bancor",
          color: "#000d2b",
          address: "0xc26D47d5c33aC71AC5CF9F776D63Ba292a4F7842",
          aave: ""
        },

    },
    80001:{ // POLYGON TESTNET
        // default
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "MATIC",
            name: "MATIC",
            color: "#8247e5",
            address:"0x0000000000000000000000000000000000000000",
            aave: ""
        },

    },
    56:{ // BSC
        // default
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "BNB",
            name: "BNB",
            color: "#f3ba2f",
            address:"0x0000000000000000000000000000000000000000"
        },
        "0x2170ed0880ac9a755fd29b2688956bd959f933f8": {
            decimals: 18,
            symbol: "wETH",
            name: "wEthereum",
            color: "#393939",
            address:"0x2170ed0880ac9a755fd29b2688956bd959f933f8"
        },
        "0x55d398326f99059ff775485246999027b3197955": {
            decimals: 18,
            symbol: "BSCUSD",
            name: "BSC-USD",
            color: "#f0b90b",
            address:"0x55d398326f99059ff775485246999027b3197955"
        },
        "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d": {
            decimals: 18,
            symbol: "USDC",
            name: "USDC",
            color: "#2775ca",
            address:"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
        },
        "0x14016e85a25aeb13065688cafb43044c2ef86784": {
            decimals: 18,
            symbol: "TUSD",
            name: "TrueUSD",
            color: "#002868",
            address:"0x14016e85a25aeb13065688cafb43044c2ef86784"
        },
        "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47": {
            decimals: 18,
            symbol: "ADA",
            name: "Cardano",
            color: "#0033ad",
            address:"0x3ee2200efb3400fabb9aacf31297cbdd1d435d47"
        },
        "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe": {
            decimals: 18,
            symbol: "XRP",
            name: "XRP",
            color: "#23292f",
            address:"0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe"
        },
        "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8": {
            decimals: 18,
            symbol: "COMP",
            name: "Compound",
            color: "#000d395",
            address:"0x52ce071bd9b1c4b00a0b92d298c512478cad67e8"
        },
        "0x111111111117dc0aa78b770fa6a738034120c302": {
            decimals: 18,
            symbol: "1INCH",
            name: "1Inch",
            color: "#1b314f",
            address:"0x111111111117dc0aa78b770fa6a738034120c302"
        },
    },
    97:{ // BSC TESNET
        // default
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "BNB",
            name: "BNB",
            color: "#f3ba2f",
            address:"0x0000000000000000000000000000000000000000"
        },

    },
    100:{ // xDAI
        // default
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "xDAI",
            name: "xDAI",
            color: "#febe44",
            address:"0x0000000000000000000000000000000000000000"
        },
    },
    31337:{// HARDHAT
        "0x0000000000000000000000000000000000000000": {
            // default
            decimals: 18,
            symbol: "ETH",
            name: "Ether",
            color: "#000000",
            address:"0x0000000000000000000000000000000000000000",
            compound:"",
            aave: "",
            yearn: ""

        },
    },
    72:{ // IDFI
        "0x0000000000000000000000000000000000000000": {
            // default
            decimals: 18,
            symbol: "IDFI",
            name: "idecentralize.finance",
            color: "#000000",
            address:"0x0000000000000000000000000000000000000000",
            compound:"",
            aave: "",
            yearn: ""

        },

    },
    1313161555:{// Aurora Testnet
        // default
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "ETH",
            name: "Ether",
            color: "#000000",
            address:"0x0000000000000000000000000000000000000000",
            compound:"",
            aave: "",
            yearn: ""
        },


    },
    1313161554:{// Aurora Mainet
        // default
        "0x0000000000000000000000000000000000000000": {
            decimals: 18,
            symbol: "ETH",
            name: "Ether",
            color: "#393939",
            address:"0x0000000000000000000000000000000000000000",
            compound:"",
            aave: "",
            yearn: ""
        },
        "0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79": {
            decimals: 18,
            symbol: "DAI",
            name: "Dai Stablecoin",
            color: "#f5ac37",
            address:"0x8BEc47865aDe3B172A928df8f990Bc7f2A3b9f79",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xB12BFcA5A55806AaF64E99521918A4bf0fC40802": {
            address:"0xB12BFcA5A55806AaF64E99521918A4bf0fC40802",
            decimals: 6,
            symbol: "USDC",
            name: "USD Coin",
            color: "#2775ca",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x4988a896b1227218e4A686fdE5EabdcAbd91571f": {
            address:"0x4988a896b1227218e4A686fdE5EabdcAbd91571f",
            decimals: 6,
            symbol: "USDT",
            name: "Tether USD",
            color: "#50af95",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xF4eB217Ba2454613b15dBdea6e5f22276410e89e": {
            address:"0xF4eB217Ba2454613b15dBdea6e5f22276410e89e",
            decimals: 8,
            symbol: "WBTC",
            name: "Wrapped BTC",
            color: "#f09242",
            compound: "",
            aave:"",
            yearn: ""
        },
        "0xdEaCF0faa2B80aF41470003b5f6Cd113d47B4Dcd": {
            address:"0xdEaCF0faa2B80aF41470003b5f6Cd113d47B4Dcd",
            decimals: 18,
            symbol: "COMP",
            name: "Compound",
            color: "#00d395",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x4e834cDCc911605227eedDDb89Fad336AB9dc00a": {
            address:"0x4e834cDCc911605227eedDDb89Fad336AB9dc00a",
            decimals: 18,
            symbol: "AAVE",
            name: "Aave Token",
            color: "#33b6c5",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x2b9025aecc5Ce7A8E6880D3E9c6E458927eCba04": {
            address:"0x2b9025aecc5Ce7A8E6880D3E9c6E458927eCba04",
            decimals: 18,
            symbol: "BAT",
            name: "Basic Attention Token",
            color: "#ff5000",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x94190d8EF039C670c6d6B9990142e0CE2A1E3178": {
            address:"0x94190d8EF039C670c6d6B9990142e0CE2A1E3178",
            decimals: 18,
            symbol: "LINK",
            name: "ChainLink Token",
            color: "#2a5ada",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x7821c773a12485b12a2b5b7BC451c3eB200986b1": {
            address:"0x7821c773a12485b12a2b5b7BC451c3eB200986b1",
            decimals: 18,
            symbol: "SUSHI",
            name: "SushiToken",
            color: "#a675c0",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0x1Bc741235EC0Ee86ad488fa49B69Bb6C823eE7b7": {
            address:"0x1Bc741235EC0Ee86ad488fa49B69Bb6C823eE7b7",
            decimals: 18,
            symbol: "UNI",
            name: "Uniswap",
            color: "#ff007a",
            compound: "",
            aave: "",
            yearn: ""
        },
        "0xA64514A8Af3Ff7366ad3d5Daa5A548EEFceF85e0": {
            address:"0xA64514A8Af3Ff7366ad3d5Daa5A548EEFceF85e0",
            decimals: 18,
            symbol: "YFI",
            name: "yearn.finance",
            color: "#006ae3",
            compound: "",
            aave: "",
            yearn: ""
        },
 


    },
    43114:{ // AVAX Mainet
            // default
            "0x0000000000000000000000000000000000000000": {
                address:"0x0000000000000000000000000000000000000000",
                decimals: 18,
                symbol: "AVAX",
                name: "AVAX",
                color: "#71d34b",
                compound:"",
                aave: "",
                yearn: ""
            },
    },
    43113:{ // AVAX Fuji Testnet
            // default
            "0x0000000000000000000000000000000000000000": {
                address:"0x0000000000000000000000000000000000000000",
                decimals: 18,
                symbol: "AVAX",
                name: "AVAX",
                color: "#71d34b",
                compound:"",
                aave: "",
                yearn: ""
                },
    }
}






const IPFS_SVG_PATH = "https://ipfs.io/ipfs/QmP7Jw11Xxrmf9vd2vKvMgk8LYS4WRCaLjWS6F4FJUJezi/"

export {
    ERC20,
    NETWORK,
    ROUTER,
    IPFS_SVG_PATH
}
