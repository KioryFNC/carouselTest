// src/pages/Home/index.jsx
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import MacarronMobile from "../../assets/saboresinigualaveis.png";
import { Dish } from "../../components/Dish";
import Salada from '../../assets/salada.png';
import Shrimp from '../../assets/shrimp.png';

import { Carousel } from "../../components/Carousel";

// src/pages/Home/index.jsx
const dishesData = [
  {
    imageSrc: Salada,
    title: 'Salada Ravanello',
    price: '49,97',
    description: 'Rabanetes, folhas verdes e molho agridoce.',
  },
  {
    imageSrc: Shrimp,
    title: 'Camarão',
    price: '89,90',
    description: 'Camarão delicioso com molho especial.',
  },
  {
    imageSrc: Salada,
    title: 'Salada Ravanello',
    price: '49,97',
    description: 'Rabanetes, folhas verdes e molho agridoce.',
  },
  {
    imageSrc: Shrimp,
    title: 'Camarão',
    price: '89,90',
    description: 'Camarão delicioso com molho especial.',
  },
  {
    imageSrc: Salada,
    title: 'Salada Ravanello',
    price: '49,97',
    description: 'Rabanetes, folhas verdes e molho agridoce.',
  },
  {
    imageSrc: Shrimp,
    title: 'Camarão',
    price: '89,90',
    description: 'Camarão delicioso com molho especial.',
  },
];

export function Home() {
  return (
    <Container>
      <Header/>
      <main>
        <div className="macaron"> 
          <img src={MacarronMobile} alt="macaron" />
          <div className="macaronText">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
      
        <h4>Refeições</h4>
        <div className="starterDishes">
          <Carousel dishes={dishesData} />
        </div>

        <h4>Pratos Principais</h4>
        <Dish dish={dishesData[0]} /> {/* Exemplo de prato principal */}
        
        <h4>Bebidas </h4>
        <Dish dish={dishesData[1]} /> {/* Exemplo de bebida */}

        <Footer/>
      </main>
    </Container>
  )
}
