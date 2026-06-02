import {createContext} from 'react'
import UC2 from './UC2.jsx'

const Fname = createContext()
const Lname = createContext()

function UC1()
{
    return(
        <>
        <Fname.Provider value={"Yuvraj"}>
            <Lname.Provider value={"Singh"}>
                <UC2/>
            </Lname.Provider>
        </Fname.Provider>
    
        </>
    )
}
export default UC1
export {Fname,Lname}