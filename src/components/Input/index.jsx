import { Container } from "./styles";

export function Input({
  icon: Icon,
  error = false,
  errorMessage = "",
  ...rest
}) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
}
