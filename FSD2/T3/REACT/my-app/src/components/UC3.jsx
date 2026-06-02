import {useContext} from 'react'
import {Fname,Lname} from './UC1.jsx'

function UC3()
{
    const fname = useContext(Fname)
    const lname = useContext(Lname)
    return(
        <>
            <h1>My name is {fname} {lname}</h1>
        </>
    )
}
export default UC3