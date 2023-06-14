import { SlMagnifier } from "react-icons/sl";
import { RxExit } from "react-icons/rx";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import logo from "../../assets/logo.svg";

import { Input } from "../Input";
import { Button } from "../Button";

export function HeaderAdmin({ setSearch = () => {} }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <div
        onClick={() => {
          navigate("/admin");
        }}
        className="div-logo"
      >
        <img src={logo} alt="Logo" className="logo" />
        <span>admin</span>
      </div>

      <Input
        type="text"
        placeholder="Busque por pratos ou ingredientes"
        icon={SlMagnifier}
        onChange={setSearch}
      />

      <Button
        className="button"
        title="Novo Prato"
        onClick={() => navigate("/new")}
      />

      <a onClick={handleSignOut} className="signOut">
        <RxExit />
      </a>
    </Container>
  );
}
