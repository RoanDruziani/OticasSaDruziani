import './App.css';

import Logo from './Componnents/Logo/Logo';
import InfoHeader from './Componnents/InfoHeaders/InfoHeader';
import Shop from './Componnents/Shop/Shop';
import MenuLateral from './Componnents/MenuLateral/MenuLateral';
import Carrossel from './Componnents/Carrossel/Carrossel';
import Card from './Componnents/Card/Card';
import InfoFooter from './Componnents/InfoFooter/InforFooter';
import Cloud from './Componnents/Clound/Cloud';



function App() {

  return (
    <div className="App">
      <header className="Header">

        <Logo
          Title="TiltleTema_1"
          SubTitle="SubTitleTema_1"
        />
        <div className='InfoHeader'>
          <InfoHeader
            text='Quem somos nós'
          />
          <InfoHeader
            text='Fale conosco'
          />
          <Shop/>
          <MenuLateral/>
        </div>
      </header>
      <div className='D_Carrosel'>
        <Carrossel/>
      </div>
      <div className='Conj_Card'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <footer className='footer'> 
          <div className='InfoFooter'>
            <InfoFooter
              Title="Teste"
              Descript="Teste"
            />
            <InfoFooter
              Title="Teste"
              Descript="Teste"
            />
          </div>
      </footer>
    </div>
  );
}

export default App;
