/// author : Adjei-Manu Emmanuel

/**  steps
authentication layer of nft minter
try to connect to metamask by checking window.ethereum object
if no object ethereum object is found 
ask user to install metamask
if there is an ethereum object, request the list of accounts and get the first one
the first one is always the current account
do something when account changes ie. ask user to reconnect to metamask

 **/

import { ethers } from "ethers";

export const fakeVariable = "fake";

export const connectMetamask = async () => {
  let accounts: [];
  try {
    // check if browser has metamask injected 
    if ((window as any).ethereum !== null || (window as any).ethereum !== undefined) {
      // creating a new web3Provider through metamask
      // metamask uses infura node under the hood
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);

      accounts = await provider.send("eth_requestAccounts", [])

      console.log(accounts);

    }


  } catch (error) {

  }
}