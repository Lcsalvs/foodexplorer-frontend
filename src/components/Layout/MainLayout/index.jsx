import { useEffect, useState } from "react";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { HeaderAdmin } from "../../HeaderAdmin";
import { Container } from "./styles";
import { api } from "../../../services";

export default function MainLayout({ Component, isAdmin }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products/?search=${search}`);
      setProducts(response.data);
    }
    fetchProducts();
  }, [search]);

  return (
    <Container>
      {isAdmin ? (
        <HeaderAdmin setSearch={(e) => setSearch(e.target.value)} />
      ) : (
        <Header setSearch={(e) => setSearch(e.target.value)} />
      )}
      <div className="main-layout">
        <Component />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Container>
  );
}
