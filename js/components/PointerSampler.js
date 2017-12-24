import React from "react";

class PointerSampler extends React.Component {

  constructor() {
    super();

    this._buffer = [];
    this._active = false;
    this._perSample = 20;
    this._onSampleGen = () => {};
  }

  componentWillMount() {
    window.onmousemove = this.processSample.bind(this);
  }

  componentWillUnmount() {
    window.onmousemove = () => {};
  }

  processSample(event) {
    if (this._active) {
      this._buffer.push(event.x+event.y);

      let bufferlen = this._buffer.length;
      if (bufferlen === this._perSample) {
        
        let sampleIndex = Math.floor(Math.random()*bufferlen);
        let sample = this._buffer[sampleIndex];
        
        this._onSampleGen(sample);
        this._buffer = [];
      }
    }
  }

  render() {
    let { onSampleGen, perSample, active, } = this.props;

    this._active = active === true;
    this._perSample = perSample || 20;
    this._onSampleGen = onSampleGen || (() => {});

    return (null);
  }

}

export default PointerSampler; 
