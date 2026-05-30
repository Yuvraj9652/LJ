import Props from "./Props.jsx";
import OCl from "./OClick.jsx";
import EventsTask from "./Event_Task.jsx";
function APPP(){
    let data = {name:"Watch", price:20000}
    return(
        <>
        <Props Name="Mobile" Price="10000"/> 
        <Props Name="Laptop" Price="50000"/>
        <Props Name={data.name} Price={data.price}/>
        <OCl/>
        <EventsTask></EventsTask>
        </>
    )
}
export default APPP;