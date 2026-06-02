// Creates a context for CSS styling and provides it to Comp1.
import { createContext } from 'react';
import Comp2 from './Comp2.jsx'

const StyleContext = createContext();
function Comp1() {
    const style = {
        color: 'blue',
        fontSize: '24px',
        fontWeight: 'bold',
    };
    return (
        <StyleContext.Provider value={style}>
            <Comp2 />
        </StyleContext.Provider>
    );
}
export default Comp1;
export { StyleContext };