import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { api } from "../../services";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "./styles";

import { Button } from "../Button";
import { Counter } from "../Counter";
import { useState } from "react";

export function Card({ data, ...rest }) {
  const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`;
  const [iconVisible, setIconVisible] = useState(true);

  const navigate = useNavigate();
  const params = useParams();

  const toggleIcon = () => {
    setIconVisible(!iconVisible);
  };

  function handleInclude() {
    alert("Essa função estará disponível em breve.");
  }

  return (
    <Container {...rest}>
      <div className="card">
        <button className="favorite" onClick={toggleIcon}>
          <AiOutlineHeart size={30} />
        </button>

        <img
          src={avatarURL}
          alt=""
          onClick={() => navigate("/cart/" + data.id)}
        />

        <div className="name" onClick={() => navigate("/cart/" + data.id)}>
          <h3>{data.name}</h3>
        </div>

        <p onClick={() => navigate("/cart/" + data.id)}>{data.description}</p>
        <span className="price" onClick={() => navigate("/cart/" + data.id)}>
          R$ <span>{data.price}</span>
        </span>

        <div className="div-count">
          <Counter />
          <Button title="incluir" onClick={handleInclude} />
        </div>
      </div>
    </Container>
  );
}
