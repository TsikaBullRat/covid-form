import { useState } from "react"

export const Questions = props => {

    const [answers, setAnswers] = useState([])
    const [light, setLight] = useState({
        style: {
            height: '10%',
            width: '50%',
            fontSize: '20px',
            marginLeft: '50%',
            background: '#3cbc8d',
            transition: '0.5s',
            textAlign: 'center'
        },
        text: "No"
    })
    const change = e => {
        setAnswers([...answers, e.target.value])
    }

    const handleSubmit = () => {
        props.handleAnswers(answers)
    }
    const Switch =() =>{
        setLight({
            style: {
                height: '10%',
                width: '50%',
                fontSize: '20px',
                marginLeft: '0%',
                background: '#3cbc8d',
                transition: '0.5s',
                textAlign: 'center'
            },
            text: "Yes"
        } 
        )
    }
    return (
        <div className="form2">
            <form onSubmit={handleSubmit}>

                <div>
                    <h3>Do you have a fever?</h3>
                    <input id="Q1" type="radio" onChange={change} />
                    <div className="switch">
                        <label htmlFor="Q1" style={light.style} onClick={Switch}>{light.text}</label>
                    </div>
                    
                </div>


                <div>
                    <h3>Do you have a dry cough?</h3>
                    <input id="Q2" type="radio" onChange={change} />
                    <label htmlFor="Q2" style={light.style}></label>
                </div>


                <div>
                    <h3>Do you have a running nose</h3>
                    <input id="Q3" type="radio" onChange={change} />
                    <label htmlFor="Q3" style={light.style}></label>
                </div>


                <div>
                    <h3>Do you have a soar throat or diarhea?</h3>
                    <input id="Q4" type="radio" onChange={change} />
                    <label htmlFor="Q4" style={light.style}></label>
                </div>


                <div>
                    <h3>Have you been out of the pronvice?</h3>
                    <input id="Q5" type="radio" onChange={change} />
                    <label htmlFor="Q5" style={light.style}></label>
                </div>


                <div>
                    <h3>Have you been in contact with someone who tested posivite for covid?</h3>
                    <input id="Q6" type="radio" onChange={change} />
                    <label htmlFor="Q6" style={light.style}></label>
                </div>


            </form>
        </div>
    )
}