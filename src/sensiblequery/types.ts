/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

export interface GetAddressAddressContractHistoryQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * End Block Height, (0 to get mempool data)
   */
  end: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetAddressAddressHistoryQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * End Block Height, (0 to get mempool data)
   */
  end: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetAddressAddressUtxoDataQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetAddressAddressUtxoQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetBlockTxsBlkidQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetBlocksQueryParams {
  /**
   *
   * End Block Height
   */
  end: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetContractHistoryCodehashGenesisAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * End Block Height, (0 to get mempool data)
   */
  end: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetContractSwapAggregateAmountCodehashGenesisQueryParams {
  /**
   *
   * End Block Height, (0 to get till latest)
   */
  end: number;
  /**
   *
   * 每批聚合区块数量
   */
  interval: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetContractSwapAggregateCodehashGenesisQueryParams {
  /**
   *
   * End Block Height, (0 to get till latest)
   */
  end: number;
  /**
   *
   * 每批聚合区块数量
   */
  interval: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetContractSwapDataCodehashGenesisQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * End Block Height, (0 to get mempool data)
   */
  end: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetFtHistoryCodehashGenesisAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * End Block Height, (0 to get mempool data)
   */
  end: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetFtOwnersCodehashGenesisQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetFtSummaryAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetFtSummaryDataAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetFtTransferTimesCodehashGenesisQueryParams {
  /**
   *
   * End Block Height
   */
  end: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetFtUtxoCodehashGenesisAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetFtUtxoDataCodehashGenesisAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetHeightHeightBlockTxsQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetHeightHeightTxTxidInsQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetHeightHeightTxTxidOutsQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftAuctionUtxoDetailCodehashNftidQueryParams {
  /**
   *
   * 仅返回ready状态的记录
   */
  ready: boolean;
}

export interface GetNftDetailCodehashGenesisAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftHistoryCodehashGenesisAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * End Block Height, (0 to get mempool data)
   */
  end: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetNftOwnersCodehashGenesisQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftSellUtxoByAddressAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftSellUtxoCodehashGenesisQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftSellUtxoDetailCodehashGenesisToken_indexQueryParams {
  /**
   *
   * 仅返回ready状态的记录
   */
  ready: boolean;
}

export interface GetNftSellUtxoQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftSummaryAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftTransferTimesCodehashGenesisTokenidQueryParams {
  /**
   *
   * End Block Height
   */
  end: number;
  /**
   *
   * Start Block Height
   */
  start: number;
}

export interface GetNftUtxoCodehashGenesisAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftUtxoDataCodehashGenesisAddressQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetNftUtxoListCodehashGenesisQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetTxTxidInsQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface GetTxTxidOutsQueryParams {
  /**
   *
   * 起始游标
   */
  cursor: number;
  /**
   *
   * 返回记录数量
   */
  size: number;
}

export interface ControllerTxRequest {
  txHex?: string;
}

export interface ControllerTxsRequest {
  txsHex?: string[];
}

export interface ModelAddressTokenUTXOResp {
  /**
   *
   * utxo结果偏移
   */
  cursor?: number;
  /**
   *
   * utxo总量 total = confirmed + unconfirmed - unconfirmedSpend
   */
  total?: number;
  /**
   *
   * 已确认utxo总量
   */
  totalConfirmed?: number;
  /**
   *
   * 未确认新utxo总量
   */
  totalUnconfirmed?: number;
  /**
   *
   * 未确认已花费utxo总量
   */
  totalUnconfirmedSpend?: number;
  /**
   *
   * utxo结果
   */
  utxo?: ModelTxOutResp[];
}

export interface ModelAddressUTXOResp {
  /**
   *
   * utxo结果偏移
   */
  cursor?: number;
  /**
   *
   * utxo总量 total = confirmed + unconfirmed - unconfirmedSpend
   */
  total?: number;
  /**
   *
   * 已确认utxo总量
   */
  totalConfirmed?: number;
  /**
   *
   * 未确认新utxo总量
   */
  totalUnconfirmed?: number;
  /**
   *
   * 未确认已花费utxo总量
   */
  totalUnconfirmedSpend?: number;
  /**
   *
   * utxo结果
   */
  utxo?: ModelTxStandardOutResp[];
}

export interface ModelBalanceResp {
  /**
   *
   * address
   */
  address?: string;
  /**
   *
   * 待确认余额satoshi
   */
  pendingSatoshi?: number;
  /**
   *
   * 余额satoshi
   */
  satoshi?: number;
  /**
   *
   * UTXO 数量
   */
  utxoCount?: number;
}

export interface ModelBlockInfoResp {
  bits?: number;
  /**
   *
   * 区块reward
   */
  coinbaseOut?: number;
  /**
   *
   * 当前区块高度
   */
  height?: number;
  /**
   *
   * 当前区块ID
   */
  id?: string;
  /**
   *
   * 区块内输入额度总和，不包括区块reward
   */
  inSatoshi?: number;
  /**
   *
   * Merkle Tree
   */
  merkle?: string;
  /**
   *
   * 下一个区块ID
   */
  next?: string;
  /**
   *
   * 区块内包含的Tx数量
   */
  ntx?: number;
  /**
   *
   * 区块内输出额度总和，不包括区块reward/fee
   */
  outSatoshi?: number;
  /**
   *
   * 前一个区块ID
   */
  prev?: string;
  /**
   *
   * 区块字节数
   */
  size?: number;
  /**
   *
   * 区块时间戳
   */
  timestamp?: number;
}

export interface ModelBlockTokenVolumeResp {
  blkid?: string;
  /**
   *
   * 合约类型 0: None, 1: FT, 2: Unique, 3: NFT
   */
  codeType?: number;
  codehash?: string;
  genesis?: string;
  /**
   *
   * 区块高度
   */
  height?: number;
  /**
   *
   * 输入数量
   */
  inDataValue?: number;
  invalue?: number;
  /**
   *
   * nft tokenIdx
   */
  nftIdx?: number;
  /**
   *
   * 输出数量
   */
  outDataValue?: number;
  outvalue?: number;
}

export interface ModelBlockchainInfoResp {
  /**
   *
   * 最新blockId
   */
  bestBlockHash?: string;
  /**
   *
   * 最新区块总数
   */
  blocks?: number;
  /**
   *
   * main/test
   */
  chain?: string;
  chainwork?: string;
  difficulty?: string;
  /**
   *
   * 最新区块头总数
   */
  headers?: number;
  medianTime?: number;
}

export interface ModelContractSwapAggregateAmountResp {
  /**
   *
   * 收盘Token1存量
   */
  closeAmount?: number;
  /**
   *
   * 区块高度
   */
  height?: number;
  /**
   *
   * 最高Token1存量
   */
  maxAmount?: number;
  /**
   *
   * 最低Token1存量
   */
  minAmount?: number;
  /**
   *
   * 开盘Token1存量
   */
  openAmount?: number;
  /**
   *
   * 区块时间戳
   */
  timestamp?: number;
  /**
   *
   * 交易次数
   */
  txCount?: number;
}

export interface ModelContractSwapAggregateResp {
  /**
   *
   * 收盘价格
   */
  closePrice?: number;
  /**
   *
   * 区块高度
   */
  height?: number;
  /**
   *
   * 最高价格
   */
  maxPrice?: number;
  /**
   *
   * 最低价格
   */
  minPrice?: number;
  /**
   *
   * 开盘价格
   */
  openPrice?: number;
  /**
   *
   * 区块时间戳
   */
  timestamp?: number;
  /**
   *
   * token1交易量
   */
  token1Volume?: number;
  /**
   *
   * token2交易量
   */
  token2Volume?: number;
}

export interface ModelContractSwapDataResp {
  /**
   *
   * 合约类型 0: None, 1: FT, 2: Unique, 3: NFT
   */
  codeType?: number;
  /**
   *
   * 区块高度
   */
  height?: number;
  idx?: number;
  inToken1Amount?: number;
  inToken2Amount?: number;
  inTokenLpAmount?: number;
  /**
   *
   * 0: sell, 1: buy, 2: add, 3: remove
   */
  operation?: number;
  outToken1Amount?: number;
  outToken2Amount?: number;
  outTokenLpAmount?: number;
  /**
   *
   * 区块时间戳
   */
  timestamp?: number;
  /**
   *
   * 当前txid
   */
  txid?: string;
}

export interface ModelFTInfoResp {
  /**
   *
   * FT合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 出现此ft合约的区块次数
   */
  count?: number;
  /**
   *
   * decimal
   */
  decimal?: number;
  /**
   *
   * FT 描述
   */
  desc?: string;
  /**
   *
   * FT合约的genesis，Hex编码
   */
  genesis?: string;
  /**
   *
   * FT icon url
   */
  icon?: string;
  inSatoshi?: number;
  /**
   *
   * 输入数量
   */
  inVolume?: number;
  /**
   *
   * FT name
   */
  name?: string;
  outSatoshi?: number;
  /**
   *
   * 输出数量
   */
  outVolume?: number;
  /**
   *
   * FT合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * FT symbol
   */
  symbol?: string;
  /**
   *
   * FT website url
   */
  website?: string;
}

export interface ModelFTOwnerBalanceResp {
  /**
   *
   * token持有人的address
   */
  address?: string;
  /**
   *
   * 余额
   */
  balance?: number;
  /**
   *
   * decimal
   */
  decimal?: number;
  /**
   *
   * 待确认余额
   */
  pendingBalance?: number;
}

export interface ModelFTOwnerBalanceWithUtxoCountResp {
  /**
   *
   * token持有人的address
   */
  address?: string;
  /**
   *
   * 余额
   */
  balance?: number;
  /**
   *
   * decimal
   */
  decimal?: number;
  /**
   *
   * 待确认余额
   */
  pendingBalance?: number;
  /**
   *
   * UTXO 数量
   */
  utxoCount?: number;
}

export interface ModelFTSummaryByAddressResp {
  /**
   *
   * 余额
   */
  balance?: number;
  /**
   *
   * FT合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * decimal
   */
  decimal?: number;
  /**
   *
   * FT合约的genesis，Hex编码
   */
  genesis?: string;
  /**
   *
   * FT name
   */
  name?: string;
  /**
   *
   * 待确认余额
   */
  pendingBalance?: number;
  /**
   *
   * FT合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * FT symbol
   */
  symbol?: string;
}

export interface ModelFTSummaryDataByAddressResp {
  /**
   *
   * token结果偏移
   */
  cursor?: number;
  /**
   *
   * token结果
   */
  token?: ModelFTSummaryByAddressResp[];
  /**
   *
   * token总量
   */
  total?: number;
}

export interface ModelMempoolInfoResp {
  /**
   *
   * Mempool内包含的Tx数量
   */
  ntx?: number;
}

export interface ModelNFTAuctionResp {
  /**
   *
   * 当前拍卖NFT的出价价格(satoshi)
   */
  bidBsvPrice?: number;
  /**
   *
   * 当前拍卖出价的时间戳
   */
  bidTimestamp?: number;
  /**
   *
   * 当前拍卖出价人的地址
   */
  bidderAddress?: string;
  /**
   *
   * 当前拍卖NFT合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 当前拍卖手续费的地址
   */
  feeAddress?: string;
  /**
   *
   * 当前拍卖手续费
   */
  feeAmount?: number;
  /**
   *
   * 当前拍卖NFT的genesis
   */
  genesis?: string;
  /**
   *
   * 当前交易被打包的区块高度
   */
  height?: number;
  /**
   *
   * 输出被花费的txid所在区块内序号
   */
  idx?: number;
  /**
   *
   * 当前拍卖NFT是否已准备好(转出到拍卖合约)
   */
  isReady?: boolean;
  /**
   *
   * 当前拍卖NFT的codehash
   */
  nftCodehash?: string;
  /**
   *
   * 当前拍卖NFT的nftId
   */
  nftID?: string;
  /**
   *
   * 拍卖合约输出的satoshi
   */
  satoshi?: number;
  /**
   *
   * 当前拍卖发起人的地址
   */
  senderAddress?: string;
  /**
   *
   * 当前拍卖NFT合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * 当前拍卖NFT的起拍价格(satoshi)
   */
  startBsvPrice?: number;
  /**
   *
   * 拍卖合约txid
   */
  txid?: string;
  /**
   *
   * 拍卖合约输出序号
   */
  vout?: number;
}

export interface ModelNFTInfoResp {
  /**
   *
   * NFT合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 当前NFT个数
   */
  count?: number;
  /**
   *
   * NFT 描述
   */
  desc?: string;
  /**
   *
   * NFT合约的genesis，Hex编码
   */
  genesis?: string;
  /**
   *
   * NFT icon url
   */
  icon?: string;
  inSatoshi?: number;
  /**
   *
   * 总输入次数
   */
  inTimes?: number;
  /**
   *
   * 0号NFT的metaOutputIndex
   */
  metaOutputIndex?: number;
  /**
   *
   * 0号NFT的metaTxId
   */
  metaTxId?: string;
  /**
   *
   * NFT name
   */
  name?: string;
  outSatoshi?: number;
  /**
   *
   * 总输出次数
   */
  outTimes?: number;
  /**
   *
   * NFT合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * 当前NFT最大发行量
   */
  supply?: number;
  /**
   *
   * NFT symbol
   */
  symbol?: string;
  /**
   *
   * NFT website url
   */
  website?: string;
}

export interface ModelNFTOwnerResp {
  /**
   *
   * token持有人的address
   */
  address?: string;
  /**
   *
   * 持有的当前NFT个数
   */
  count?: number;
  /**
   *
   * 待确认的当前NFT个数
   */
  pendingCount?: number;
}

export interface ModelNFTSellResp {
  /**
   *
   * 当前售卖人seller的address
   */
  address?: string;
  /**
   *
   * 当前售卖NFT合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 当前售卖NFT的genesis
   */
  genesis?: string;
  /**
   *
   * 当前交易被打包的区块高度
   */
  height?: number;
  /**
   *
   * 输出被花费的txid所在区块内序号
   */
  idx?: number;
  /**
   *
   * 当前售卖NFT是否已准备好(转出到售卖合约)
   */
  isReady?: boolean;
  /**
   *
   * 当前售卖NFT的metaOutputIndex
   */
  metaOutputIndex?: number;
  /**
   *
   * 当前售卖NFT的metaTxId
   */
  metaTxId?: string;
  /**
   *
   * 当前售卖NFT的出售价格(satoshi)
   */
  price?: number;
  /**
   *
   * 售卖合约输出的satoshi
   */
  satoshi?: number;
  /**
   *
   * 当前售卖NFT合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * 当前售卖NFT最大发行量
   */
  supply?: number;
  /**
   *
   * 当前售卖NFT的tokenIndex
   */
  tokenIndex?: string;
  /**
   *
   * 售卖合约txid
   */
  txid?: string;
  /**
   *
   * 售卖合约输出序号
   */
  vout?: number;
}

export interface ModelNFTSummaryByAddressResp {
  /**
   *
   * NFT合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 持有的当前NFT个数
   */
  count?: number;
  /**
   *
   * NFT合约的genesis，Hex编码
   */
  genesis?: string;
  /**
   *
   * 0号NFT的metaOutputIndex
   */
  metaOutputIndex?: number;
  /**
   *
   * 0号NFT的metaTxId
   */
  metaTxId?: string;
  /**
   *
   * 待确认的当前NFT个数
   */
  pendingCount?: number;
  /**
   *
   * NFT合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * 当前NFT最大发行量
   */
  supply?: number;
  /**
   *
   * NFT symbol
   */
  symbol?: string;
}

export interface ModelResponse {
  code?: number;
  data?: { [x in string | number]: any };
  msg?: string;
}

export interface ModelTokenCodeHashResp {
  /**
   *
   * FT合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 采用当前合约的Token种类数，NFT包括具体NFT数量；FT只包括种类数量
   */
  count?: number;
  /**
   *
   * 总输入次数
   */
  inTimes?: number;
  /**
   *
   * 总输出次数
   */
  outTimes?: number;
}

export interface ModelTokenInfoResp {
  /**
   *
   * 当前合约代码种类数
   */
  countCode?: number;
  /**
   *
   * 当前FT总数
   */
  countFT?: number;
  /**
   *
   * 当前NFT总数
   */
  countNFT?: number;
  /**
   *
   * 当前NFTID总数
   */
  countNFTID?: number;
  /**
   *
   * 当前持有FT人数
   */
  countOwnerFT?: number;
  /**
   *
   * 当前持有NFT人数
   */
  countOwnerNFT?: number;
  /**
   *
   * FT总输入次数
   */
  inTimesFT?: number;
  /**
   *
   * NFT总输入次数
   */
  inTimesNFT?: number;
  /**
   *
   * FT总输出次数
   */
  outTimesFT?: number;
  /**
   *
   * NFT总输出次数
   */
  outTimesNFT?: number;
}

export interface ModelTxInResp {
  /**
   *
   * 当前输入花费的outpoint的address
   */
  address?: string;
  /**
   *
   * 当前输出的合约类型 0: None, 1: FT, 2: Unique, 3: NFT
   */
  codeType?: number;
  /**
   *
   * 合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 当前输入花费的outpoint的genesis，Hex编码
   */
  genesis?: string;
  /**
   *
   * Tx所在区块的高度
   */
  height?: number;
  /**
   *
   * 当前输入花费的utxo所属的区块高度，如果为0则未花费
   */
  heightTxo?: number;
  /**
   *
   * 输入index
   */
  idx?: number;
  /**
   *
   * 当前输入花费是否为NFT
   */
  isNFT?: boolean;
  /**
   *
   * 当前输入的nft metaOutputIndex
   */
  metaOutputIndex?: number;
  /**
   *
   * 当前输入的nft metaTxId
   */
  metaTxId?: string;
  /**
   *
   * 当前输入花费的outpoint的satoshi
   */
  satoshi?: number;
  /**
   *
   * 当前输入锁定脚本，Hex编码
   */
  scriptPk?: string;
  /**
   *
   * scriptSig，Hex编码
   */
  scriptSig?: string;
  /**
   *
   * 当前输入锁定脚本类型，Hex编码
   */
  scriptType?: string;
  /**
   *
   * 合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * Tx input的sequence
   */
  sequence?: number;
  /**
   *
   * 当前输入花费的outpoint的ft tokenAmount
   */
  tokenAmount?: string;
  /**
   *
   * 当前输入花费的outpoint的ft decimal
   */
  tokenDecimal?: number;
  /**
   *
   * 当前输入的ft tokenId
   */
  tokenId?: string;
  /**
   *
   * 当前输入的nft tokenIndex
   */
  tokenIndex?: string;
  /**
   *
   * 当前输入的ft tokenName
   */
  tokenName?: string;
  /**
   *
   * 当前输入的ft tokenSymbol
   */
  tokenSymbol?: string;
  /**
   *
   * Txid
   */
  txid?: string;
  /**
   *
   * 当前输入花费的outpoint的txid
   */
  utxid?: string;
  /**
   *
   * 当前输入花费的outpoint的index
   */
  vout?: number;
}

export interface ModelTxInSpentResp {
  /**
   *
   * 输出被花费的区块高度
   */
  height?: number;
  /**
   *
   * 输出被花费的txid所在区块内序号
   */
  idx?: number;
  /**
   *
   * 输出被花费的txid
   */
  txid?: string;
  /**
   *
   * 输出txid参数
   */
  utxid?: string;
  /**
   *
   * 输出index参数
   */
  vout?: number;
}

export interface ModelTxInfoResp {
  /**
   *
   * Tx所在区块的Id
   */
  blkid?: string;
  /**
   *
   * Tx所在区块的高度
   */
  height?: number;
  /**
   *
   * Tx在区块中的顺序号
   */
  idx?: number;
  /**
   *
   * Tx输入的satoshi总和
   */
  inSatoshi?: number;
  /**
   *
   * Tx Locktime
   */
  locktime?: number;
  /**
   *
   * Tx包括的输入条数
   */
  nIn?: number;
  /**
   *
   * Tx包括的输出条数
   */
  nOut?: number;
  /**
   *
   * Tx输出的satoshi总和
   */
  outSatoshi?: number;
  /**
   *
   * Tx字节数
   */
  size?: number;
  /**
   *
   * Tx所在区块的时间戳
   */
  timestamp?: number;
  txid?: string;
}

export interface ModelTxOutHistoryResp {
  /**
   *
   * 当前输出的address
   */
  address?: string;
  /**
   *
   * 当前输出的合约类型 0: None, 1: FT, 2: Unique, 3: NFT
   */
  codeType?: number;
  /**
   *
   * 合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 当前输出的genesis
   */
  genesis?: string;
  /**
   *
   * 当前交易被打包的区块高度
   */
  height?: number;
  /**
   *
   * 当前交易被打包的区块内序号
   */
  idx?: number;
  /**
   *
   * 1为输出包含(即收入)，0为输入包含(即花费)
   */
  ioType?: number;
  /**
   *
   * 当前输出是否为NFT
   */
  isNFT?: boolean;
  /**
   *
   * 当前输出的nft metaOutputIndex
   */
  metaOutputIndex?: number;
  /**
   *
   * 当前输出的nft metaTxId
   */
  metaTxId?: string;
  /**
   *
   * 当前输出的satoshi
   */
  satoshi?: number;
  /**
   *
   * 当前输出锁定脚本
   */
  scriptPk?: string;
  /**
   *
   * 当前输出锁定脚本类型
   */
  scriptType?: string;
  /**
   *
   * 合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * 区块时间戳
   */
  timestamp?: number;
  /**
   *
   * 当前输出的ft tokenAmount
   */
  tokenAmount?: string;
  /**
   *
   * 当前输出花费的outpoint的ft decimal
   */
  tokenDecimal?: number;
  /**
   *
   * 当前输出的ft tokenId
   */
  tokenId?: string;
  /**
   *
   * 当前输出的nft tokenIndex
   */
  tokenIndex?: string;
  /**
   *
   * 当前输出的ft tokenName
   */
  tokenName?: string;
  /**
   *
   * 当前输出的ft tokenSymbol
   */
  tokenSymbol?: string;
  /**
   *
   * 当前txid
   */
  txid?: string;
  /**
   *
   * 当前输出序号
   */
  vout?: number;
}

export interface ModelTxOutResp {
  /**
   *
   * 当前输出的address
   */
  address?: string;
  /**
   *
   * 当前输出的合约类型 0: None, 1: FT, 2: Unique, 3: NFT
   */
  codeType?: number;
  /**
   *
   * 合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 当前输出的genesis
   */
  genesis?: string;
  /**
   *
   * 当前交易被打包的区块高度
   */
  height?: number;
  /**
   *
   * 当前交易被打包的区块内序号
   */
  idx?: number;
  /**
   *
   * 当前输出是否为NFT
   */
  isNFT?: boolean;
  /**
   *
   * 当前输出的nft metaOutputIndex
   */
  metaOutputIndex?: number;
  /**
   *
   * 当前输出的nft metaTxId
   */
  metaTxId?: string;
  /**
   *
   * 当前输出的satoshi
   */
  satoshi?: number;
  /**
   *
   * 当前输出锁定脚本
   */
  scriptPk?: string;
  /**
   *
   * 当前输出锁定脚本类型
   */
  scriptType?: string;
  /**
   *
   * 合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * 当前输出的ft tokenAmount
   */
  tokenAmount?: string;
  /**
   *
   * 当前输出花费的outpoint的ft decimal
   */
  tokenDecimal?: number;
  /**
   *
   * 当前输出的ft tokenId
   */
  tokenId?: string;
  /**
   *
   * 当前输出的nft tokenIndex
   */
  tokenIndex?: string;
  /**
   *
   * 当前输出的ft tokenName
   */
  tokenName?: string;
  /**
   *
   * 当前输出的ft tokenSymbol
   */
  tokenSymbol?: string;
  /**
   *
   * 当前txid
   */
  txid?: string;
  /**
   *
   * 当前输出序号
   */
  vout?: number;
}

export interface ModelTxOutStatusResp {
  /**
   *
   * 当前输出的address
   */
  address?: string;
  /**
   *
   * 当前输出的合约类型 0: None, 1: FT, 2: Unique, 3: NFT
   */
  codeType?: number;
  /**
   *
   * 合约hash160(CodePart)
   */
  codehash?: string;
  /**
   *
   * 当前输出的genesis
   */
  genesis?: string;
  /**
   *
   * 当前交易被打包的区块高度
   */
  height?: number;
  /**
   *
   * 当前输出被花费的区块高度，如果为0则未花费
   */
  heightSpent?: number;
  /**
   *
   * 当前交易被打包的区块内序号
   */
  idx?: number;
  /**
   *
   * 当前输出是否为NFT
   */
  isNFT?: boolean;
  /**
   *
   * 当前输出的nft metaOutputIndex
   */
  metaOutputIndex?: number;
  /**
   *
   * 当前输出的nft metaTxId
   */
  metaTxId?: string;
  /**
   *
   * 当前输出的satoshi
   */
  satoshi?: number;
  /**
   *
   * 当前输出锁定脚本
   */
  scriptPk?: string;
  /**
   *
   * 当前输出锁定脚本类型
   */
  scriptType?: string;
  /**
   *
   * 合约的sensibleId，即genesisTx的outpoint，Hex编码
   */
  sensibleId?: string;
  /**
   *
   * 当前输出的ft tokenAmount
   */
  tokenAmount?: string;
  /**
   *
   * 当前输出花费的outpoint的ft decimal
   */
  tokenDecimal?: number;
  /**
   *
   * 当前输出的ft tokenId
   */
  tokenId?: string;
  /**
   *
   * 当前输出的nft tokenIndex
   */
  tokenIndex?: string;
  /**
   *
   * 当前输出的ft tokenName
   */
  tokenName?: string;
  /**
   *
   * 当前输出的ft tokenSymbol
   */
  tokenSymbol?: string;
  /**
   *
   * 当前txid
   */
  txid?: string;
  /**
   *
   * 当前输出被花费的txid
   */
  txidSpent?: string;
  /**
   *
   * 当前输出序号
   */
  vout?: number;
}

export interface ModelTxStandardOutResp {
  /**
   *
   * 当前交易被打包的区块高度
   */
  height?: number;
  /**
   *
   * 输出被花费的txid所在区块内序号
   */
  idx?: number;
  /**
   *
   * 当前输出的satoshi
   */
  satoshi?: number;
  /**
   *
   * 当前输出锁定脚本
   */
  scriptPk?: string;
  /**
   *
   * 当前输出锁定脚本类型
   */
  scriptType?: string;
  /**
   *
   * 当前txid
   */
  txid?: string;
  /**
   *
   * 当前输出序号
   */
  vout?: number;
}

export interface ModelWelcome {
  contact?: string;
  github?: string;
  job?: string;
}
