import React, {useState} from 'react';
import { evaluate} from 'mathjs';
import KeyPad from './KeyPad';
import Result from './Result';

function Calculator() {
    const [result, setResult] = useState("");
    const operations = {
        "equals" : "="
        // "plus" : "+",
        // "minus" : "-",
        // "division" : "/",
        // "multiply" : "*"
    }

    const handleClick = (button) => {
        if(Object.values(operations).includes(button)) {
            calculate();
        } else if (button === "C") {
            reset();
        } else if (button === "CE") {
            backSpace();
        } else {
            let tempResult = result + button;
            setResult(tempResult);
        }
    
    }

    const reset = () => {
        setResult("");
    };

    const calculate = () => {
        let resultString = "";

        try {
            resultString = evaluate(result)
            setResult(resultString);
        } catch(e) {
            setResult("error")
        }
    }

    const backSpace = () => {
        let newResult = result.slice(0, -1);
        setResult(newResult);
    }

    return (
        <div>
            <Result result={result} />
            <KeyPad onClick ={handleClick}/>
        </div>
    );
}

export default Calculator