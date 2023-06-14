import { IoIosArrowBack } from "react-icons/io";
import { RxExit } from "react-icons/rx";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { api } from "../../services";
import { useEffect, useState } from "react";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NewIngredient } from "../../components/NewIngredient";
import { TextArea } from "../../components/TextArea";

export function New() {
  const params = useParams();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    category: "meals",
    ingredients: [],
    newIngredients: "",
    description: "",
    price: 0,
    avatarFile: "",
    avatarFileName: "",
  });

  const [originalData, setOriginalData] = useState({
    name: "",
    category: "meals",
    ingredients: [],
    newIngredients: "",
    description: "",
    price: 0,
    avatarFile: "",
    avatarFileName: "",
  });

  const [formError, setFormError] = useState({
    name: null,
    category: null,
    ingredients: null,
    description: null,
    price: null,
    avatarFile: null,
  });
  function formValidate() {
    const { name, category, description, price, avatarFile } = formData;

    const errorSchema = {
      name: name.length === 0 && "Este campo é obrigatório!",
      category: category.length === 0 && "Este campo é obrigatório!",
      ingredients: category.length === 0 && "Este campo é obrigatório!",
      description: description.length === 0 && "Este campo é obrigatório!",
      price: price === 0 && "Favor informar o preço do produto!",
      avatarFile: avatarFile.length === 0 && "Este campo é obrigatório!",
    };

    setFormError({ ...formError, ...errorSchema });

    // Retorna se o objeto errorSchema tem todos os seus valores como falso.
    // Caso sim, o formulário está válido.

    return Object.values(errorSchema).every((v) => v === false);
  }

  const navigate = useNavigate();

  // Se existir id e existir edit no path. Estou em modo edição
  const isEditMode = params?.id && location?.pathname.indexOf("edit") > -1;

  const changedData = JSON.stringify(originalData) !== JSON.stringify(formData);

  function handleAddIngredient() {
    setFormData((prevState) => ({
      ...prevState,
      newIngredients: "",
      ingredients: [...prevState.ingredients, formData.newIngredients],
    }));
  }

  async function handleRemoveProduct() {
    const confirm = window.confirm("Deseja realmente remover esse produto?");

    if (confirm) {
      await api.delete(`/products/${params.id}`);
      alert("Produto excluído com sucesso!");
      navigate("/");
    }
  }

  function handleRemoveIngredient(deleted) {
    setFormData((prevState) => {
      const newRemovedIngredients = prevState.ingredients.filter(
        (item, index) => index !== deleted
      );

      return {
        ...prevState,
        ingredients: newRemovedIngredients,
      };
    });
  }

  function handleProduct() {
    if (formValidate()) {
      const newFormData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "ingredients") {
          formData[key].forEach((item) =>
            newFormData.append("ingredients[]", item)
          );
        } else {
          newFormData.append(key, formData[key]);
        }
      });

      if (isEditMode) {
        api.put(`/products/${params.id}`, newFormData);
      } else {
        api.post("/products", newFormData);
      }

      alert("Produto alterado com sucesso!");
      navigate("/")
    }
  }

  const getProductDataById = async (id) => {
    const response = await api.get("/products/" + id);

    if (response.status === 200) {
      const { name, category, ingredients, description, price, avatar } =
        response.data;

      setFormData({
        ...formData,
        name,
        category,
        ingredients: JSON.parse(ingredients),
        description,
        price,
        avatarFile: avatar,
        avatarFileName: avatar,
        newIngredients: "",
      });

      setOriginalData(
        JSON.parse(
          JSON.stringify({
            ...originalData,
            name,
            category,
            ingredients: JSON.parse(ingredients),
            description,
            price,
            avatarFile: avatar,
            avatarFileName: avatar,
            newIngredients: "",
          })
        )
      );
    } else {
    }
  };

  useEffect(() => {
    if (isEditMode) {
      getProductDataById(params.id);
    }

    setFormData({
      name: "",
      category: "meals",
      ingredients: [],
      newIngredients: "",
      description: "",
      price: 0,
      avatarFile: "",
      avatarFileName: "",
    });
  }, []);

  useEffect(() => {
    if (params.id) {
      console.log(params);
    }
  }, [params]);

  return (
    <Container>
      <main>
        <Form>
          <header>
            <a href="">
              <IoIosArrowBack />
              <span onClick={() => navigate("/")}>voltar</span>
            </a>
            <h1>{isEditMode ? "Editar prato" : "Adicionar novo prato"}</h1>
          </header>

          <div className="inputs">
            <div className="img-name-cat">
              <div className="div-img">
                <span>Imagem do prato</span>
                <div className="inputImage">
                  <label className="labelInputImage" htmlFor="uploadImg">
                    <RxExit size={24} />
                    <p>
                      {formData.avatarFileName.length > 0
                        ? formData.avatarFileName
                        : "Selecione imagem"}
                    </p>
                  </label>
                  <Input
                    id="uploadImg"
                    className="input-img"
                    type="file"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        avatarFileName: e.target.files[0].name,
                        avatarFile: e.target.files[0],
                      });
                    }}
                  />
                </div>
              </div>

              <div className="name">
                <label htmlFor="meals">Nome</label>
                <Input
                  value={formData.name}
                  type="text"
                  placeholder="Ex: Salada Ceasar"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="category">
                <label htmlFor="category">Categoria</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="meals">Refeição</option>
                  <option value="beverages">Bebidas</option>
                  <option value="desserts">Sobremesas</option>
                </select>
              </div>
            </div>

            <div className="ingre-price">
              <div className="ingredients">
                <label htmlFor="section">Ingredientes</label>
                <div className="ingredients-tags">
                  <NewIngredient
                    isNew
                    placeholder="Adicionar"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        newIngredients: e.target.value,
                      })
                    }
                    value={formData.newIngredients}
                    onClick={
                      formData.newIngredients.length
                        ? handleAddIngredient
                        : () => {}
                    }
                  />
                  {formData.ingredients.map((ingredient, index) => {
                    return (
                      <NewIngredient
                        key={String(index)}
                        value={ingredient}
                        onClick={() => {
                          console.log("click");
                          handleRemoveIngredient(index);
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="price">
                <label htmlFor="price">Preço</label>
                <Input
                  value={formData.price}
                  type="number"
                  placeholder="R$ 00,00"
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  error={formError.price}
                />
                <p style={{ color: "red" }}>{formError.price}</p>
              </div>
            </div>

            <div className="description">
              <label htmlFor="textarea">Descrição</label>
              <TextArea
                value={formData.description}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="buttons">
              {isEditMode && (
                <Button
                  className="button-del"
                  title="Excluir prato"
                  onClick={handleRemoveProduct}
                />
              )}

              <Button
                className="button"
                disabled={!changedData}
                title="Salvar alterações"
                onClick={handleProduct}
              />
            </div>
          </div>
        </Form>
      </main>
    </Container>
  );
}
