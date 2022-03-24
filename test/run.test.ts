import { SensibleApi } from "../src";

describe("sensible-api", () => {
  let api: SensibleApi;
  before(() => {
    api = new SensibleApi();
  });
  it("getBlockChainInfo", async () => {
    let _res = await api.getBlockChainInfo();
    console.log(_res);
  });

  it("getMempool", async () => {
    let _res = await api.getMempool();
    console.log("getMempool length:", _res.length);
  });

  it("getAddressTxInsOutsHistory", async () => {
    let _res = await api.getAddressTxInsOutsHistory(
      "19Tqgqc9TeVuA4oL3jipiPuT16czN6PJ6Y",
      { cursor: 0, size: 5, start: 0, end: 0 }
    );
    console.log(_res.length);
  });

  it("getByGenesisTxId", async () => {
    let api = new SensibleApi();
    let spentInfo = await api.getTxOutSpent(
      "cdbf3416d837b7ec1b7f38e98859b9aff4d489fd44f9b06bc633926cb8423f50",
      0
    );
    if (spentInfo) {
      let txOuts = await api.getTxOuts(spentInfo.txid);
      let { codehash, genesis } = txOuts[1];
      let genesisInfo = await api.getNftGenesisInfo(codehash, genesis);
      console.log(genesisInfo);
    } else {
      console.log("not minted.");
    }
  });
});
