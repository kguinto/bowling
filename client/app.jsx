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
  return (<div class="round">{props.score} {props.number}</div>);
}

ReactDOM.render(<App />, document.getElementById('app'));