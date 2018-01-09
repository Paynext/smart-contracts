var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "Your mnemonic words";

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id
            gas: 4700000
        },
        ropsten: {
            network_id: 3,
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/your-api-key")
            },
            gas: 4612388
        }
    },
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
};


