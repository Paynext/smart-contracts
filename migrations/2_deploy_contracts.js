var PETToken = artifacts.require("PETToken");

module.exports = function(deployer) {
    deployer.deploy(PETToken);
};