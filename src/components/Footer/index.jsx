import { Container } from "./styles";
import logoGray from '../../assets/logo-gray.svg'

export function Footer() {
  return (
    <Container>
      <footer>
        <img src={logoGray} alt="Logo em cinza" />

        <p>© 2023 - Todos os direitos reservados.</p>
      </footer>
    </Container>
  );
}
