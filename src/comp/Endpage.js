import { Link } from 'react-router-dom'

export const Endpage = () =>{
    return(
        <div className="my_card">
            <h1> Covid-19 Form</h1>
            <p>
                Hello  we thank you for taking time out of your day to fill in this. It is
                imerative that all of us as South Africans be aware of the effect, symptoms and results of
                covid-19. Please press fill button to continue
            </p>
            <Link to='/personal_details' className="fill right">Fill Form</Link>
        </div>
    )
}