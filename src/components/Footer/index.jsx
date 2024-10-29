import * as Element from "./styles";
import polygon from '../../assets/Polygon.jpg'

export function Footer() {
  return (
    <Element.FooterContainer>
      <Element.Logo>
        <img src={polygon} alt="" />
        <h4>Food explorer</h4>
      </Element.Logo>
      <Element.FooterText>
        <h5>© 2023 - Todos os direitos reservados.</h5>
      </Element.FooterText>
    </Element.FooterContainer>
  )
}