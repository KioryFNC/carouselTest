import { Container, Form } from './styles';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { LiaUserSolid } from "react-icons/lia";
import { Input } from '../../components/Input';
import { ButtonMain } from '../../components/ButtonMain';
import polygon from '../../assets/Polygon.jpg'
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
      <Form>
        <main>
          <div className="logo">
            <img src={polygon} alt="" />
            <h1>food explorer</h1>
          </div>
          <div className="container">
            <h2>Criar conta</h2>
              <Input
                className="custom-input"
                placeholder="Seu nome"
                type="password"
                icon={LiaUserSolid}
                />
              <Input
                className="custom-input"
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />
              <Input
                className="custom-input"
                placeholder="Senha"
                type="password"
                icon={FiLock}
                />
              <ButtonMain title="Entrar" />
              <Link to="/">
                Já tenho uma conta
              </Link>
            </div>
        </main>
      </Form>
    </Container>
  );
}