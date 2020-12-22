/**
 * Do not import this file directly.
 * Use getContract(contractName) helper
 * @example getContract('sovrynProtocol');
 */

import bzxAbi from './abi/bzxAbi.json';
import priceFeedsAbi from './abi/priceFeedAbi.json';
//import LiquidityPoolV2Converter from './abi/LiquidityPoolV2Converter.json';
//import RBTCWrapperProxy from './abi/RBTCWrapperProxy.json';
import tokenAbi from './abi/abiTestToken.json';
import TestTokenABI from './abi/abiTestToken.json';
import abiTestWBRTCToken from './abi/abiTestWBRTCToken.json';
import LoanTokenLogicWrbtc from './abi/LoanTokenLogicWrbtc.json';
import LoanTokenLogicStandard from './abi/LoanTokenLogicStandard.json';
import SwapNetworkABI from './abi/SovrynSwapNetwork.json';
import ConverterRegistryABI from './abi/ConverterRegistry.json';
/*
{
    "sovrynProtocol": "0x6F1ccAaE6E7Ef108B2DE9aef71Aa6C926c375EEA",
    "WRBTC": "0x43033AcdEE3de5632Abd83A3b12E655629fffFCE",
    "UnderlyingToken": "0x263983B49e1B47871E7AfF137E5908EEabeC069e",
    "loanToken": "0x2Ea77E80cc5118918A62B64Cb0eFf04a959A9414",
    "loanTokenRBTC": "0xB7E6E1b8B9369EeaA8E5482B379BbED02CAAEe7d",
    "UnderlyingTokenPriceFeed": "0xe68A5209DB033a1121FA3CA54f3356086Dbf567E",
    "WRBTCPriceFeed": "0x85d18AD3E4c5bD5Bc4943186CAf88b4fF521299c"
}
{
    "medianizer": "0xa522fcFf3aA63F306A7eF934dDbd09e2456Cb620",
    "mocState": "0x368275dbCa0Ddda803be12A478f5e3632827fC1f",
    "sovrynProtocol": "0x6F1ccAaE6E7Ef108B2DE9aef71Aa6C926c375EEA",
    "PriceFeeds": "0x3e0389b29993C03A90fa98d5F09e7ea2fc7c199a",
    "WRBTC": "0x43033AcdEE3de5632Abd83A3b12E655629fffFCE",
    "SUSD": "0xF126f2CBd3305783841f7F248F25688427A1D692",
    "loanTokenSUSD": "0x635e36ffCdDe069DA42Fb5d1499EB6ab19D95C5E",
    "loanTokenRBTC": "0xB7E6E1b8B9369EeaA8E5482B379BbED02CAAEe7d",
    "LoanTokenLogicStandard": "0x9653d78836ed201A63C50333bE3d4839292eC40e"
}

*/

export const contracts = {
  sovrynProtocol: {
    address: '0xEd6178785CfDD22110556c5B838541Da9d7f5B57',
    abi: bzxAbi,
    blockNumber: 4613455,
  },
  priceFeed: {
    address: '0x2A75B2BE4e0F286CCDac43A6FB0FcE7EDCb8cA55',
    abi: priceFeedsAbi,
    blockNumber: 4613459,
  },
  swapNetwork: {
    address: '0x79D7554a96d7bB2e63eEf43584d4E6235030f90E',
    abi: SwapNetworkABI,
    blockNumber: 4613467,
  },
  converterRegistry: {
    address: '0x6f76921e800746c4f007dDC35Ca931D82702bD86',
    abi: ConverterRegistryABI,
    blockNumber: 4640122,
  },
  BTC_token: {
    address: '0x89BF9fE39f6Ed4C6304504c37a13D25793ff9F4d',
    abi: abiTestWBRTCToken,
    blockNumber: 4613443,
  },
  BTC_lending: {
    address: '0x42d03164EbB6af52CDd19335E23a3881946a550b',
    abi: LoanTokenLogicWrbtc,
    blockNumber: 4613527,
  },
  DOC_token: {
    address: '0x26DDa62F80bcA1dfBE0ef8F188F1D5D5b2fDFEa3',
    abi: TestTokenABI,
    blockNumber: 4613441,
  },
  DOC_lending: {
    address: '0x9E1F34856450e0bcAf5D80C64Ffc9623Decd8793',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613503,
  },
  USDT_token: {
    address: '0xB3d5A3ac482CE23d8DBF0f1d2c003532B6016b89',
    abi: TestTokenABI,
    blockNumber: 4613611,
  },
  USDT_lending: {
    address: '0x827DB7b9b6BE5dC34dD82C6000b1F02Dd352dEc3',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613620,
  },
  BPRO_token: {
    address: '0x8AfF6d8562B6b444b64BEfAE324540bcB4B6cf69',
    abi: TestTokenABI,
    blockNumber: 4613557,
  },
  BPRO_lending: {
    address: '0xc6B344fFea38a897832cC624Bd0d6e63aAFE0525',
    abi: LoanTokenLogicStandard,
    blockNumber: 4613566,
  },
  ...(process.env.REACT_APP_WHITELIST_TOKEN &&
    process.env.REACT_APP_WHITELIST === 'true' && {
      whitelistToken: {
        address: process.env.REACT_APP_WHITELIST_TOKEN,
        abi: tokenAbi,
        blockNumber: 1218844,
      },
    }),
};
