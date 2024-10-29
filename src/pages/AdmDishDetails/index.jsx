import { HeaderAdm } from "../../components/HeaderAdm";
import { Footer } from "../../components/Footer";
import { ButtonBack } from "../../components/ButtonBack";
import { Container } from "./styles";
import Salada from "../../assets/saladaBig.png";
import {Tag} from "../../components/Tag";
import {ButtonMain} from "../../components/ButtonMain";
export function AdmDishDetails() {
  return(
    <Container>
        <HeaderAdm/>
      <main>
        <ButtonBack/>
        <div className="responsiveMenu">
          <div className="salad">
            <img src={Salada} alt="" />
          </div>
          <div className="content">
          <h2>Salada Ravanello</h2>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
          <div className="tags">
            <Tag title="alface"/>
            <Tag title="cebola"/>
            <Tag title="pão naan"/>
            <Tag title="pepino"/>
          </div>
          <div className="edit">
            <ButtonMain title="Editar prato"/>
          </div>
          </div>
        </div>
      </main>
        <Footer/>
    </Container>
  )

}