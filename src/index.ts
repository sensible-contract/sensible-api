import * as zlib from "zlib";
import { getAxiosInstance } from "./sensiblequery/config";
import {
  getAddressAddressBalance,
  getAddressAddressUtxo,
  getAddressAddressUtxoData,
  getBlockchainInfo,
  getBlockIdBlkid,
  getBlocks,
  getBlockTxsBlkid,
  getContractSwapAggregateAmountCodehashGenesis,
  getContractSwapAggregateCodehashGenesis,
  getContractSwapDataCodehashGenesis,
  getFtBalanceCodehashGenesisAddress,
  getFtCodehashAll,
  getFtCodehashInfoCodehash,
  getFtGenesisInfoCodehashGenesis,
  getFtHistoryCodehashGenesisAddress,
  getFtInfoAll,
  getFtOwnersCodehashGenesis,
  getFtSummaryDataAddress,
  getFtUtxoCodehashGenesisAddress,
  getHeightHeightBlock,
  getHeightHeightBlockTxs,
  getHeightHeightRawtxTxid,
  getHeightHeightTxTxid,
  getMempoolInfo,
  getNftAuctionUtxoDetailCodehashNftid,
  getNftDetailCodehashGenesisAddress,
  getNftGenesisInfoCodehashGenesis,
  getNftHistoryCodehashGenesisAddress,
  getNftInfoAll,
  getNftOwnersCodehashGenesis,
  getNftSellUtxo,
  getNftSellUtxoByAddressAddress,
  getNftSellUtxoCodehashGenesis,
  getNftSellUtxoDetailCodehashGenesisToken_index,
  getNftSummaryAddress,
  getNftTransferTimesCodehashGenesisTokenid,
  getNftUtxoCodehashGenesisAddress,
  getNftUtxoDataCodehashGenesisAddress,
  getNftUtxoDetailCodehashGenesisToken_index,
  getNftUtxoListCodehashGenesis,
  getRawtxTxid,
  getTxTxid,
  getTxTxidIns,
  getTxTxidOutIndex,
  getTxTxidOutIndexSpent,
  getTxTxidOuts,
  postPushtx,
  postPushtxs,
} from "./sensiblequery/services";

async function gzip(data: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (err, val) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(val);
    });
  });
}

export type Balance = {
  balance: number;
  pendingBalance: number;
  utxoCount: number;
};

export type Utxo = {
  txId: string;
  outputIndex: number;
  satoshis: number;
  address: string;
};

export type TokenBalance = {
  balance: string;
  pendingBalance: string;
  utxoCount: number;
  decimal: number;
};

export type TokenUtxo = {
  txId: string;
  outputIndex: number;
  tokenAmount: string;
  tokenAddress: string;
};

export type Token = {
  codehash: string;
  genesis: string;
  sensibleId: string;
  name: string;
  symbol: string;
  decimal: number;
  balance: string;
  pendingBalance: string;
};

export type NftUtxo = {
  txId: string;
  outputIndex: number;
  tokenIndex: string;
  tokenAddress: string;
};

export type NftSellUtxo = {
  codehash: string;
  genesis: string;
  tokenIndex: string;
  txId: string;
  outputIndex: number;
  sellerAddress: string;
  satoshisPrice: number;
};

export class SensibleApi {
  constructor(apiPrefix = "https://api.sensiblequery.com") {
    getAxiosInstance([]).defaults.baseURL = apiPrefix;
  }

  async getBalance(address: string): Promise<Balance> {
    let _res = await getAddressAddressBalance(address);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    let data = _res.data.data;
    return {
      balance: data.satoshi,
      pendingBalance: data.pendingSatoshi,
      utxoCount: data.utxoCount,
    };
  }

  async getUtxos(
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ): Promise<Utxo[]> {
    let _res = await getAddressAddressUtxo(address, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    let utxos: Utxo[] = [];
    _res.data.data.forEach((v) => {
      utxos.push({
        txId: v.txid,
        outputIndex: v.vout,
        satoshis: v.satoshi,
        address: address,
      });
    });
    return utxos;
  }

  /**
   * Use getRawTx instead
   * @deprecated
   * @returns
   */
  async getRawTxData(txid: string): Promise<string> {
    let _res = await getRawtxTxid(txid);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async broadcast(txHex: string): Promise<string> {
    let _res = await postPushtx({ txHex });
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getTokenUtxos(
    codehash: string,
    genesis: string,
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ): Promise<TokenUtxo[]> {
    let _res = await getFtUtxoCodehashGenesisAddress(
      codehash,
      genesis,
      address,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    let data = _res.data.data;
    return data.map((v) => ({
      txId: v.txid,
      outputIndex: v.vout,
      tokenAmount: v.tokenAmount,
      tokenAddress: v.address,
    }));
  }

  async getTokenBalance(
    codehash: string,
    genesis: string,
    address: string
  ): Promise<TokenBalance> {
    let _res = await getFtBalanceCodehashGenesisAddress(
      codehash,
      genesis,
      address
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    let data = _res.data.data;
    return {
      balance: data.balance.toString(),
      pendingBalance: data.pendingBalance.toString(),
      utxoCount: data.utxoCount,
      decimal: data.decimal,
    };
  }

  async getTokenList(
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ): Promise<{ cursor: number; list: Token[]; total: number }> {
    let _res = await getFtSummaryDataAddress(address, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    let data = _res.data.data;
    return {
      cursor: data.cursor,
      total: data.total,
      list: data.token.map((v) => ({
        codehash: v.codehash,
        genesis: v.genesis,
        sensibleId: v.sensibleId,
        name: v.name,
        symbol: v.symbol,
        decimal: v.decimal,
        balance: v.balance.toString(),
        pendingBalance: v.pendingBalance.toString(),
      })),
    };
  }

  async getNftUtxos(
    codehash: string,
    genesis: string,
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ): Promise<NftUtxo[]> {
    let _res = await getNftUtxoCodehashGenesisAddress(
      codehash,
      genesis,
      address,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    let data = _res.data.data;
    return data.map((v) => ({
      txId: v.txid,
      outputIndex: v.vout,
      tokenIndex: v.tokenIndex,
      tokenAddress: v.address,
    }));
  }

  async getNftDetail(
    codehash: string,
    genesis: string,
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getNftDetailCodehashGenesisAddress(
      codehash,
      genesis,
      address,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //default
  async getBlockChainInfo() {
    let _res = await getBlockchainInfo();
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getMempool() {
    let _res = await getHeightHeightBlockTxs(4294967295, {
      cursor: 0,
      size: 100000,
    });
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data.map((v) => v.txid);
  }

  async getMempoolInfo() {
    let _res = await getMempoolInfo();
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async pushTx(txHex: string): Promise<string> {
    let _res = await postPushtx({ txHex });
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async pushTxs(txHexs: string[]) {
    let _res = await postPushtxs({ txsHex: txHexs });
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //address
  async getAddressBalance(address: string) {
    let _res = await getAddressAddressBalance(address);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getAddressUtxos(
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ) {
    let _res = await getAddressAddressUtxo(address, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getAddressUtxoDatas(
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ) {
    let _res = await getAddressAddressUtxoData(address, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //block
  async getBlockInfo(blockId: string) {
    let _res = await getBlockIdBlkid(blockId);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getBlocks(queryParams: { start: number; end: number }) {
    let _res = await getBlocks(queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getBlockInfoByHeight(height: number) {
    let _res = await getHeightHeightBlock(height);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //tx
  async getTxsByBlockId(
    blockId: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ) {
    let _res = await getBlockTxsBlkid(blockId, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getTxsByHeight(
    height: number,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ) {
    let _res = await getHeightHeightBlockTxs(height, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getRawTxInHeight(txid: string, height: number) {
    let _res = await getHeightHeightRawtxTxid(height, txid);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getTxInHeight(txid: string, height: number) {
    let _res = await getHeightHeightTxTxid(height, txid);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getTxIns(
    txid: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ) {
    let _res = await getTxTxidIns(txid, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getRawTx(txid: string): Promise<string> {
    let _res = await getRawtxTxid(txid);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getTx(txid: string) {
    let _res = await getTxTxid(txid);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //unique
  //查询Swap合约在区块中的聚合Amount数据，以合约CodeHash+GenesisID来确认一种Swap
  async getSwapAggregateAmount(
    codehash: string,
    genesis: string,
    queryParams: { start: number; end: number; interval: number }
  ) {
    let _res = await getContractSwapAggregateAmountCodehashGenesis(
      codehash,
      genesis,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //查询Swap合约在区块中的聚合价格数据，以合约CodeHash+GenesisID来确认一种Swap
  async getSwapAggregate(
    codehash: string,
    genesis: string,
    queryParams: { start: number; end: number; interval: number }
  ) {
    let _res = await getContractSwapAggregateCodehashGenesis(
      codehash,
      genesis,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //查询Swap合约在区块中的每次交易数据，以合约CodeHash+GenesisID来确认一种Swap
  async getSwapDatas(
    codehash: string,
    genesis: string,
    queryParams: { cursor: number; size: number; start: number; end: number }
  ) {
    let _res = await getContractSwapDataCodehashGenesis(
      codehash,
      genesis,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //ft
  //查询某人持有的某FT Token的余额，同时返回UTXO数量
  async getFtBalance(codehash: string, genesis: string, address: string) {
    let _res = await getFtBalanceCodehashGenesisAddress(
      codehash,
      genesis,
      address
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //查询使用某codehash的FT Token简述
  async getFtCodehashInfo(codehash: string) {
    let _res = await getFtCodehashInfoCodehash(codehash);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //查询所有FT codehash简述
  async getFtCodehashInfos() {
    let _res = await getFtCodehashAll();
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //查询使用某codehash+genesis的FT Token简述
  async getFtGenesisInfo(codehash: string, genesis: string) {
    let _res = await getFtGenesisInfoCodehashGenesis(codehash, genesis);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //通过FT合约CodeHash+溯源genesis获取地址相关tx历史列表，返回详细输入/输出
  async getFtHistory(
    codehash: string,
    genesis: string,
    address: string,
    queryParams: { cursor: number; size: number; start: number; end: number }
  ) {
    let _res = await getFtHistoryCodehashGenesisAddress(
      codehash,
      genesis,
      address,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //查询所有FT Token简述
  async getFtInfos() {
    let _res = await getFtInfoAll();
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getFtOwners(
    codehash: string,
    genesis: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ) {
    let _res = await getFtOwnersCodehashGenesis(codehash, genesis, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getFtSummaryData(
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 100 }
  ) {
    let _res = await getFtSummaryDataAddress(address, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getTxOutSpent(txid: string, index: number) {
    let _res = await getTxTxidOutIndexSpent(txid, index);
    if (_res.data.code != 0) {
      return null;
      // throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getTxOuts(
    txid: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getTxTxidOuts(txid, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getTxOut(txid: string, outIndex: number) {
    let _res = await getTxTxidOutIndex(txid, outIndex);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //查询使用某codehash+genesis的NFT Token简述
  async getNftGenesisInfo(codehash: string, genesis: string) {
    let _res = await getNftGenesisInfoCodehashGenesis(codehash, genesis);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //通过NFT合约CodeHash+溯源genesis获取地址相关tx历史列表，返回详细输入/输出
  async getNftHistory(
    codehash: string,
    genesis: string,
    address: string,
    queryParams: {
      cursor: number;
      size: number;
      start: number;
      end: number;
    } = { cursor: 0, size: 20, start: 0, end: 0 }
  ) {
    let _res = await getNftHistoryCodehashGenesisAddress(
      codehash,
      genesis,
      address,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  //查询所有NFT Token简述
  async getNftInfoAll() {
    let _res = await getNftInfoAll();
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftOwners(
    codehash: string,
    genesis: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getNftOwnersCodehashGenesis(
      codehash,
      genesis,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftSellAllUtxos(
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getNftSellUtxo(queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftSellUtxoByAddress(
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getNftSellUtxoByAddressAddress(address, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftSellUtxoDetail(
    codehash: string,
    genesis: string,
    tokenIndex: string,
    queryParams: { ready: boolean }
  ) {
    let _res = await getNftSellUtxoDetailCodehashGenesisToken_index(
      codehash,
      genesis,
      tokenIndex as any,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftSellUtxos(
    codehash: string,
    genesis: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getNftSellUtxoCodehashGenesis(
      codehash,
      genesis,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftSummary(
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getNftSummaryAddress(address, queryParams);
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftTransferTimes(
    codehash: string,
    genesis: string,
    tokenIndex: number,
    queryParams: { start: number; end: number }
  ) {
    let _res = await getNftTransferTimesCodehashGenesisTokenid(
      codehash,
      genesis,
      tokenIndex,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftUtxoDatas(
    codehash: string,
    genesis: string,
    address: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getNftUtxoDataCodehashGenesisAddress(
      codehash,
      genesis,
      address,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftUtxoDetail(
    codehash: string,
    genesis: string,
    tokenIndex: string
  ) {
    let _res = await getNftUtxoDetailCodehashGenesisToken_index(
      codehash,
      genesis,
      tokenIndex as any
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftUtxoList(
    codehash: string,
    genesis: string,
    queryParams: { cursor: number; size: number } = { cursor: 0, size: 20 }
  ) {
    let _res = await getNftUtxoListCodehashGenesis(
      codehash,
      genesis,
      queryParams
    );
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }

  async getNftAuctionUtxoDetails(
    codehash: string,
    nftid: string,
    ready: boolean = true
  ) {
    let _res = await getNftAuctionUtxoDetailCodehashNftid(codehash, nftid, {
      ready,
    });
    if (_res.data.code != 0) {
      throw new Error(_res.data.msg);
    }
    return _res.data.data;
  }
}
