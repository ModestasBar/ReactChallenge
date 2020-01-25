import React, { useState } from 'react';
import { Calculator } from './components/Calculator';
import { Requirements } from './components/Requirements';
import './App.scss';


const App: React.FC = () => {

  const [name, setName] = useState<string>('');

  return (
    <div className='cont'>
      <Calculator name={name}/>
      <Requirements setName={setName}/>
    </div>
  );
};

export default App;
