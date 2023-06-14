import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { NewIngredient } from "../../components/NewIngredient";
import { useEffect, useState } from "react";
import { api } from "../../services";

export function Product() {
  const [data, setData] = useState("");
  const params = useParams();

  const avatarURL = data && `${api.defaults.baseURL}/files/${data.avatar}`;

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }

    fetchProduct();
  }, []);

  return (
    <Container>
      <main>
        <header className="header">
          <a onClick={() => navigate(-1)}>
            <IoIosArrowBack />
            <span>voltar</span>
          </a>
        </header>

        <div className="details">
          <img src={avatarURL} alt="" />

          <div className="description">
            <h1>{data.name}</h1>
            <p>{data.description}</p>

            {data.ingredients && (
              <div className="ingredients">
                {JSON.parse(data.ingredients).map((item, index) => {
                  return (
                    <NewIngredient
                      className="ingredientsTags"
                      readOnly
                      key={"ingredients-" + index}
                      value={item}
                    />
                  );
                })}
              </div>
            )}

            <div className="purchase">
              <Button className="button" title="Editar prato" onClick={() => navigate("/edit/" + data.id)}/>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}

