import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import ConnectButton from "../components/ConnectButton";
import { EtherBalance } from '../components/EtherBalance';
import { TokenBalance } from '../components/TokenBalance';
import { Token } from '@usedapp/core';
import { Account } from '../components/Account';

export default function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Connect to Rinkeby
        </p>
        <ConnectButton />
        <Account />
        <EtherBalance />
        <TokenBalance />
      </header>
    </div>
  );
}

