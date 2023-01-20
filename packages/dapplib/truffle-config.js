require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remind method inflict private fold spoil'; 
let testAccounts = [
"0x0260819cbf80456e16fa4fa9111ad30d6df7e0b98b9fe52f2958976909180455",
"0x9589ff9d477a7613f0f2be5315eef54c69cd66b6d82acc9ec9b29e30818e5fdc",
"0x6d9a4d673561bb114b0545d069da5d12485ee393d560ea7c9aa98dfe9ba2ff64",
"0x46f8794b77de06f35b15398b183e25beac77129d836e945f0e6c4e70aba1625e",
"0x9dfedb7d788f79fa6be420a5b8c642486870c5ca03a97b8431bd34275f5b8b07",
"0x0042003f0118e941332014fed94b97f48799859b27373a2445d9ea20090d55fe",
"0xf797517f58ad1277dcb50bd21b7440469397830a6c6481512fe212287bd21c1a",
"0xff2bbc757185989481b3fa84c9ddb6482efb0ac4e3490a6241255e0ae9a73cae",
"0x3a9703c92398944199bbe71359d12308bd9a341567d71a52ed38bd202e70727c",
"0x058abdc13312770a915f3868ff76bdf956bf970bf3387e846b2ff16e01daaaa9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

