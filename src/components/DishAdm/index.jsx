import { Container } from './styles';
import { PiPencilSimpleLight } from "react-icons/pi";
export function DishAdm({imageSrc, title, price, description}) {
  return (
    <Container>
      <div className="card">
        <PiPencilSimpleLight/>
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p className="price">R${price}</p>
        <p className="description">{description}</p>
      </div>
    </Container>
  )
}