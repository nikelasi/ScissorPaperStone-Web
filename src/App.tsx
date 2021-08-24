import ResultCard from './ResultCard';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Scissor Paper Stone</h1>
        <div className="row" id="actions">
          <div className="col-xs-4">
            <button className="col-xs-12 shadow" id="scissor"><img className="col-xs-12 img-fluid" src={process.env.PUBLIC_URL + "/imgs/scissor.svg"}/></button>
          </div>
          <div className="col-xs-4">
            <button className="col-xs-12 shadow" id="paper"><img className="col-xs-12 img-fluid" src={process.env.PUBLIC_URL + "/imgs/paper.svg"}/></button>
          </div>
          <div className="col-xs-4">
            <button className="col-xs-12 shadow" id="stone"><img className="col-xs-12 img-fluid" src={process.env.PUBLIC_URL + "/imgs/stone.svg"}/></button>
          </div>
        </div>
        <ResultCard />
      </div>
    </div>
  );
}

export default App;
