const MaropeToken = artifacts.require("MaropeToken");

contract("MaropeToken", (accounts) => {
  let token;

  beforeEach(async () => {
    token = await MaropeToken.new({ from: accounts[0] });
  });

  it("assigns sequential ids when minting new items", async () => {
    await token.createItem("ipfs://token-1", { from: accounts[0] });

    const predictedSecondId = await token.createItem.call("ipfs://token-2", {
      from: accounts[0],
    });
    assert.strictEqual(predictedSecondId.toString(), "2", "expected next token id to be 2");

    await token.createItem("ipfs://token-2", { from: accounts[0] });

    const ownerOfFirst = await token.ownerOf(1);
    const ownerOfSecond = await token.ownerOf(2);

    assert.strictEqual(ownerOfFirst, accounts[0], "minter should own token 1");
    assert.strictEqual(ownerOfSecond, accounts[0], "minter should own token 2");
  });

  it("stores the provided URI for each token", async () => {
    const expectedUri = "ipfs://sample-token";
    await token.createItem(expectedUri, { from: accounts[0] });

    const storedUri = await token.tokenURI(1);

    assert.strictEqual(storedUri, expectedUri, "tokenURI should return the stored value");
  });
});
