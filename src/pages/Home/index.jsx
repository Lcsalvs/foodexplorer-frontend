import homeImg from "../../assets/home-img.svg";
import { Container } from "./styles";

import { api } from "../../services";

import { Card } from "../../components/Card";
import { Section } from "../../components/Section";
import { useState, useEffect } from "react";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  return (
    <Container>
      <main>
        <header className="home-img">
          <img src={homeImg} alt="Banner com algumas frutas e doces" />
        </header>

        <div className="cards">
          {products.filter((product) => product.category == "meals").length >
            0 && (
            <Section name="Refeições">
              {products
                .filter((products) => products.category == "meals")
                .map((item, index) => (
                  <Card key={String(index)} data={item} />
                ))}
            </Section>
          )}
        </div>

        <div className="cards">
          {products.filter((product) => product.category == "desserts").length >
            0 && (
            <Section name="Sobremesas">
              {products
                .filter((products) => products.category == "desserts")
                .map((item, index) => (
                  <Card key={String(index)} data={item} />
                ))}
            </Section>
          )}
        </div>

        <div className="cards">
          {products.filter((product) => product.category == "beverages")
            .length > 0 && (
            <Section name="Bebidas">
              {products
                .filter((products) => products.category == "beverages")
                .map((item, index) => (
                  <Card key={String(index)} data={item} />
                ))}
            </Section>
          )}
        </div>
      </main>
    </Container>
  );
}
