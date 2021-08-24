export interface ResultCardProps {
    
}
 
const ResultCard: React.SFC<ResultCardProps> = () => {
    let computerChose = "???"
    let userChose = "???"
    let result = "???"

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
 
export default ResultCard;