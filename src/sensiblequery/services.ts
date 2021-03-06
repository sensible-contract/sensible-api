/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { AxiosRequestConfig } from "axios";
import { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
import {
  GetAddressAddressContractHistoryQueryParams,
  GetAddressAddressContractHistoryTxQueryParams,
  GetAddressAddressHistoryQueryParams,
  GetAddressAddressHistoryTxQueryParams,
  GetAddressAddressUtxoQueryParams,
  GetAddressAddressUtxoDataQueryParams,
  GetBlockTxsBlkidQueryParams,
  GetBlocksQueryParams,
  GetContractHistoryCodehashGenesisQueryParams,
  GetContractHistoryCodehashGenesisAddressQueryParams,
  GetContractSwapAggregateAmountCodehashGenesisQueryParams,
  GetContractSwapAggregateCodehashGenesisQueryParams,
  GetContractSwapDataCodehashGenesisQueryParams,
  GetFtHistoryCodehashGenesisAddressQueryParams,
  GetFtIncomeHistoryCodehashGenesisAddressQueryParams,
  GetFtOwnersCodehashGenesisQueryParams,
  GetFtSummaryDataAddressQueryParams,
  GetFtSummaryAddressQueryParams,
  GetFtTransferTimesCodehashGenesisQueryParams,
  GetFtUtxoDataCodehashGenesisAddressQueryParams,
  GetFtUtxoCodehashGenesisAddressQueryParams,
  GetHeightHeightBlockTxsQueryParams,
  GetHeightHeightTxTxidInsQueryParams,
  GetHeightHeightTxTxidOutsQueryParams,
  GetNftAuctionUtxoDetailCodehashNftidQueryParams,
  GetNftDetailCodehashGenesisAddressQueryParams,
  GetNftHistoryCodehashGenesisAddressQueryParams,
  GetNftOwnersCodehashGenesisQueryParams,
  GetNftSellUtxoQueryParams,
  GetNftSellUtxoByAddressAddressQueryParams,
  GetNftSellUtxoDetailCodehashGenesisToken_indexQueryParams,
  GetNftSellUtxoCodehashGenesisQueryParams,
  GetNftSummaryAddressQueryParams,
  GetNftTransferTimesCodehashGenesisTokenidQueryParams,
  GetNftUtxoDataCodehashGenesisAddressQueryParams,
  GetNftUtxoListCodehashGenesisQueryParams,
  GetNftUtxoCodehashGenesisAddressQueryParams,
  GetTxTxidInsQueryParams,
  GetTxTxidOutsQueryParams,
  ControllerTxRequest,
  ControllerTxsRequest,
  ModelAddressTokenUTXOResp,
  ModelAddressUTXOResp,
  ModelBalanceResp,
  ModelBlockInfoResp,
  ModelBlockTokenVolumeResp,
  ModelBlockchainInfoResp,
  ModelContractSwapAggregateAmountResp,
  ModelContractSwapAggregateResp,
  ModelContractSwapDataResp,
  ModelFTInfoResp,
  ModelFTOwnerBalanceResp,
  ModelFTOwnerBalanceWithUtxoCountResp,
  ModelFTSummaryByAddressResp,
  ModelFTSummaryDataByAddressResp,
  ModelMempoolInfoResp,
  ModelNFTAuctionResp,
  ModelNFTInfoResp,
  ModelNFTOwnerResp,
  ModelNFTSellResp,
  ModelNFTSummaryByAddressResp,
  ModelResponse,
  ModelTokenCodeHashResp,
  ModelTokenInfoResp,
  ModelTxInResp,
  ModelTxInSpentResp,
  ModelTxInfoResp,
  ModelTxOutHistoryResp,
  ModelTxOutResp,
  ModelTxOutStatusResp,
  ModelTxStandardOutResp,
  ModelWelcome,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: { [name: string]: string | Blob | undefined }) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

/**
 * Welcome message
 */
export const get = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelWelcome }>> => {
  return Http.getRequest(
    get.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
get.key = "/";

/**
 * ????????????address??????balance
 */
export const getAddressAddressBalance = (
  /**
   * Address
   */
  address: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelBalanceResp }>> => {
  return Http.getRequest(
    template(getAddressAddressBalance.key, { address }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAddressAddressBalance.key = "/address/{address}/balance";

/**
 * ????????????address??????????????????tx?????????????????????????????????/??????
 */
export const getAddressAddressContractHistory = (
  /**
   * Address
   */
  address: string,
  queryParams: GetAddressAddressContractHistoryQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutHistoryResp[] }>
> => {
  return Http.getRequest(
    template(getAddressAddressContractHistory.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAddressAddressContractHistory.key = "/address/{address}/contract-history";

/**
 * ????????????address??????????????????tx?????????????????????tx??????
 */
export const getAddressAddressContractHistoryTx = (
  /**
   * Address
   */
  address: string,
  queryParams: GetAddressAddressContractHistoryTxQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInfoResp[] }>> => {
  return Http.getRequest(
    template(getAddressAddressContractHistoryTx.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAddressAddressContractHistoryTx.key =
  "/address/{address}/contract-history/tx";

/**
 * ????????????address????????????tx?????????????????????????????????/??????
 */
export const getAddressAddressHistory = (
  /**
   * Address
   */
  address: string,
  queryParams: GetAddressAddressHistoryQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutHistoryResp[] }>
> => {
  return Http.getRequest(
    template(getAddressAddressHistory.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAddressAddressHistory.key = "/address/{address}/history";

/**
 * ????????????address????????????tx?????????????????????tx??????
 */
export const getAddressAddressHistoryTx = (
  /**
   * Address
   */
  address: string,
  queryParams: GetAddressAddressHistoryTxQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInfoResp[] }>> => {
  return Http.getRequest(
    template(getAddressAddressHistoryTx.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAddressAddressHistoryTx.key = "/address/{address}/history/tx";

/**
 * ????????????address??????????????????utxo??????
 */
export const getAddressAddressUtxo = (
  /**
   * Address
   */
  address: string,
  queryParams: GetAddressAddressUtxoQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxStandardOutResp[] }>
> => {
  return Http.getRequest(
    template(getAddressAddressUtxo.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAddressAddressUtxo.key = "/address/{address}/utxo";

/**
 * ????????????address??????????????????utxo????????????????????????
 */
export const getAddressAddressUtxoData = (
  /**
   * Address
   */
  address: string,
  queryParams: GetAddressAddressUtxoDataQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelAddressUTXOResp }>
> => {
  return Http.getRequest(
    template(getAddressAddressUtxoData.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAddressAddressUtxoData.key = "/address/{address}/utxo-data";

/**
 * ????????????blkid??????????????????
 */
export const getBlockIdBlkid = (
  /**
   * BlockId
   */
  blkid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelBlockInfoResp }>> => {
  return Http.getRequest(
    template(getBlockIdBlkid.key, { blkid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getBlockIdBlkid.key = "/block/id/{blkid}";

/**
 * ????????????blkid?????????????????????Tx????????????
 */
export const getBlockTxsBlkid = (
  /**
   * Block ID
   */
  blkid: string,
  queryParams: GetBlockTxsBlkidQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInfoResp[] }>> => {
  return Http.getRequest(
    template(getBlockTxsBlkid.key, { blkid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getBlockTxsBlkid.key = "/block/txs/{blkid}";

/**
 * ????????????????????????????????????????????????
 */
export const getBlockchainInfo = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelBlockchainInfoResp }>
> => {
  return Http.getRequest(
    getBlockchainInfo.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getBlockchainInfo.key = "/blockchain/info";

/**
 * ????????????????????????????????????????????????
 */
export const getBlocks = (
  queryParams: GetBlocksQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelBlockInfoResp[] }>
> => {
  return Http.getRequest(
    getBlocks.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getBlocks.key = "/blocks";

/**
 * ????????????genesis????????????????????????tx?????????????????????????????????/??????
 */
export const getContractHistoryCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetContractHistoryCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutHistoryResp[] }>
> => {
  return Http.getRequest(
    template(getContractHistoryCodehashGenesis.key, { codehash, genesis }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getContractHistoryCodehashGenesis.key =
  "/contract/history/{codehash}/{genesis}";

/**
 * ????????????genesis?????????????????????tx?????????????????????????????????/??????
 */
export const getContractHistoryCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetContractHistoryCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutHistoryResp[] }>
> => {
  return Http.getRequest(
    template(getContractHistoryCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getContractHistoryCodehashGenesisAddress.key =
  "/contract/history/{codehash}/{genesis}/{address}";

/**
 * ??????Swap???????????????????????????Amount??????????????????CodeHash+GenesisID???????????????Swap
 */
export const getContractSwapAggregateAmountCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetContractSwapAggregateAmountCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<
    ModelResponse & { data?: ModelContractSwapAggregateAmountResp[] }
  >
> => {
  return Http.getRequest(
    template(getContractSwapAggregateAmountCodehashGenesis.key, {
      codehash,
      genesis,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getContractSwapAggregateAmountCodehashGenesis.key =
  "/contract/swap-aggregate-amount/{codehash}/{genesis}";

/**
 * ??????Swap???????????????????????????????????????????????????CodeHash+GenesisID???????????????Swap
 */
export const getContractSwapAggregateCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetContractSwapAggregateCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelContractSwapAggregateResp[] }>
> => {
  return Http.getRequest(
    template(getContractSwapAggregateCodehashGenesis.key, {
      codehash,
      genesis,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getContractSwapAggregateCodehashGenesis.key =
  "/contract/swap-aggregate/{codehash}/{genesis}";

/**
 * ??????Swap???????????????????????????????????????????????????CodeHash+GenesisID???????????????Swap
 */
export const getContractSwapDataCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetContractSwapDataCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelContractSwapDataResp[] }>
> => {
  return Http.getRequest(
    template(getContractSwapDataCodehashGenesis.key, { codehash, genesis }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getContractSwapDataCodehashGenesis.key =
  "/contract/swap-data/{codehash}/{genesis}";

/**
 * ????????????????????????FT Token????????????????????????UTXO??????
 */
export const getFtBalanceCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<
    ModelResponse & { data?: ModelFTOwnerBalanceWithUtxoCountResp }
  >
> => {
  return Http.getRequest(
    template(getFtBalanceCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtBalanceCodehashGenesisAddress.key =
  "/ft/balance/{codehash}/{genesis}/{address}";

/**
 * ????????????FT codehash??????
 */
export const getFtCodehashAll = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTokenCodeHashResp[] }>
> => {
  return Http.getRequest(
    getFtCodehashAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtCodehashAll.key = "/ft/codehash/all";

/**
 * ???????????????codehash???FT Token??????
 */
export const getFtCodehashInfoCodehash = (
  /**
   * Code Hash160
   */
  codehash: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelFTInfoResp[] }>> => {
  return Http.getRequest(
    template(getFtCodehashInfoCodehash.key, { codehash }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtCodehashInfoCodehash.key = "/ft/codehash-info/{codehash}";

/**
 * ???????????????codehash+genesis???FT Token??????
 */
export const getFtGenesisInfoCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelFTInfoResp }>> => {
  return Http.getRequest(
    template(getFtGenesisInfoCodehashGenesis.key, { codehash, genesis }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtGenesisInfoCodehashGenesis.key = "/ft/genesis-info/{codehash}/{genesis}";

/**
 * ??????FT??????CodeHash+??????genesis??????????????????tx?????????????????????????????????/??????
 */
export const getFtHistoryCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetFtHistoryCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutHistoryResp[] }>
> => {
  return Http.getRequest(
    template(getFtHistoryCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtHistoryCodehashGenesisAddress.key =
  "/ft/history/{codehash}/{genesis}/{address}";

/**
 * ??????FT??????CodeHash+??????genesis??????????????????tx???????????????????????????????????????????????????????????????
 */
export const getFtIncomeHistoryCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetFtIncomeHistoryCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutHistoryResp[] }>
> => {
  return Http.getRequest(
    template(getFtIncomeHistoryCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtIncomeHistoryCodehashGenesisAddress.key =
  "/ft/income-history/{codehash}/{genesis}/{address}";

/**
 * ????????????FT Token??????
 */
export const getFtInfoAll = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelFTInfoResp[] }>> => {
  return Http.getRequest(
    getFtInfoAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtInfoAll.key = "/ft/info/all";

/**
 * ??????FT Token????????????????????????????????????token??????
 */
export const getFtOwnersCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetFtOwnersCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelFTOwnerBalanceResp[] }>
> => {
  return Http.getRequest(
    template(getFtOwnersCodehashGenesis.key, { codehash, genesis }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtOwnersCodehashGenesis.key = "/ft/owners/{codehash}/{genesis}";

/**
 * ?????????????????????FT Token?????????????????????token?????????
 */
export const getFtSummaryAddress = (
  /**
   * Address
   */
  address: string,
  queryParams: GetFtSummaryAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelFTSummaryByAddressResp[] }>
> => {
  return Http.getRequest(
    template(getFtSummaryAddress.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtSummaryAddress.key = "/ft/summary/{address}";

/**
 * ?????????????????????FT Token?????????????????????token?????????????????????token??????
 */
export const getFtSummaryDataAddress = (
  /**
   * Address
   */
  address: string,
  queryParams: GetFtSummaryDataAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelFTSummaryDataByAddressResp }>
> => {
  return Http.getRequest(
    template(getFtSummaryDataAddress.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtSummaryDataAddress.key = "/ft/summary-data/{address}";

/**
 * ??????FT Token???????????????????????????????????????CodeHash+GenesisID???????????????FT
 */
export const getFtTransferTimesCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetFtTransferTimesCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelBlockTokenVolumeResp[] }>
> => {
  return Http.getRequest(
    template(getFtTransferTimesCodehashGenesis.key, { codehash, genesis }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtTransferTimesCodehashGenesis.key =
  "/ft/transfer-times/{codehash}/{genesis}";

/**
 * ??????FT??????CodeHash+??????genesis??????????????????utxo??????
 */
export const getFtUtxoCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetFtUtxoCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxOutResp[] }>> => {
  return Http.getRequest(
    template(getFtUtxoCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtUtxoCodehashGenesisAddress.key = "/ft/utxo/{codehash}/{genesis}/{address}";

/**
 * ??????FT??????CodeHash+??????genesis??????????????????utxo????????????????????????
 */
export const getFtUtxoDataCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetFtUtxoDataCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelAddressTokenUTXOResp }>
> => {
  return Http.getRequest(
    template(getFtUtxoDataCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFtUtxoDataCodehashGenesisAddress.key =
  "/ft/utxo-data/{codehash}/{genesis}/{address}";

/**
 * GetRawMempool, get txid list in mempool
 */
export const getGetrawmempool = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: string[] }>> => {
  return Http.getRequest(
    getGetrawmempool.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getGetrawmempool.key = "/getrawmempool";

/**
 * ????????????height??????????????????
 */
export const getHeightHeightBlock = (
  /**
   * Block Height
   */
  height: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelBlockInfoResp }>> => {
  return Http.getRequest(
    template(getHeightHeightBlock.key, { height }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHeightHeightBlock.key = "/height/{height}/block";

/**
 * ????????????height?????????????????????Tx????????????
 */
export const getHeightHeightBlockTxs = (
  /**
   * Block Height
   */
  height: number,
  queryParams: GetHeightHeightBlockTxsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInfoResp[] }>> => {
  return Http.getRequest(
    template(getHeightHeightBlockTxs.key, { height }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHeightHeightBlockTxs.key = "/height/{height}/block/txs";

/**
 * ????????????txid?????????????????????????????????height?????????????????????rawtx
 */
export const getHeightHeightRawtxTxid = (
  /**
   * Block Height
   */
  height: number,
  /**
   * TxId
   */
  txid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: string }>> => {
  return Http.getRequest(
    template(getHeightHeightRawtxTxid.key, { height, txid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHeightHeightRawtxTxid.key = "/height/{height}/rawtx/{txid}";

/**
 * ????????????txid?????????????????????????????????height??????????????????
 */
export const getHeightHeightTxTxid = (
  /**
   * Block Height
   */
  height: number,
  /**
   * TxId
   */
  txid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInfoResp }>> => {
  return Http.getRequest(
    template(getHeightHeightTxTxid.key, { height, txid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHeightHeightTxTxid.key = "/height/{height}/tx/{txid}";

/**
 * ????????????txid???index?????????????????????????????????height??????????????????????????????
 */
export const getHeightHeightTxTxidInIndex = (
  /**
   * Block Height
   */
  height: number,
  /**
   * TxId
   */
  txid: string,
  /**
   * input index
   */
  index: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInResp }>> => {
  return Http.getRequest(
    template(getHeightHeightTxTxidInIndex.key, { height, txid, index }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHeightHeightTxTxidInIndex.key = "/height/{height}/tx/{txid}/in/{index}";

/**
 * ????????????txid?????????????????????????????????height????????????????????????????????????
 */
export const getHeightHeightTxTxidIns = (
  /**
   * Block Height
   */
  height: number,
  /**
   * TxId
   */
  txid: string,
  queryParams: GetHeightHeightTxTxidInsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInResp[] }>> => {
  return Http.getRequest(
    template(getHeightHeightTxTxidIns.key, { height, txid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHeightHeightTxTxidIns.key = "/height/{height}/tx/{txid}/ins";

/**
 * ????????????txid???index?????????????????????????????????height??????????????????????????????
 */
export const getHeightHeightTxTxidOutIndex = (
  /**
   * Block Height
   */
  height: number,
  /**
   * TxId
   */
  txid: string,
  /**
   * output index
   */
  index: number,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutStatusResp }>
> => {
  return Http.getRequest(
    template(getHeightHeightTxTxidOutIndex.key, { height, txid, index }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHeightHeightTxTxidOutIndex.key = "/height/{height}/tx/{txid}/out/{index}";

/**
 * ????????????txid?????????????????????????????????height????????????????????????????????????
 */
export const getHeightHeightTxTxidOuts = (
  /**
   * Block Height
   */
  height: number,
  /**
   * TxId
   */
  txid: string,
  queryParams: GetHeightHeightTxTxidOutsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutStatusResp[] }>
> => {
  return Http.getRequest(
    template(getHeightHeightTxTxidOuts.key, { height, txid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHeightHeightTxTxidOuts.key = "/height/{height}/tx/{txid}/outs";

/**
 * ??????mempool??????
 */
export const getMempoolInfo = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelMempoolInfoResp }>
> => {
  return Http.getRequest(
    getMempoolInfo.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getMempoolInfo.key = "/mempool/info";

/**
 * ???????????????CodeHash???NFT ID????????????NFTAuction??????utxo
 */
export const getNftAuctionUtxoDetailCodehashNftid = (
  /**
   * Auction Code Hash160
   */
  codehash: string,
  /**
   * NFT ID
   */
  nftid: string,
  queryParams: GetNftAuctionUtxoDetailCodehashNftidQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelNFTAuctionResp[] }>
> => {
  return Http.getRequest(
    template(getNftAuctionUtxoDetailCodehashNftid.key, { codehash, nftid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftAuctionUtxoDetailCodehashNftid.key =
  "/nft/auction/utxo-detail/{codehash}/{nftid}";

/**
 * ????????????NFT CodeHash??????
 */
export const getNftCodehashAll = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTokenCodeHashResp[] }>
> => {
  return Http.getRequest(
    getNftCodehashAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftCodehashAll.key = "/nft/codehash/all";

/**
 * ???????????????codehash???NFT Token??????
 */
export const getNftCodehashInfoCodehash = (
  /**
   * Code Hash160
   */
  codehash: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTInfoResp[] }>> => {
  return Http.getRequest(
    template(getNftCodehashInfoCodehash.key, { codehash }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftCodehashInfoCodehash.key = "/nft/codehash-info/{codehash}";

/**
 * ????????????????????????NFT Token???????????????NFT??????
 */
export const getNftDetailCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetNftDetailCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTOwnerResp }>> => {
  return Http.getRequest(
    template(getNftDetailCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftDetailCodehashGenesisAddress.key =
  "/nft/detail/{codehash}/{genesis}/{address}";

/**
 * ???????????????codehash+genesis???NFT Token??????
 */
export const getNftGenesisInfoCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTInfoResp }>> => {
  return Http.getRequest(
    template(getNftGenesisInfoCodehashGenesis.key, { codehash, genesis }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftGenesisInfoCodehashGenesis.key = "/nft/genesis-info/{codehash}/{genesis}";

/**
 * ??????NFT??????CodeHash+??????genesis??????????????????tx?????????????????????????????????/??????
 */
export const getNftHistoryCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetNftHistoryCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutHistoryResp[] }>
> => {
  return Http.getRequest(
    template(getNftHistoryCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftHistoryCodehashGenesisAddress.key =
  "/nft/history/{codehash}/{genesis}/{address}";

/**
 * ????????????NFT Token??????
 */
export const getNftInfoAll = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTInfoResp[] }>> => {
  return Http.getRequest(
    getNftInfoAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftInfoAll.key = "/nft/info/all";

/**
 * ??????NFT Token???????????????????????????????????????NFT??????
 */
export const getNftOwnersCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetNftOwnersCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTOwnerResp[] }>> => {
  return Http.getRequest(
    template(getNftOwnersCodehashGenesis.key, { codehash, genesis }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftOwnersCodehashGenesis.key = "/nft/owners/{codehash}/{genesis}";

/**
 * ??????NFTSell?????????utxo??????
 */
export const getNftSellUtxo = (
  queryParams: GetNftSellUtxoQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTSellResp[] }>> => {
  return Http.getRequest(
    getNftSellUtxo.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftSellUtxo.key = "/nft/sell/utxo";

/**
 * ???????????????????????????NFTSell??????utxo??????
 */
export const getNftSellUtxoByAddressAddress = (
  /**
   * Address
   */
  address: string,
  queryParams: GetNftSellUtxoByAddressAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTSellResp[] }>> => {
  return Http.getRequest(
    template(getNftSellUtxoByAddressAddress.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftSellUtxoByAddressAddress.key = "/nft/sell/utxo-by-address/{address}";

/**
 * ??????NFT???CodeHash+??????genesis??????NFTSell??????utxo??????
 */
export const getNftSellUtxoCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetNftSellUtxoCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTSellResp[] }>> => {
  return Http.getRequest(
    template(getNftSellUtxoCodehashGenesis.key, { codehash, genesis }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftSellUtxoCodehashGenesis.key = "/nft/sell/utxo/{codehash}/{genesis}";

/**
 * ??????NFT???CodeHash+??????genesis???NFT Token Index????????????NFTSell??????utxo
 */
export const getNftSellUtxoDetailCodehashGenesisToken_index = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Token Index
   */
  token_index: number,
  queryParams: GetNftSellUtxoDetailCodehashGenesisToken_indexQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelNFTSellResp[] }>> => {
  return Http.getRequest(
    template(getNftSellUtxoDetailCodehashGenesisToken_index.key, {
      codehash,
      genesis,
      token_index,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftSellUtxoDetailCodehashGenesisToken_index.key =
  "/nft/sell/utxo-detail/{codehash}/{genesis}/{token_index}";

/**
 * ???????????????????????????NFT Token????????????????????????nft????????????
 */
export const getNftSummaryAddress = (
  /**
   * Address
   */
  address: string,
  queryParams: GetNftSummaryAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelNFTSummaryByAddressResp[] }>
> => {
  return Http.getRequest(
    template(getNftSummaryAddress.key, { address }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftSummaryAddress.key = "/nft/summary/{address}";

/**
 * ??????NFT Token???????????????????????????????????????CodeHash+GenesisID??????tokenId???????????????NFT???
 */
export const getNftTransferTimesCodehashGenesisTokenid = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Token ID
   */
  tokenid: number,
  queryParams: GetNftTransferTimesCodehashGenesisTokenidQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelBlockTokenVolumeResp[] }>
> => {
  return Http.getRequest(
    template(getNftTransferTimesCodehashGenesisTokenid.key, {
      codehash,
      genesis,
      tokenid,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftTransferTimesCodehashGenesisTokenid.key =
  "/nft/transfer-times/{codehash}/{genesis}/{tokenid}";

/**
 * ??????NFT??????CodeHash+??????genesis??????????????????utxo??????
 */
export const getNftUtxoCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetNftUtxoCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxOutResp[] }>> => {
  return Http.getRequest(
    template(getNftUtxoCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftUtxoCodehashGenesisAddress.key =
  "/nft/utxo/{codehash}/{genesis}/{address}";

/**
 * ??????NFT??????CodeHash+??????genesis??????????????????utxo????????????????????????
 */
export const getNftUtxoDataCodehashGenesisAddress = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Address
   */
  address: string,
  queryParams: GetNftUtxoDataCodehashGenesisAddressQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelAddressTokenUTXOResp }>
> => {
  return Http.getRequest(
    template(getNftUtxoDataCodehashGenesisAddress.key, {
      codehash,
      genesis,
      address,
    }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftUtxoDataCodehashGenesisAddress.key =
  "/nft/utxo-data/{codehash}/{genesis}/{address}";

/**
 * ??????NFT??????CodeHash+??????genesis?????????tokenId???utxo
 */
export const getNftUtxoDetailCodehashGenesisToken_index = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  /**
   * Token Index
   */
  token_index: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxOutResp }>> => {
  return Http.getRequest(
    template(getNftUtxoDetailCodehashGenesisToken_index.key, {
      codehash,
      genesis,
      token_index,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftUtxoDetailCodehashGenesisToken_index.key =
  "/nft/utxo-detail/{codehash}/{genesis}/{token_index}";

/**
 * ??????NFT??????CodeHash+??????genesis???tokenIndex?????????????????????utxo???????????????????????????
 */
export const getNftUtxoListCodehashGenesis = (
  /**
   * Code Hash160
   */
  codehash: string,
  /**
   * Genesis ID
   */
  genesis: string,
  queryParams: GetNftUtxoListCodehashGenesisQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelAddressTokenUTXOResp }>
> => {
  return Http.getRequest(
    template(getNftUtxoListCodehashGenesis.key, { codehash, genesis }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNftUtxoListCodehashGenesis.key = "/nft/utxo-list/{codehash}/{genesis}";

/**
 * ????????????txid?????????????????????rawtx
 */
export const getRawtxTxid = (
  /**
   * TxId
   */
  txid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: string }>> => {
  return Http.getRequest(
    template(getRawtxTxid.key, { txid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getRawtxTxid.key = "/rawtx/{txid}";

/**
 * ?????????txid???????????????woc
 */
export const getRelayTxid = (
  /**
   * TxId
   */
  txid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: string }>> => {
  return Http.getRequest(
    template(getRelayTxid.key, { txid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getRelayTxid.key = "/relay/{txid}";

/**
 * ??????Token??????
 */
export const getTokenInfo = (
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTokenInfoResp }>> => {
  return Http.getRequest(
    getTokenInfo.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTokenInfo.key = "/token/info";

/**
 * ????????????txid??????????????????
 */
export const getTxTxid = (
  /**
   * TxId
   */
  txid: string,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInfoResp }>> => {
  return Http.getRequest(
    template(getTxTxid.key, { txid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTxTxid.key = "/tx/{txid}";

/**
 * ????????????txid???index??????????????????????????????
 */
export const getTxTxidInIndex = (
  /**
   * TxId
   */
  txid: string,
  /**
   * input index
   */
  index: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInResp }>> => {
  return Http.getRequest(
    template(getTxTxidInIndex.key, { txid, index }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTxTxidInIndex.key = "/tx/{txid}/in/{index}";

/**
 * ????????????txid????????????????????????????????????
 */
export const getTxTxidIns = (
  /**
   * TxId
   */
  txid: string,
  queryParams: GetTxTxidInsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInResp[] }>> => {
  return Http.getRequest(
    template(getTxTxidIns.key, { txid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTxTxidIns.key = "/tx/{txid}/ins";

/**
 * ????????????txid???index??????????????????????????????
 */
export const getTxTxidOutIndex = (
  /**
   * TxId
   */
  txid: string,
  /**
   * output index
   */
  index: number,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutStatusResp }>
> => {
  return Http.getRequest(
    template(getTxTxidOutIndex.key, { txid, index }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTxTxidOutIndex.key = "/tx/{txid}/out/{index}";

/**
 * ????????????txid???index?????????????????????????????????????????????
 */
export const getTxTxidOutIndexSpent = (
  /**
   * TxId
   */
  txid: string,
  /**
   * output index
   */
  index: number,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: ModelTxInSpentResp }>> => {
  return Http.getRequest(
    template(getTxTxidOutIndexSpent.key, { txid, index }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTxTxidOutIndexSpent.key = "/tx/{txid}/out/{index}/spent";

/**
 * ????????????txid????????????????????????????????????
 */
export const getTxTxidOuts = (
  /**
   * TxId
   */
  txid: string,
  queryParams: GetTxTxidOutsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<ModelResponse & { data?: ModelTxOutStatusResp[] }>
> => {
  return Http.getRequest(
    template(getTxTxidOuts.key, { txid }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getTxTxidOuts.key = "/tx/{txid}/outs";

/**
 * Push Tx
 */
export const postPushtx = (
  requestBody: ControllerTxRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: string }>> => {
  return Http.postRequest(
    postPushtx.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postPushtx.key = "/pushtx";

/**
 * Push Tx list
 */
export const postPushtxs = (
  requestBody: ControllerTxsRequest,
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<ModelResponse & { data?: string[] }>> => {
  return Http.postRequest(
    postPushtxs.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postPushtxs.key = "/pushtxs";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
