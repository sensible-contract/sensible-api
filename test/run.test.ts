import { SensibleApi } from "../src";

describe("sensible-api", () => {
  it("getBlockChainInfo", async () => {
    let api = new SensibleApi();
    let d1 = Date.now();
    let _res = await api.getBlockChainInfo();
    console.log((Date.now() - d1) / 1000 + "s");
    d1 = Date.now();
    let _res2 = await api.getMempool();
    console.log((Date.now() - d1) / 1000 + "s");
    console.log(_res2.length);
  });
});
