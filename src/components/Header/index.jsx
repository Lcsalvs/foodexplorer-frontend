import { SlMagnifier } from "react-icons/sl";
import { TfiReceipt } from "react-icons/tfi";
import { RxExit } from "react-icons/rx";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import logo from "../../assets/logo.svg";

import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ setSearch = () => {} }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  function handleCustomerOrder() {
    alert("Essa função estará disponível em breve");
  }

  return (
    <Container>
      <div
        onClick={() => {
          navigate("/");
        }}
        className="div-logo"
      >
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        icon={SlMagnifier}
        onChange={setSearch}
      />

      <Button
        className="button"
        title="Pedidos (0)"
        icon={TfiReceipt}
        onClick={handleCustomerOrder}
      />

      <a onClick={handleSignOut} className="signOut">
        <RxExit />
      </a>
    </Container>
  );
}
