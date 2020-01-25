import React from 'react';

interface CalcButtonProps {
  char: string;
  onClick: (char:string) => void;
}

export const CalcButton: React.FC<CalcButtonProps> = props => <div onClick={() => props.onClick(props.char)} className='calc-button'>{props.char}</div>;
