import * as React from 'react';
import Button from '@mui/material/Button';
import { useEthers } from '@usedapp/core';
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';
import dotenv from 'dotenv';

dotenv.config()

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.REACT_APP_INFURA_ID // required
      }
    }
  };
  
  const web3Modal = new Web3Modal({
    network: "rinkeby" || "mainnet" || "hardhat", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });

export default function ConnectButton() {

    const connectWallet = async () => {
        const provider = await web3Modal.connect();
        const web3 = new Web3(provider);
      }

    const { activateBrowserWallet, account } = useEthers()

    return (
        <div>
          <Button color="primary" variant="contained" size="large"
        onClick={() => connectWallet()}>Connect Wallet</Button>
        </div>
    );
}