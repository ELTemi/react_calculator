import React from 'react';

function Result(props) {
    const {result} = props;
    
    return (
        <div className="result-body">
           <p>{result}</p>
        </div>
    );
}

export default Result;