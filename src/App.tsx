import { useState, useEffect } from 'react'

function App() {

  const [computerChose, setComputerChose] = useState('???')
  const [userChose, setUserChose] = useState('???')
  const [result, setResult] = useState('???')

  const evaluateOption = async (option: string) => {
    const options = ["Scissor", "Paper", "Stone"]
    setUserChose(option)
    setComputerChose(options[Math.floor(Math.random() * options.length)])

  }

  useEffect(() => {
    let final: string = ""
    if (
      (userChose === "Scissor" && computerChose === "Paper") || 
      (userChose === "Paper" && computerChose === "Stone") ||
      (userChose === "Stone" && computerChose === "Scissor")
    ) { final = "You won!" }
    else if (userChose === computerChose) { final = "Tie!" }
    else if (
      (userChose === "Scissor" && computerChose === "Stone") ||
      (userChose === "Paper" && computerChose === "Scissor") ||
      (userChose === "Stone" && computerChose === "Paper")
    ) { final = "Computer won!" }
    else { console.log(userChose, computerChose) }
    
    setResult(final)
  }, [userChose, computerChose])

  return (
    <div className="App">
      <div className="content">
        <h1>Scissor Paper Stone</h1>
        <div className="row" id="actions">
          <div className="col-xs-4">
            <button className="col-xs-12 shadow" onClick={ () => evaluateOption('Scissor') }>
              <img alt="Scissor" className="col-xs-12 img-fluid" src={process.env.PUBLIC_URL + "/imgs/scissor.svg"}/>
            </button>
          </div>
          <div className="col-xs-4">
            <button className="col-xs-12 shadow" onClick={ () => evaluateOption('Paper') }>
              <img alt="Paper" className="col-xs-12 img-fluid" src={process.env.PUBLIC_URL + "/imgs/paper.svg"}/>
            </button>
          </div>
          <div className="col-xs-4">
            <button className="col-xs-12 shadow" onClick={ () => evaluateOption('Stone') }>
              <img alt="Stone" className="col-xs-12 img-fluid" src={process.env.PUBLIC_URL + "/imgs/stone.svg"}/>
            </button>
          </div>
        </div>
        <ResultCard computerChose={computerChose} userChose={userChose} result={result}/>
      </div>
    </div>
  );
}

export interface ResultCardProps {
  computerChose: string
  userChose: string
  result: string
}

const ResultCard: React.FunctionComponent<ResultCardProps> = ({ computerChose, userChose, result }) => {
  return (
      <div id="result-card" className="col-xs-12 shadow">
          <p id="result">
              Computer Chose: { computerChose }<br/>
              You Chose: { userChose }<br/>
              Result: { result }
          </p>
      </div>
  );
}

export default App;
