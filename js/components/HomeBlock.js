import React from "react";
import SeedBlock from "./SeedBlock.js";
import PointerSampler from "./PointerSampler.js";
import BigInteger from "big-integer";

class HomeBlock extends React.Component {

  constructor() {
    super();

    this.state = {
      progress: 0,
      seed: 0,
    };

    this._digitCount = 500;
    this._modBy = new BigInteger("9".repeat(this._digitCount));
  }

  componentWillMount() {
    this.initBaseSeed();
  }

  initBaseSeed() {
    this.setState({
      seed: BigInteger.randBetween(
        `1e${this._digitCount}`, `10e${this._digitCount}`),
    });
  }

  onReceiveSample(sample) {
    this.setState({
      progress: this.state.progress+1,
      seed: this.state.seed.times(sample).mod(this._modBy),
    });
  }

  render() {
    let { onFinishGen, } = this.props;
    onFinishGen = onFinishGen || (() => {});
    let active = this.state.progress<100;

    if (!active) {
      onFinishGen(this.state.seed);
    }

    return (
      <div>
        <PointerSampler onSampleGen={this.onReceiveSample.bind(this)} active={active} />
        <SeedBlock progress={this.state.progress} data={this.state.seed.toString()} />
      </div>
    );
  }

}

export default HomeBlock;
