import React, {useState} from "react";
import DerivedState from "./DerivedState";


const PassProps = () => { //CREO COMPONENTE FUNCIONAL APP

    const [input, setInput] = useState("Juan")

    return (
        <>
            <div>
                <input onKeyUp={(event) => setInput(event.target.value)}></input>
            </div>
            <DerivedState name={input} />
        </>

    );
}

export default PassProps;