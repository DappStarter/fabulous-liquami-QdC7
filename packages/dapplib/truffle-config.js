require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remember minor imitate prison forget spray'; 
let testAccounts = [
"0x9018c4a87bfe04e2db1a9c94544a4f56110e3e1cf33388811c6646a5daddda1e",
"0x5de59f2944633d512450c8c313393f0ae3eb8eef6ed16231d74feb28094ff88d",
"0x5a14927f1d36725744bbea01822e0a4560768d6659fc181ba0e7b996b5f2799c",
"0xa9174fe639d7cf416dc6ec2843f66f49eb0cef8f1037849ae51e198c8286574a",
"0x064031891b83ec6a47664bb4081a313e896e048f51e9b2675c988d5e3ce7377e",
"0xe417dfc3276392b840f353fb65bc717e2fe5726ffcf74642d05ad24afd553d6a",
"0x57337f0ee3ac0f906633e93ee5e31f8df8248a0754ac1effab965e6a387d2d42",
"0x25ba4caed56c7040523fe8257ecf721e74597b60d0cbf0b84e02c54f03c1f583",
"0x37e336c5c01d1d7dc04f9fe9af022f6e2039e15613cdeef546d3f72c4b3d22d2",
"0xc88a11b774db96f1964af5f6263b3150fe24452b8622add1759af08412acbe1b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


