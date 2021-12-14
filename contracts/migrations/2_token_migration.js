const MaropeToken = artifacts.require("MaropeToken");

module.exports = function (deployer) {
  deployer.deploy(MaropeToken);
};
