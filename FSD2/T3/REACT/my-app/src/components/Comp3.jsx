// Consumes both contexts and displays a message with the provided styles and string.
import React, { useContext } from "react";
import { StringContext } from "./Comp2.jsx";
import { StyleContext } from "./Comp1.jsx";
function Comp3() {
    const stringValue = useContext(StringContext);
    const style = useContext(StyleContext);
    return (
        <div>
            <h1 style={style}>Hello, {stringValue}!</h1>
        </div>
    );
}
export default Comp3;
