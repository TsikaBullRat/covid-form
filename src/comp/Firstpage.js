import { Link } from 'react-router-dom'

export const Firstpage = () => {

    const fill = {
        textDecoration: 'none',
        color: '#000',
        //background: '#f0e130',
        padding: '10px 50px'
    }
    const form_info = (
        <div className="my_card">
            <p>
                Hello  we thank you for taking time out of your day to fill in this. It is
                imerative that all of us as South Africans be aware of the effect, symptoms and results of
                covid-19. Please press fill button to continue
            </p>
            <Link to='/personal_details' style={fill}>Fill</Link>
        </div>
    )

    return (
        <>
            {form_info}
        </>
    )
}