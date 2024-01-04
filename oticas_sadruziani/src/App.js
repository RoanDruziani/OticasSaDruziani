import './App.css';

import Logo from './Componnents/Logo';
import QuemSomosNos from './Componnents/QuemSomosNos';
import FalseConosco from './Componnents/FalseConosco';
import Shop from './Componnents/Shop';
import MenuLateral from './Componnents/MenuLateral';
import Carrossel from './Componnents/Carrossel';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className='logo'>
        <Logo/>
        </div>
        <div className='informacao'>
          <QuemSomosNos/>
          <FalseConosco/>
          <Shop/>
          <MenuLateral/>
          <Carrossel/>
        </div>
      </header>
    </div>
  );
}

export default App;
