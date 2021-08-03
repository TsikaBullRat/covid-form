import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Firstpage = () => {

    const [fill, setFill] = useState({
        textDecoration: 'none',
        color: '#fff',
        fontSize: 25,
        background: '#1a523d',
        padding: '10px 50px'
    })

    const hoverIn = () => {
        setFill({
            textDecoration: 'none',
            color: '#000',
            fontSize: 25,
            background: '#fff',
            padding: '10px 50px'
        })
    }
    const hoverOut = () =>{
        setFill({
            textDecoration: 'none',
            color: '#fff',
            fontSize: 25,
            background: '#1a523d',
            padding: '10px 50px'
        })
    }
    const form_info = (
        <div className="my_card">
            <h1> Covid-19 Form</h1>
            <p>
                Hello  we thank you for taking time out of your day to fill in this. It is
                imerative that all of us as South Africans be aware of the effect, symptoms and results of
                covid-19. Please press fill button to continue
            </p>
            <Link to='/personal_details' style={fill} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>Fill Form</Link>
        </div>
    )
    

    return (
        <>
            {form_info}
        </>
    )
}