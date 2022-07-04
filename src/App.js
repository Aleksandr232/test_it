import React from 'react';
import Block from './components/bloks/block';
import BlockRight from './components/bloks/blockright';

import './App.css';


function App() {
  return (
    <div className='ap_fon'>
        <a className='a_text' href="">БИЛЕТЫ И АБОНЕМЕНТЫ</a>
        <div className='grid_a'>
          <a href="">Как купить?</a>
          <a href="">Правила</a>
          <a href="">Возврат билетов</a>
        </div>
     
      <div className='orbit'>
          <div className='mini_orbit'>
          <Block/>
          <BlockRight/>
          </div>
      </div>
    </div>
  );
}

export default App;
