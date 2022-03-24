/// author : Adjei-Manu Emmanuel

/**  steps

@function connectMetamask creates a new web3Provider through metamask
Through this provider, we request user to connect account by requesting metamask accounts

 **/

import { ethers } from "ethers";

export const fakeVariable = "fake";

export const connectMetamask = async () => {
  let accounts: [];
  try {
    // check if browser has metamask injected
    if (
      (window as any).ethereum !== null ||
      (window as any).ethereum !== undefined
    ) {
      // creating a new web3Provider through metamask
      // metamask uses infura node under the hood
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );

      accounts = await provider.send("eth_requestAccounts", []);

      console.log(accounts);
    } else {
      alert("please install metamask to continue using this app");
    }
  } catch (error) {
    // will do proper error handling
    console.log(error);
  }
};
