class App extends React.Component {
  render () {
    return (
    <div>
      <h1>BBBBBOWLING</h1>
      <Scoreboard />
    </div>
    );
  }
}

var Scoreboard = (props) => {
  return (
  <div class="scoreboard">
    {(new Array(10)).fill(0)
      .map((score, index) => (<Round score={score} number={index}/>))
    }

  </div>
  );
}

var Round = (props) => {

  return (
    <div class={(props.number === 9) ? "round round10" : "round"}>
      <div class="bowl1">7</div>
      <div class="bowl2">2</div>
      {(props.number === 9) ? <div class="bowl3" isTenthRound={false}>0</div> : <div />}
      <div class="roundTotal">9</div>
    </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));