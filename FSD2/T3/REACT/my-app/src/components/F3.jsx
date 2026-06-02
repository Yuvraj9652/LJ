import {useContext} from 'react'
import {AppContext} from './F1.jsx'

function F3()
{
    const {fname,lname,message,city,gender} = useContext(AppContext)
    return(
        <>
            <h1>First Name: {fname}</h1>
            <h1>Last Name: {lname}</h1>
            <h1>Message: {message}</h1>
            <h1>City: {city}</h1>
            <h1>Gender: {gender}</h1>
        </>
    )
}
export default F3