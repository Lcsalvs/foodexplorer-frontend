import { Container } from "./styles";

export function Button({ icon: Icon, disabled = false, title, ...rest }) {
  return (
    <Container disabled={disabled} type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
