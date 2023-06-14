import { IoIosArrowBack } from "react-icons/io";

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services";

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Counter } from "../../components/Counter";
import { useEffect, useState } from "react";
import { NewIngredient } from "../../components/NewIngredient";

export function Cart() {
  const [data, setData] = useState(null);

  const avatarURL = data && `${api.defaults.baseURL}/files/${data.avatar}`;

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products/${params.id}`);
      setData({
        ...response.data,
      });
    }
    fetchProducts();
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
            <h1>{data?.name}</h1>
            <p>{data?.description}</p>

            {data?.ingredients && (
              <div className="ingredients">
                {JSON.parse(data.ingredients).map((item, index) => {
                  return (
                    <NewIngredient
                      readOnly
                      key={"ingredients-" + index}
                      value={item}
                    />
                  );
                })}
              </div>
            )}

            <div className="purchase">
              <Counter />
              <Button
                className="button"
                title={`incluir ∙ R$ ${data?.price}`}
              />
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
