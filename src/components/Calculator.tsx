import React, { useState, useEffect } from 'react';
import { CalcButton } from './Button';
import '../App.scss';

const characters = ['=', 'C', '*', '/', '-', '+', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', ''];

interface Props {
  name: string;
}

interface IState {
  equation: string,
  result: string,
}

const initState: IState = {
  equation: '',
  result: '',
}

export const Calculator: React.FC<Props>= ({ name }) => {

  let [{ equation, result }, setState] = useState<IState>(initState);

  useEffect(() => setState({...initState}), [name]);

  const handleEquation = (symbol:string) => {
    switch(symbol) {
      case '=':
        try {
          setState({ equation: eval(equation), result:eval(equation) });
          } catch (e) {
            alert('Invalid equation, try again');
            setState({...initState});
        }
      break;
      case 'C':
        setState({...initState});
      break;
      default:
        setState({ equation: equation+=symbol, result})
      break;
    }
  };

  return (
    <div className='calculator-wrapper'>
      <h2 className='calculator-title'>{name}</h2>
      <div className='calculator'>
        <div>
          <h3 className='result-small'>{equation}</h3>
        </div>
        <div className='result'>
          <h1>{result}</h1>
        </div>
        {characters.map((val, i) => <CalcButton key={i} onClick={handleEquation} char={val} />)}
      </div>
    </div>
  );
};
