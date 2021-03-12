const path = require('path')
const fs = require('fs')
const solc = require('solc')

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol')
const source = fs.readFileSync(lotteryPath, 'utf-8')


var input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
    
}; 

var output = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports = output.contracts["Lottery.sol"].Lottery



