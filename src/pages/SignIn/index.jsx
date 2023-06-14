import logo from "../../assets/logo.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn() {
    signIn(formData);
  }

  return (
    <Container>
      <div className="div-logo">
        <img src={logo} alt="Logo" />
      </div>
      <Form className="form">
        <h1>Faça login</h1>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <Button className="button" title="Entrar " onClick={handleSignIn} />

        <a onClick={() => navigate("/register")}>Criar uma conta</a>
      </Form>
    </Container>
  );
}
