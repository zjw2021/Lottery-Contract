const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { abi, evm } = require('./compile')

const provider = new HDWalletProvider(
    'license toast boat inject inmate valid wife size swear color hold sting',
    'https://rinkeby.infura.io/v3/39d6c5e93fed4d29919026976731a66d'
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log('Attempting to deploy from account ', accounts[0])

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: '0x' + evm.bytecode.object })
        .send({ gas: '1000000', from: accounts[0] })

    console.log('Contract deployed to ', result.options.address)
}
deploy()