import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';
import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
