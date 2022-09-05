import React, { useContext, useState } from "react";
import { ButtonColorContext } from "./App";

export default function Counter ({ initialCount }) {
    const [count, setCount] = useState(initialCount)
    const buttonColor = useContext(ButtonColorContext)
    return (
        <>
        <div>
            <button style={{...buttonColor, borderRadius: '5px'}} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <span> {count} </span>
            <button style={{...buttonColor, borderRadius: '5px'}} onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <br />
            <br />
            <button onClick={() => setCount(0)}>Reset Count</ button>
        </div>
        </>
    )
}