import React from "react";
import KeyView from "./KeyView.js";

class WalletBlock extends React.Component {

  render() {
    let { seed, } = this.props;

    return (
      <div>
        <KeyView pub={true} val={seed} />
        <KeyView pub={false} val={seed} />
      </div>
    );
  }

}

export default WalletBlock;
