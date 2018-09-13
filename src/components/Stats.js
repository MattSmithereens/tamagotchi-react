import React, { Component } from 'react';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hunger: 100,
      health: 100,
      happiness: 100,
      isAlive: true
    }
    this.feed = this.feed.bind(this)
    this.giveAntibiotics = this.giveAntibiotics.bind(this)
    this.play = this.play.bind(this)
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateStats(),
    1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateStats() {
    this.checkDead();
    this.setState({hunger: this.state.hunger - 10});
    this.setState({health: this.state.health - 10});
    this.setState({happiness: this.state.happiness - 10});
    this.whatsMyStatus();
  }

  checkDead() {
    if (this.state.hunger === 10 || this.state.health === 10 || this.state.happiness === 10) {
      this.setState({isAlive: false})
      this.componentWillUnmount();
    }
  }

  feed() {
    if (this.state.isAlive)
    this.setState({hunger: this.state.hunger + 40});
  }

  giveAntibiotics() {
    if (this.state.isAlive)
    this.setState({health: this.state.health + 40});
  }

  play() {
    if (this.state.isAlive)
    this.setState({happiness: this.state.happiness + 40});
  }

  whatsMyStatus() {
    if (this.state.isAlive)
      return 'I feel good!'
    else
      return 'I are ded'
  }

  render() {

    const beInline = {
      display: "inline"
    }

    return (
      <div>
        <div>
          <p>{this.whatsMyStatus()}</p>
        </div>
        <div style={beInline}>
          <p style={beInline}> RedBull Meter: </p>
          <p style={beInline}>{this.state.hunger}</p>
          <button onClick={this.feed}>Give Red Bull</button>
        </div>
        <div style={beInline}>
          <p style={beInline}> Health Meter: </p>
          <p style={beInline}>{this.state.health}</p>
          <button onClick={this.giveAntibiotics}>Five Antibiotics</button>
        </div>
        <div style={beInline}>
          <p style={beInline}> Happiness Meter: </p>
          <p style={beInline}>{this.state.happiness}</p>
          <button onClick={this.play}>Play</button>
        </div>
      </div>
    );
  }
}

export default Stats;
