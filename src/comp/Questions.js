import { useState } from "react"

export const Questions = props => {

    const style = {
        button: {
            height: '10%',
            width: '50%',
            fontSize: '20px',
            marginLeft: '60%',
            background: '#3cbc8d',
            transition: '0.5s',
            textAlign: 'center'
        },
        box: {
            marginTop: '2%',
            marginRight: '2%',
            background: '#1a523d',
            width: '10%',
            height: '5%'
        }
    }
    const [qna, setQnA] = useState([
        {
            id: "0",
            question: "Do you have a fever?",
            answer: false,
            style: style.button,
            text: "No",
            clicker: 1
        },
        {
            id: "1",
            question: "Do you have a dry cough?",
            answer: false,
            style: style.button,
            text: "No",
            clicker: 1
        },
        {
            id: "2",
            question: "Do you have a running nose?",
            answer: false,
            style: style.button,
            text: "No",
            clicker: 1
        },
        {
            id: "3",
            question: "Do you have a soar throat or diarhea?",
            answer: false,
            style: style.button,
            text: "No",
            clicker: 1
        },
        {
            id: "4",
            question: "Have you been out of the pronvice?",
            answer: false,
            style: style.button,
            text: "No",
            clicker: 1
        },
        {
            id: "5",
            question: "Have you been in contact with someone who tested posivite for covid?",
            answer: false,
            style: style.button,
            text: "No",
            clicker: 1
        }
    ])
    const setBool = val => {
        var rem = val%2
        console.log(val)
        console.log(rem)
        if(rem = 0) {return true}
        if(rem != 0) {return false}
        

    }

    const Change = e => {

        console.log(e.target.value)
        /*if(e.target.value = 1){
            setQnA(qna.map((item, index) => {
                if (index === parseInt(e.target.id)) {
                    item = {
                        id: e.target.id,
                        question: item.question,
                        answer: !item.answer,
                        style: {
                            height: '10%',
                            width: '60%',
                            fontSize: '20px',
                            marginLeft: '0%',
                            background: '#3cbc8d',
                            transition: '0.5s',
                            textAlign: 'center'
                        },
                        text: "Yes",
                        clicker: parseInt(e.target.dataset.count) + 1
                    }
                    return item
                } else return item
            }))
        }else if(e.target.value = 0){
            setQnA(qna.map((item, index) => {
                if (index === parseInt(e.target.id)) {
                    item = {
                        id: e.target.id,
                        question: item.question,
                        answer: !item.answer,
                        style: {
                            height: '10%',
                            width: '60%',
                            fontSize: '20px',
                            marginLeft: '60%',
                            background: '#3cbc8d',
                            transition: '0.5s',
                            textAlign: 'center'
                        },
                        text: "Yes",
                        clicker: parseInt(e.target.dataset.count) + 1
                    }
                    return item
                } else return item
            }))
        }*/
    }

    return (
        <div className="form2">
            <form >
                {qna.map(item => {
                    return (<div className="qna">
                        <h2>{item.question}</h2>
                        <input id={item.id} type="checkbox" onChange={Change} /> {/* data-count={item.clicker} */}
                        <div style={style.box}>
                            <label htmlFor={item.id} style={item.style}>{item.text}</label>
                        </div>
                    </div>)
                })}
            </form>
        </div>
    )
}