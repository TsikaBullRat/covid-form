import { useState } from "react"
import { Link } from 'react-router-dom'

export const Personal = () => {

    

    return (
        <div className="form1">

            <label htmlFor="">FIrst Names: </label>
            <input type="text" id="first" />

            <label htmlFor="">Lastname: </label>
            <input type="text" id="last" />

            <label htmlFor="">Date of birth: </label>
            <input type="date" id="dob" />

            <label htmlFor="">cellphone: </label>
            <input type="tel" id="phone" />

            <label htmlFor="">Email: </label>
            <input type="email" id="email" />

            <label htmlFor="">Address: </label>
            <input type="text" id="address" />

            <Link to='/questionare' className="fill right" >Next</Link>
        </div>
    )
    }