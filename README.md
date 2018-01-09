# Paynext Smart Contracts

Paynext (PET) is a cryptocurrency that built on the Ethereum blockchain platform with ERC20 standard. The purpose of Paynext is to pay e-commerce transactions on Amazon, eBay, Alibaba...
For more information, visit the [website](https://paynext.io/) and read the [Whitepaper](https://paynext.io/white-paper).

# The ERC20 Standards

Ethereum is a blockchain platform with a special technology that is smart contract. Thanks to this superiority, cryptocurrencies are easily set up based on the ERC20 standard with 4 key features: no censorship, no fraud, no downtime and no intervention of third parties.
ERC20 is a standard interface of a token. ERC20 standard allows different platforms to be easily interchanged, converted and secured. Being based on the same standard, the ERC20 gives users the ability to control assets anytime, anywhere. Therefore, you can rest assured that Paynext is built entirely on the basis of ERC20 standard.

# Smart contract

### Methods

Our main functions

**transfer**
```cs
function transfer(address _to, uint256 _value) public returns (bool)
```
transfer token for a specified address
<br>
<br>
<br>
**transferFrom**
```cs
function transferFrom(address _from, address _to, uint256 _value) public returns (bool)
```
Transfer tokens from one address to another
<br>
<br>
<br>
**approve**
```cs
function approve(address _spender, uint256 _value) public returns (bool)
```
Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
<br>
<br>
<br>
**allowance**
```cs
function allowance(address _owner, address _spender) public view returns (uint256)
```
Function to check the amount of tokens that an owner allowed to a spender.
<br>
<br>
<br>
**increaseApproval**
```cs
function increaseApproval(address _spender, uint _addedValue) public returns (bool)
```
Increase the amount of tokens that an owner allowed to a spender.
<br>
<br>
<br>
**decreaseApproval**
```cs
function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool)
```
Decrease the amount of tokens that an owner allowed to a spender.
<br>
<br>
<br>
### Events

**Transfer**
```cs
event Transfer(address indexed from, address indexed to, uint256 value)
```
Triggered when a transfer is executed.
<br>
<br>
<br>
**Approval**
```cs
event Approval(address indexed owner, address indexed spender, uint256 value)
```
Triggered when allowance is changed.
<br>
<br>
<br>
## Motivation

Those will allow dapps and wallets to buy and sell the token.

The most important here is `transfer`.
