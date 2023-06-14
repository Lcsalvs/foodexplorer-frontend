import { useState } from "react";
import logo from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleSignUp() {
    const {name, email, password} = formData

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });

      console.log({ name, email, password })
  }

  return (
    <Container>
      <div className="div-logo">
        <img src={logo} alt="Logo" />
      </div>
      <Form className="form">
        <h1>Cria sua conta</h1>

        <label htmlFor="name">Seu nome</label>
        <Input
          id="name"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

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
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <Button className="button" title="Criar conta " onClick={handleSignUp} />

        <a onClick={() => navigate("/")}>Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
