import { BsFillPencilFill } from "react-icons/bs";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function CardAdmin({ data, ...rest }) {
  const navigate = useNavigate();
  const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`;

  return (
    <Container {...rest}>
      <div className="card">
        <button
          className="favorite"
          onClick={() => navigate("/edit/" + data.id)}
        >
          <BsFillPencilFill size={30} />
        </button>

        <img
          src={avatarURL}
          alt="Imagem do produto"
          onClick={() => navigate("/product/" + data.id)}
        />

        <div className="name" onClick={() => navigate("/product/" + data.id)}>
          <h3>{data.name}</h3>
        </div>

        <p onClick={() => navigate("/product/" + data.id)}>
          {data.description}
        </p>
        <span className="price" onClick={() => navigate("/product/" + data.id)}>
          <span>R$ </span>
          <span>{data.price}</span>
        </span>
      </div>
    </Container>
  );
}
