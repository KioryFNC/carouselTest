import { Container } from './styles';

export function TagConfig({ title, ...rest }){
  return(
    <Container {...rest}>
      {title}
    </Container>
  );
}