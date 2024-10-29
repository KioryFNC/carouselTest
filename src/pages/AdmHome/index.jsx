import { Container } from "./styles";
import { HeaderAdm } from "../../components/HeaderAdm";
import { Footer } from "../../components/Footer";
import MacarronMobile from "../../assets/saboresinigualaveis.png"
import { DishAdm } from "../../components/DishAdm";

import Salada from '../../assets/salada.png'
import Shrimp from '../../assets/shrimp.png'
export function AdmHome() {
  return(
    <Container>
      <HeaderAdm/>
      <main>
        <div className="macaron">
          <img src={MacarronMobile} alt="macaron" />
          <div className="macaronText">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
        <h4>Refeições</h4>
          <DishAdm imageSrc={Salada} title="Salada Ravanello" price="49,97" description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"}/>
          <DishAdm imageSrc={Shrimp} title="Camarão" price="49,97"/>
        <h4>Pratos Principais</h4>
          <DishAdm/>
        <h4>Bebidas </h4>
          <DishAdm/>
        <Footer/>
      </main>
    </Container>
  )
}