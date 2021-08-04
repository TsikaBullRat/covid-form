export const Question = props => {

    const Change = () => props.Change()

    return (
        <div className="qna">
            {console.log(props)}
            <h3>{props.question}</h3>
            <input id={props.id} type="checkbox" checked={props.answer} onChange={Change} />
            <div className="switch">
                <label htmlFor={props.id} style={props.style.style}>{props.style.text}</label>
            </div>
        </div>
    )
}