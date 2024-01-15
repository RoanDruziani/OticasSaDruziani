import './App.css';

import Logo from './Componnents/Logo';
import QuemSomosNos from './Componnents/QuemSomosNos';
import FaleConosco from './Componnents/FalseConosco';
import Shop from './Componnents/Shop';
import MenuLateral from './Componnents/MenuLateral';
import Carrossel from './Componnents/Carrossel';
import Card from './Componnents/Card/Card';



function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className='logo'>
        <Logo/>
        </div>
        <div className='informacao'>
          <QuemSomosNos/>
          <FaleConosco/>
          <Shop/>
          <MenuLateral/>
        </div>
      </header>
      <Carrossel/>
      <div className='Conj_Card'>
        <Card/>
      </div>
    </div>
  );
}

export default App;
