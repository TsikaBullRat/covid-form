import { useState } from "react"

export const Questions = props => {

    const [answers, setAnswers] = useState([])
    const change = e =>{
        setAnswers([...answers, e.target.value])
    }

    const handleSubmit = () =>{
        props.handleAnswers(answers)
    }
    return (
        <form onSubmit={handleSubmit}>
        <h3>Do you have a fever?</h3>
        <input type="radio" onChange={change}/>

        <h3>Do you have a dry cough?</h3>
        <input type="radio"  onChange={change}/>

        <h3>Do you have a running nose</h3>
        <input type="radio"  onChange={change}/>

        <h3>Do you have a soar throat or diarhea?</h3>
        <input type="radio"  onChange={change}/>

        <h3>Have you been out of the pronvice?</h3>
        <input type="radio"  onChange={change}/>

        <h3>ave you been in contact with someone who tested posivite for covid?</h3>
        <input type="radio"  onChange={change}/>

        </form>
    )
}