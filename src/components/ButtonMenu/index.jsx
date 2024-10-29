import { Container } from './styles';

export function ButtonMenu({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  )
}