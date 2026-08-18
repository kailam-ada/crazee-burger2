import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  // const newProduct = {
  //   id: new Date().getTime(),
  //   title: "Nouveau Produit",
  //   imageSource: "/images/ice-cream.png",
  //   price: 2.5,
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: new Date().getTime(),
      title: title,
      imageSource: imageSource,
      price: price,
    };

    handleAdd(newProduct);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleImageSourceChange = (event) => {
    setImageSource(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune Image</div>
      <div className="input-fields">
        <input
          value={title}
          type="text"
          placeholder="Name"
          onChange={handleTitleChange}
        />
        <input
          value={imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleImageSourceChange}
        />
        <input
          value={price ? price : ""}
          type="text"
          placeholder="Price"
          onChange={handlePriceChange}
        />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;

  .image-preview {
    background: red;
    grid-area: 1/1/4/2;
  }
  .input-fields {
    background: blue;
    grid-area: 1/2/4/3;

    display: grid;
  }
  .submit-button {
    background: green;
    grid-area: 4/2/5/3;
    width: 50%;
  }
`;
