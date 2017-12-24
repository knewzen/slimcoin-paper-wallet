import React from "react";
import ReactDOM from "react-dom";
import Consts from "./components/consts.js";
import {
  MinimalHeader, MinimalButton,
  MinimalText, HomeBlock, WalletBlock, } from "./components";

class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      status: Consts.Status.SeedGen,
      seed: 0,
    };
  }

  resetState() {
    this.setState({
      status: Consts.Status.SeedGen,
      seed: 0,
    });
  }

  onFinishSeedGen(seed) {
    this.setState({
      status: Consts.Status.KeyView,
      seed: seed,
    });
  }

  render() {
    let content;
    let actionButton = undefined;

    switch(this.state.status) {
      case Consts.Status.SeedGen:
        content = <HomeBlock onFinishGen={this.onFinishSeedGen.bind(this)} />;
        
        actionButton =
          <MinimalButton padded={true}>
            PASSPHRASE
          </MinimalButton>;
        
        break;

      case Consts.Status.KeyView:
        content = <WalletBlock seed={this.state.seed.toString().substr(0, 35)} />;
        
        actionButton =
          <MinimalButton padded={true}>
            DOWNLOAD
          </MinimalButton>;

        break;
    }

    return (
      <div>
        <MinimalHeader>
          <MinimalText inverted={true}>SLIMCOIN PAPER WALLET</MinimalText>
          
          <MinimalButton
            padded={true}
            onClick={this.resetState.bind(this)}>
            RETRY
          </MinimalButton>
          
          {actionButton}
          
          <MinimalButton
            padded={true}>
            HELP
          </MinimalButton>
        </MinimalHeader>
        {content}
      </div>
    );
  }
}

let appContainer = document.getElementById("app");
ReactDOM.render(<App/>, appContainer);
