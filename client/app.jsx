class App extends React.Component {
  constructor (props) {
    super(props);
    let blankFrames = [];
    let frameTotals = [];

    for (let i = 0; i < 10; i++) {
      blankFrames.push([-1, -1, -1]);
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
    console.log(this.state.frames);
    let frames = this.state.frames;

    for (let i = 0; i < 10; i++) {
      let frame = frames[i];

      if (frame[0] < 0) {
        frame[0] = pins;

        //Strike: set frame[1] to 0
        if (pins == 10 && i < 9) {
          frame[1] = 0;
        }
        break;
      } else if (frame[1] < 0) {
        frame[1] = pins;
        break;
      } else if (i === 9 && frame[2] < 0 && frame[0] + frame[1] >= 10) {
        frame[2] = pins;
        break;
      }
    }
    this.setState({frames: frames});

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
    this.bowl(Number.parseInt(this.state.pinput));
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
  var bowl1 = (props.frame[0] >= 0) ? props.frame[0] : '';
  var bowl2 = (props.frame[1] >= 0) ?  props.frame[1] : '';

  var bowl3 = (props.frame[2] >= 0) ?  props.frame[2] : '';

  var total = (props.total >= 0) ? props.total : '';
  if(props.number === 9) {
    console.log(props.frame);
  }

  if(bowl1 == 10) {
    bowl1 = 'X';
    bowl2 = '';
  } else if (props.number < 9 && bowl1 + bowl2 == 10) {
    bowl2 = '/';
  }
  
  if (props.number == 9 && props.frame[0] == 10 && props.frame[1] == 10) {
    // edge case: 10th frame, strikes on bowl 1 and 2
    bowl2 = 'X';
  } else if (props.number == 9 && bowl1 < 10 && bowl1 + bowl2 == 10) {
    // edge case: 10th frame, no strike on bowl 1
    bowl2 = '/';
  } 
  if(props.number == 9 && props.frame[2] === 10) {
    bowl3 = 'X';
  }

  return (
    <div class={(props.number === 9) ? "frame frame10" : "frame"}>
      <div class="bowl1">{bowl1}</div>
      <div class="bowl2">{bowl2}</div>
      {(props.number === 9) ? <div class="bowl3" isTenthFrame={false}>{bowl3}</div> : <div />}
      <div class="frameTotal">{props.number}</div>
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));