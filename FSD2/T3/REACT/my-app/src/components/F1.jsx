import {useState,createContext} from 'react'
import F2 from './F2.jsx'

const AppContext = createContext()

function F1()
{
    const [data, setData] = useState({})
    const [formdata, setFormdata] = useState({})
    const hc=(e) => {
        e.preventDefault()
        setData(formdata)
    }
    const hs=(e) => {
        const {name,value} = e.target
        setFormdata({...formdata,[name]:value})
    }
    return(
        <>
        <AppContext.Provider value={data}>
        <form style={{border:"2px solid black",width:"400px",margin:"auto",padding:"20px"}}>
            <label>First Name:</label>
            <input type="text" name="fname" value={formdata.fname} onChange={hs} style={{marginLeft:"10px"}}/><br/><br/>
            <label>Last Name:</label>
            <input type="text" name="lname" value={formdata.lname} onChange={hs} style={{marginLeft:"10px"}}/><br/><br/>
            <label>Message:</label><br/>
            <textarea name="message" value={formdata.message} onChange={hs} rows="4" cols="30" style={{marginTop:"10px"}}></textarea><br/><br/>
            <label>City:</label>
            <select name="city" value={formdata.city} onChange={hs} style={{marginLeft:"10px"}}>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
                <option value="kolkata">Kolkata</option>
            </select><br/><br/>
            <label>Gender:</label>
            <input type="radio" name="gender" value="male" checked={formdata.gender === 'male'} onChange={hs} style={{marginLeft:"10px"}}/> Male
            <input type="radio" name="gender" value="female" checked={formdata.gender === 'female'} onChange={hs} style={{marginLeft:"10px"}}/> Female
            <input type="submit" onClick={hc} style={{marginLeft:"10px"}}/>
        </form>
            <F2/>
        </AppContext.Provider>
        </>
    )
}
export default F1
export {AppContext}