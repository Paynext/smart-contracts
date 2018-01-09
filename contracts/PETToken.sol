pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract PETToken is BasicToken {
    string public name = 'Paynext';
    string public symbol = 'PET';
    uint public decimals = 8;
    uint public INITIAL_SUPPLY = 12000000 * 10 ** 8;

    function PETToken() public {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}
