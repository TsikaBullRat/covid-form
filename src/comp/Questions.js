import { useState } from "react"
import { Link } from 'react-router-dom'

export const Questions = props => {

    
    const [answer, setAnswer] = useState([false,false,false,false,false,false])
    const [qna, setQnA] = useState([
        {
            id: 0,
            question: "Do you have a fever?",
            answer: false,
            style: {marginLeft: '40%'},
            text: "No",
        },
        {
            id: 1,
            question: "Do you have a dry cough?",
            answer: false,
            style: {marginLeft: '40%'},
            text: "No",
        },
        {
            id: 2,
            question: "Do you have a running nose?",
            answer: false,
            style: {marginLeft: '40%'},
            text: "No",
        },
        {
            id: 3,
            question: "Do you have a soar throat or diarhea?",
            answer: false,
            style: {marginLeft: '40%'},
            text: "No",
        },
        {
            id: 4,
            question: "Have you been out of the pronvice?",
            answer: false,
            style: {marginLeft: '40%'},
            text: "No",
        },
        {
            id: 5,
            question: "Have you been in contact with someone who tested posivite for covid?",
            answer: false,
            style: {marginLeft: '40%'},
            text: "No",
        }
    ])
    const Change = e => {
        if ( e.target.checked) {
            setQnA(qna.map((item, index) => {
                if (index === parseInt(e.target.id)) {
                    item = {
                        id: e.target.id,
                        question: item.question,
                        answer: e.target.checked,
                        style: {marginLeft: '-10%'},
                        text: "Yes",
                    }
                    return item
                } else return item
            }))
        } else{
            setQnA(qna.map((item, index) => {
                if (index === parseInt(e.target.id)) {
                    item = {
                        id: e.target.id,
                        question: item.question,
                        answer: e.target.checked,
                        style: {marginLeft: '40%'},
                        text: "No",
                    }
                    return item
                } else return item
            }))
        }   
    }

    const Log = () =>console.log(qna.map(item=>item.answer))
    return (
        <div className="form2" onChange={Log}>
            <form >
                {qna.map((item, index) => {
                    return (<div className="qna">
                        <h2>{item.question}</h2>
                        <input id={index} type="checkbox" onChange={Change} value={answer[index]}/>
                        <div className="switch">
                            <label htmlFor={item.id} style={item.style}>{item.text}</label>
                        </div>
                    </div>)
                })}
                <Link to='/questionare' className="fill right" >Complete</Link>
            </form>
        </div>
    )
}