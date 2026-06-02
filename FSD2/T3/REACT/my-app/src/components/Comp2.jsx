// Creates a context for a string value ("Students") and provides it to Comp2.
import React, { createContext } from "react";
import Comp3 from "./Comp3.jsx";

const StringContext = createContext();
function Comp2() {
    const stringValue = "Students";
    return (
        <StringContext.Provider value={stringValue}>
            <Comp3 />
        </StringContext.Provider>
    );
}
export default Comp2;
export { StringContext };