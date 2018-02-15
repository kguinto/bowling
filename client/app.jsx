class App extends React.Component {
  constructor (props) {
    super(props);
    let blankFrames = [];
    let frameTotals = [];

    for (let i = 0; i < 10; i++) {
      blankFrames.push([0, -1, 0]);
      frameTotals.push(1);
    }

    this.state = {
      frames: blankFrames,
      frameTotals: frameTotals,
      pinput: 0
    };
  }

  bowl(pins) {
    console.log('bowling', pins);
  }

  resetFrames () {
    let blankFrames = [];
    let frameTotals = [];

    for (let i = 0; i < 10; i++) {
      blankFrames.push([-1, -1, -1]);
      frameTotals.push(-1);
    }

    this.setState = {
      frames: blankFrames,
      frameTotals: frameTotals
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    this.bowl(this.state.pinput);
  }

  handleChange (e) {
    this.setState({pinput: event.target.value});
  }

  render () {
    return (
    <div>
      <h1>BBBBBOWLING</h1>
      <Scoreboard frames={this.state.frames} totals={this.state.frameTotals}/>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' value={this.state.pinput} onChange={this.handleChange.bind(this)} />
        <input type='submit' value='Bowl' />
      </form>
    </div>
    );
  }
}

var Scoreboard = (props) => {
  return (
  <div class="scoreboard">
    {props.frames
      .map((frames, index) => (<Frame frame={props.frames[index]} number={index} total={props.totals[index]}/>))
    }

  </div>
  );
}

var Frame = (props) => {
  var bowl1 = (props.frame[0] >= 0) ? props.frame[0] : ' ';
  var bowl2 = (props.frame[1] >= 0) ? props.frame[1] : ' ';

  var bowl3 = (props.frame[2] >= 0) ? props.frame[2] : ' ';

  var total = (props.total >= 0) ? props.total : '';

  return (
    <div class={(props.number === 9) ? "frame frame10" : "frame"}>
      <div class="bowl1">{bowl1}</div>
      <div class="bowl2">{bowl2}</div>
      {(props.number === 9) ? <div class="bowl3" isTenthFrame={false}>{bowl3}</div> : <div />}
      <div class="frameTotal">{total}</div>
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));