class App extends React.Component {
  constructor (props) {
    super(props);


    let blankRounds = [];
    let roundTotals = [];

    for (let i = 0; i < 10; i++) {
      blankRounds.push([0, -1, 0]);
      roundTotals.push(1);
    }

    this.state = {
      rounds: blankRounds,
      roundTotals: roundTotals
    };
  }

  resetRounds () {
    let blankRounds = [];
    let roundTotals = [];

    for (let i = 0; i < 10; i++) {
      blankRounds.push([-1, -1, -1]);
      roundTotals.push(-1);
    }

    //setstate
  }

  render () {
    return (
    <div>
      <h1>BBBBBOWLING</h1>
      <Scoreboard rounds={this.state.rounds} totals={this.state.roundTotals}/>
    </div>
    );
  }
}

var Scoreboard = (props) => {
  return (
  <div class="scoreboard">
    {props.rounds
      .map((rounds, index) => (<Round round={props.rounds[index]} number={index} total={props.totals[index]}/>))
    }

  </div>
  );
}

var Round = (props) => {
  console.log(props.round);
  var bowl1 = (props.round[0] >= 0) ? props.round[0] : ' ';
  var bowl2 = (props.round[1] >= 0) ? props.round[1] : ' ';

  var bowl3 = (props.round[2] >= 0) ? props.round[2] : ' ';

  var total = (props.total >= 0) ? props.total : '';

  return (
    <div class={(props.number === 9) ? "round round10" : "round"}>
      <div class="bowl1">{bowl1}</div>
      <div class="bowl2">{bowl2}</div>
      {(props.number === 9) ? <div class="bowl3" isTenthRound={false}>{bowl3}</div> : <div />}
      <div class="roundTotal">{total}</div>
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));