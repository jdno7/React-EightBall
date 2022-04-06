import './EightBall.css'
import React, {useState} from 'react';

const EightBall = (props) => {
    console.log(props.statements);
    const randStatement = () => {
        return props.statements[Math.floor(Math.random() * props.statements.length)]
    }

    const [statement, getStatement] = useState({msg:'Think of a Question', color: 'black'})
    console.log(statement)
    return (
        
        <div className="EightBall" style={{backgroundColor:statement.color}} onClick={() => getStatement(randStatement)}>
            <p className="EightBall-statment">{statement.msg}</p>
        </div>
    )
}




export default EightBall;